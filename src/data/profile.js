// Centralized profile data for Jon Ellwood's personal website
// This module contains all personal information, skills, projects, and social links
// Both desktop and mobile components consume this single source

export const profile = {
  // Personal Information
  personal: {
    name: 'Jon Ellwood',
    fullName: 'Jonathan Ellwood',
    title: 'Full Stack Developer',
    subtitle: 'Full Stack Developer & Open Source Enthusiast',
    tagline: 'Building the future, one commit at a time',
    greeting: "Hi, I'm",
    location: 'United States',
    experience: '5+',
    email: 'jonellwood@gmail.com',
    bio: 'I create efficient, elegant solutions using modern web technologies. Passionate about Vue.js, Node.js, and building tools that make developers\' lives easier.',
    aboutMe: {
      intro: 'I\'m a Full Stack Developer based in the United States with over 5 years of experience crafting web applications and developer tools. My journey began with a curiosity for how things work under the hood, which led me to fall in love with both the creative and logical aspects of programming.',
      passion: 'What drives me most is the intersection of functionality and user experience. Whether I\'m building a Vue.js frontend, architecting a Node.js backend, or creating developer productivity tools, I focus on writing clean, maintainable code that solves real problems.',
      automation: 'I\'m particularly passionate about automation and developer experience. You can see this in my projects like git-changelog-manager, which automates changelog generation with AI assistance, and tag-toggle, a VSCode extension that streamlines HTML editing workflows.',
      beyondCode: 'When I\'m not coding, you might find me working with wood in my shop. I\'ve been a woodworker for years, and there\'s something deeply satisfying about creating something tangible with your hands. The precision and craftsmanship required in woodworking actually translates well to programming—both require attention to detail, proper planning, and the right tools for the job.',
      interests: 'I also enjoy contributing to fantasy football analytics (you can see my draft-app project), exploring new technologies, and helping other developers through code reviews and mentoring.'
    },
    avatar: '/jon.png',
    availability: {
      status: 'Open to freelance projects and consulting opportunities',
      responseTime: 'Usually respond within 24-48 hours'
    }
  },

  // Social Links and Contact
  social: {
    github: {
      url: 'https://github.com/jonellwood',
      username: '@jonellwood',
      display: 'GitHub',
      icon: '🐙',
      description: 'Best for: Code reviews, open source'
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/jon-ellwood-320199244/',
      username: '/in/jon-ellwood-320199244',
      display: 'LinkedIn',
      icon: '💼',
      description: 'Best for: Professional networking'
    },
    bluesky: {
      url: 'https://bsky.app/profile/jonellwood.dev',
      username: '@jonellwood.dev',
      display: 'Bluesky',
      icon: '🦋',
      description: 'Best for: Quick questions, tech chat'
    },
    npm: {
      url: 'https://www.npmjs.com/~jonellwood',
      username: '~jonellwood',
      display: 'npm',
      icon: '📦',
      description: 'Best for: Package downloads, documentation'
    },
    email: {
      url: 'mailto:jonellwood@gmail.com',
      username: 'jonellwood@gmail.com',
      display: 'Email',
      icon: '📧',
      description: 'Best for: Project inquiries, collaborations'
    }
  },

  // Skills and Technologies
  skills: {
    frontend: {
      title: 'Frontend',
      technologies: ['Vue.js 3', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design']
    },
    backend: {
      title: 'Backend',
      technologies: ['Node.js', 'PHP', 'Laravel', 'APIs', 'MySQL']
    },
    tools: {
      title: 'Tools & Platforms',
      technologies: ['Git', 'VSCode', 'CLI Development', 'FTP/SFTP', 'Automation']
    }
  },

  // Code Example for Hero Section
  codeExample: {
    comment: '// Building the future, one commit at a time',
    object: {
      name: 'Jon Ellwood',
      skills: ['Vue.js', 'Node.js', 'PHP'],
      passion: 'Open Source',
      method: 'createAwesome',
      returnValue: 'Let\'s build something!'
    }
  },

  // Philosophy and Values
  philosophy: [
    {
      icon: '🎯',
      title: 'Purpose-Driven Code',
      description: 'Every line of code should serve a purpose. I believe in writing clean, readable code that tells a story and solves genuine problems.'
    },
    {
      icon: '🔧',
      title: 'Tool Builder',
      description: 'I love creating tools that make other developers\' lives easier. From CLI utilities to VSCode extensions, I\'m always looking for ways to automate repetitive tasks.'
    },
    {
      icon: '🌱',
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I embrace that change. I\'m constantly exploring new frameworks, tools, and methodologies to stay current and improve my craft.'
    },
    {
      icon: '🤝',
      title: 'Open Source First',
      description: 'I believe in the power of community-driven development. Most of my projects are open source because sharing knowledge makes everyone better.'
    }
  ],

  // Quick Facts
  quickFacts: [
    { icon: '🌍', label: 'Location', value: 'United States' },
    { icon: '💼', label: 'Experience', value: '5+ years' },
    { icon: '🎯', label: 'Focus', value: 'Full Stack Development' },
    { icon: '📦', label: 'npm Packages', value: '3 published' },
    { icon: '🏆', label: 'GitHub Repos', value: '123+ projects' },
    { icon: '🔧', label: 'VSCode Extensions', value: '1 published' }
  ],

  // Interests and Hobbies
  interests: [
    'Vue.js & Modern Frontend',
    'Node.js & Backend Development',
    'Open Source Projects',
    'Developer Tools & CLI Apps',
    'Automation & Productivity'
  ],

  // npm Packages
  npmPackages: [
    {
      name: 'git-changelog-manager',
      url: 'https://www.npmjs.com/package/git-changelog-manager'
    },
    {
      name: 'ftp-deploy-manager',
      url: 'https://www.npmjs.com/package/ftp-deploy-manager'
    }
  ],

  // Detailed packages information for PackagesView
  packages: [
    {
      name: 'git-changelog-manager',
      version: '1.1.0',
      description: 'Automated changelog generation with AI-powered commit message polishing, GitHub integration, and smart release management.',
      emoji: '📋',
      downloads: '100+',
      lastUpdated: '2025-01-04',
      tech: ['Node.js', 'CLI', 'AI', 'GitHub API'],
      features: [
        'Automated commit message extraction',
        'AI-powered message polishing (OpenAI/Claude)',
        'Smart pending commits detection',
        'GitHub releases integration',
        'Semantic versioning support',
        'Customizable configuration'
      ],
      npm: 'https://www.npmjs.com/package/git-changelog-manager',
      github: 'https://github.com/jonellwood/git-changelog-manager',
      docs: null
    },
    {
      name: 'ftp-deploy-manager',
      version: '1.0.0',
      description: 'Smart FTP deployment tool with git integration, file filtering, and environment-based configuration.',
      emoji: '🚀',
      downloads: '50+',
      lastUpdated: '2024-12-15',
      tech: ['PHP', 'FTP', 'Git', 'CLI'],
      features: [
        'Git-aware file deployment',
        'Environment variable configuration',
        'File filtering (.ftpignore support)',
        'Dry-run mode for testing',
        'Selective file deployment',
        'Legacy hosting compatibility'
      ],
      npm: 'https://www.npmjs.com/package/ftp-deploy-manager',
      github: 'https://github.com/jonellwood/ftp-deploy-manager',
      docs: null
    },
    {
      name: 'business-fee-calculator',
      version: '1.0.2',
      description: 'JavaScript utility library for calculating various business fees, taxes, and costs.',
      emoji: '💰',
      downloads: '25+',
      lastUpdated: '2024-11-20',
      tech: ['JavaScript', 'Utilities', 'Browser'],
      features: [
        'Multiple fee calculation types',
        'Tax calculation utilities',
        'Currency formatting helpers',
        'Zero dependencies',
        'Browser and Node.js compatible',
        'TypeScript definitions included'
      ],
      npm: 'https://www.npmjs.com/package/business-fee-calculator',
      github: 'https://github.com/jonellwood/business-fee-calculator-js',
      docs: null
    }
  ],

  // Projects Data
  projects: [
    {
      name: 'git-changelog-manager',
      description: 'Automated changelog generation with AI-powered commit message polishing and GitHub integration. Features smart pending commits detection and professional release management.',
      emoji: '📋',
      tech: ['Node.js', 'AI Integration', 'CLI', 'GitHub API'],
      github: 'https://github.com/jonellwood/git-changelog-manager',
      demo: 'https://www.npmjs.com/package/git-changelog-manager',
      stats: {
        stars: '5',
        downloads: '100+'
      },
      featured: true
    },
    {
      name: 'ftp-deploy-manager',
      description: 'Smart FTP deployment tool with git integration, file filtering, and environment-based configuration. Perfect for legacy hosting environments.',
      emoji: '🚀',
      tech: ['PHP', 'FTP', 'Git', 'CLI'],
      github: 'https://github.com/jonellwood/ftp-deploy-manager',
      demo: null,
      stats: {
        stars: '2'
      },
      featured: true
    },
    {
      name: 'tag-toggle',
      description: 'VSCode extension that helps comment out opening and closing HTML/XML elements without affecting the content inside them. Perfect for developers working with markup.',
      emoji: '🏷️',
      tech: ['TypeScript', 'VSCode API', 'Extension'],
      github: 'https://github.com/jonellwood/tag-toggle',
      demo: null,
      featured: false
    },
    {
      name: 'draft-app',
      description: 'SvelteKit application built for fantasy football draft day. Helps manage draft picks, player rankings, and team building strategies.',
      emoji: '🏈',
      tech: ['SvelteKit', 'JavaScript', 'Fantasy Sports'],
      github: 'https://github.com/jonellwood/draft-app',
      demo: null,
      featured: false
    },
    {
      name: 'robertsramblings',
      description: 'Custom blog site built for a friend to share thoughts and writings. Clean, readable design focused on content presentation.',
      emoji: '📝',
      tech: ['HTML', 'CSS', 'JavaScript', 'Blog'],
      github: 'https://github.com/jonellwood/robertsramblings',
      demo: null,
      featured: false
    },
    {
      name: 'marklin',
      description: 'Professional website for a family member who creates custom furniture. Showcases craftsmanship and portfolio with elegant design.',
      emoji: '🪑',
      tech: ['HTML', 'CSS', 'JavaScript', 'Portfolio'],
      github: 'https://github.com/jonellwood/marklin',
      demo: null,
      featured: false
    },
    {
      name: 'allyFormMaker',
      description: 'Utility tool that automatically generates accessibility-friendly form elements. Ensures proper ARIA labels, semantic HTML, and keyboard navigation.',
      emoji: '♿',
      tech: ['JavaScript', 'Accessibility', 'Forms', 'ARIA'],
      github: 'https://github.com/jonellwood/allyFormMaker',
      demo: null,
      featured: false
    },
    {
      name: 'testTemplate',
      description: 'Custom web application created for exam practice and certification preparation. She passed by the way! 🎉',
      emoji: '📚',
      tech: ['HTML', 'CSS', 'JavaScript', 'Education'],
      github: 'https://github.com/jonellwood/testTemplate',
      demo: null,
      featured: false
    },
    {
      name: 'Personal Website',
      description: 'Modern Vue.js website showcasing projects, npm packages, and development journey. Built with Vue 3, Vite, and modern CSS.',
      emoji: '🌐',
      tech: ['Vue 3', 'Vite', 'Modern CSS', 'Responsive'],
      github: 'https://github.com/jonellwood/jon-ellwood',
      demo: null,
      stats: {
        stars: '1'
      },
      featured: false
    },
    {
      name: 'Business Fee Calculator',
      description: 'JavaScript utility for calculating various business fees and costs. Helpful for freelancers and small businesses.',
      emoji: '💰',
      tech: ['JavaScript', 'Web Components', 'Utilities'],
      github: 'https://github.com/jonellwood/business-fee-calculator-js',
      demo: null,
      featured: false
    },
    {
      name: 'Budget Eye',
      description: 'Laravel application focused on creating and maintaining budgets. Full-featured budget management system.',
      emoji: '💳',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/jonellwood/BudgetEyeOh',
      demo: null,
      featured: false
    },
    {
      name: 'Berkstrap',
      description: 'Custom CSS framework designed specifically for BCG projects. Lightweight and component-focused.',
      emoji: '🎨',
      tech: ['CSS', 'SCSS', 'Framework', 'Components'],
      github: 'https://github.com/jonellwood/berkstrap',
      demo: null,
      featured: false
    }
  ],

  // Default stats that can be overridden by API calls
  defaultStats: {
    repositories: '123',
    packages: '3',
    experience: '5+',
    followers: '0'
  },

  // GitHub configuration
  github: {
    username: 'jonellwood'
  },

  // Site metadata
  site: {
    title: 'Jon Ellwood - Full Stack Developer',
    description: 'Full Stack Developer passionate about Vue.js, Node.js, and open source development.',
    year: new Date().getFullYear(),
    builtWith: 'Vue 3, Vite & ❤️',
    builtWithDescription: 'Open source tools for modern development'
  }
}

// Helper functions to get specific data subsets
export const getFeaturedProjects = () => {
  return profile.projects.filter(project => project.featured)
}

export const getAllProjects = () => {
  return profile.projects
}

export const getSocialLinks = () => {
  return Object.values(profile.social)
}

export const getSkillsArray = () => {
  return Object.values(profile.skills)
}

export const getPersonalInfo = () => {
  return profile.personal
}

export const getContactMethods = () => {
  return [
    profile.social.email,
    profile.social.github,
    profile.social.linkedin,
    profile.social.bluesky
  ]
}

export const getPackages = () => {
  return profile.packages
}

export default profile
