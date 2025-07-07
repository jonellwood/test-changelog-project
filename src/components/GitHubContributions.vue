<template>
  <div class="github-contributions">
    <div class="contributions-header">
      <h3>GitHub Activity</h3>
      <div class="contributions-legend">
        <span class="legend-text">Less</span>
        <div class="legend-squares">
          <div class="legend-square level-0"></div>
          <div class="legend-square level-1"></div>
          <div class="legend-square level-2"></div>
          <div class="legend-square level-3"></div>
          <div class="legend-square level-4"></div>
        </div>
        <span class="legend-text">More</span>
      </div>
    </div>
    
    <div v-if="loading" class="loading">
      <div class="loading-spinner"></div>
      <p>Loading contributions...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>
    
    <div v-else class="contributions-grid">
      <div class="months-labels">
        <span v-for="month in monthLabels" :key="month.month" :style="{ gridColumnStart: month.start, gridColumnEnd: month.end }">
          {{ month.name }}
        </span>
      </div>
      
      <div class="days-labels">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>
      
      <div class="contributions-squares">
        <div
          v-for="(week, weekIndex) in contributions"
          :key="weekIndex"
          class="week-column"
        >
          <div
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            :class="['contribution-square', `level-${day.level}`]"
            :title="`${day.count} contributions on ${day.date}`"
            @click="showDayDetails(day)"
          ></div>
        </div>
      </div>
    </div>
    
    <div v-if="!loading && !error" class="contributions-stats">
      <div class="stat">
        <strong>{{ totalContributions }}</strong>
        <span>contributions in the last year</span>
      </div>
      <div class="stat">
        <strong>{{ longestStreak }}</strong>
        <span>day longest streak</span>
      </div>
      <div class="stat">
        <strong>{{ currentStreak }}</strong>
        <span>day current streak</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { fetchContributionsData, calculateContributionStats } from '../utils/github.js'
import profile from '../data/profile.js'

const loading = ref(true)
const error = ref(null)
const contributions = ref([])
const totalContributions = ref(0)
const longestStreak = ref(0)
const currentStreak = ref(0)

// Process contributions data for display
const processContributionsData = (contributionCalendar) => {
  // Convert GitHub API format to component format
  const weeks = contributionCalendar.weeks.map(week => 
    week.contributionDays.map(day => ({
      date: day.date,
      count: day.contributionCount,
      level: day.contributionCount === 0 ? 0 : Math.min(4, Math.ceil(day.contributionCount / 4))
    }))
  )
  
  contributions.value = weeks
  
  // Calculate and set stats
  const stats = calculateContributionStats(contributionCalendar)
  totalContributions.value = stats.totalContributions
  currentStreak.value = stats.currentStreak
  longestStreak.value = stats.longestStreak
}

const monthLabels = computed(() => {
  if (!contributions.value.length) return []
  
  const months = []
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  let currentMonth = -1
  let monthStart = 1
  
  contributions.value.forEach((week, index) => {
    const firstDay = week.find(day => day.date)
    if (firstDay) {
      const date = new Date(firstDay.date)
      const month = date.getMonth()
      
      if (month !== currentMonth) {
        if (currentMonth !== -1) {
          months.push({
            name: monthNames[currentMonth],
            start: monthStart,
            end: index
          })
        }
        currentMonth = month
        monthStart = index + 1
      }
    }
  })
  
  // Add the last month
  if (currentMonth !== -1) {
    months.push({
      name: monthNames[currentMonth],
      start: monthStart,
      end: contributions.value.length + 1
    })
  }
  
  return months
})

const showDayDetails = (day) => {
  // You could show a tooltip or modal with more details
  console.log(`${day.count} contributions on ${day.date}`)
}

// Fetch contributions data from GitHub API
const fetchContributions = async () => {
  try {
    loading.value = true
    
    // Attempt to fetch real data (will fall back to mock data if no token)
    const contributionCalendar = await fetchContributionsData(profile.github.username, import.meta.env.VUE_APP_GITHUB_TOKEN)
    
    // Process the data for display
    processContributionsData(contributionCalendar)
    
  } catch (err) {
    error.value = 'Failed to load contribution data'
    console.error('Error fetching contributions:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchContributions()
})
</script>

<style scoped>
.github-contributions {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.contributions-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.contributions-header h3 {
  margin: 0;
  color: #333;
  font-size: 1.2rem;
}

.contributions-legend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #666;
}

.legend-squares {
  display: flex;
  gap: 2px;
}

.legend-square {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.contributions-grid {
  position: relative;
  overflow-x: auto;
  padding: 1rem 0;
}

.months-labels {
  display: grid;
  grid-template-columns: repeat(53, 12px);
  gap: 2px;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  color: #666;
}

.days-labels {
  position: absolute;
  left: -30px;
  top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-size: 0.75rem;
  color: #666;
}

.contributions-squares {
  display: flex;
  gap: 2px;
  margin-left: 0;
}

.week-column {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contribution-square {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.contribution-square:hover {
  transform: scale(1.1);
  outline: 1px solid rgba(0, 0, 0, 0.3);
}

/* Contribution levels */
.level-0 {
  background-color: #ebedf0;
}

.level-1 {
  background-color: #9be9a8;
}

.level-2 {
  background-color: #40c463;
}

.level-3 {
  background-color: #30a14e;
}

.level-4 {
  background-color: #216e39;
}

.contributions-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e1e4e8;
  text-align: center;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat strong {
  color: #333;
  font-size: 1.1rem;
}

.stat span {
  color: #666;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .contributions-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .contributions-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .days-labels {
    display: none;
  }
  
  .contributions-squares {
    margin-left: 0;
  }
}
</style>
