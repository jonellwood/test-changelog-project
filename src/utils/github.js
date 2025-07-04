// GitHub API utility functions

export const fetchGitHubUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch user data: ${response.statusText}`)
  }
  return response.json()
}

export const fetchGitHubRepos = async (username, perPage = 100) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&sort=updated`)
  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`)
  }
  return response.json()
}

export const fetchContributionsData = async (username, token = null) => {
  // GitHub's GraphQL API for contributions requires authentication
  // For public display, we'll use a fallback approach or mock data
  
  if (!token) {
    console.warn('GitHub token not provided, using mock data for contributions')
    return generateMockContributions()
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables: { username }
    })
  })

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`)
  }

  const data = await response.json()
  
  if (data.errors) {
    throw new Error(`GraphQL errors: ${data.errors.map(e => e.message).join(', ')}`)
  }

  return data.data.user.contributionsCollection.contributionCalendar
}

export const generateMockContributions = () => {
  const today = new Date()
  const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
  
  const weeks = []
  let currentDate = new Date(oneYearAgo)
  let totalContributions = 0
  
  // Start from the beginning of the week
  currentDate.setDate(currentDate.getDate() - currentDate.getDay())
  
  while (currentDate <= today) {
    const week = []
    for (let i = 0; i < 7; i++) {
      if (currentDate <= today) {
        // Create more realistic contribution patterns
        const dayOfWeek = currentDate.getDay()
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
        const baseChance = isWeekend ? 0.3 : 0.7
        
        let count = 0
        if (Math.random() < baseChance) {
          count = Math.floor(Math.random() * (isWeekend ? 8 : 15)) + 1
        }
        
        const level = count === 0 ? 0 : Math.min(4, Math.ceil(count / 4))
        
        week.push({
          date: currentDate.toISOString().split('T')[0],
          contributionCount: count,
          level
        })
        
        totalContributions += count
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    if (week.length > 0) {
      weeks.push(week)
    }
  }
  
  return {
    totalContributions,
    weeks: weeks.map(week => ({ contributionDays: week }))
  }
}

export const calculateContributionStats = (contributionCalendar) => {
  const allDays = contributionCalendar.weeks
    .flatMap(week => week.contributionDays)
    .filter(day => day.date <= new Date().toISOString().split('T')[0])
    .sort((a, b) => new Date(a.date) - new Date(b.date))
  
  let currentStreak = 0
  let longestStreak = 0
  let tempStreak = 0
  
  // Calculate streaks from most recent day backwards
  for (let i = allDays.length - 1; i >= 0; i--) {
    if (allDays[i].contributionCount > 0) {
      tempStreak++
      if (i === allDays.length - 1) {
        currentStreak = tempStreak
      }
    } else {
      longestStreak = Math.max(longestStreak, tempStreak)
      if (currentStreak === tempStreak) {
        currentStreak = 0
      }
      tempStreak = 0
    }
  }
  longestStreak = Math.max(longestStreak, tempStreak)
  
  return {
    totalContributions: contributionCalendar.totalContributions,
    currentStreak,
    longestStreak
  }
}

export const fetchYearCommits = async (username, year = new Date().getFullYear()) => {
  try {
    const repos = await fetchGitHubRepos(username, 50) // Limit to avoid rate limits
    let totalCommits = 0
    
    // Process repositories in smaller batches to avoid rate limiting
    const batchSize = 5
    for (let i = 0; i < Math.min(repos.length, 20); i += batchSize) {
      const batch = repos.slice(i, i + batchSize)
      
      const promises = batch.map(async (repo) => {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits?since=${year}-01-01T00:00:00Z&author=${username}&per_page=100`
          )
          if (response.ok) {
            const commits = await response.json()
            return commits.length
          }
          return 0
        } catch {
          return 0
        }
      })
      
      const batchResults = await Promise.all(promises)
      totalCommits += batchResults.reduce((sum, count) => sum + count, 0)
      
      // Small delay to be nice to GitHub's API
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    return totalCommits
  } catch (error) {
    console.error('Error fetching commit count:', error)
    return 0
  }
}
