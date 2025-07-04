<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="greeting">Hi, I'm</span>
            <span class="name">Jon Ellwood</span>
          </h1>
          <h2 class="hero-subtitle">Full Stack Developer & Open Source Enthusiast</h2>
          <p class="hero-description">
            I create efficient, elegant solutions using modern web technologies. 
            Passionate about Vue.js, Node.js, and building tools that make developers' lives easier.
          </p>
          <div class="hero-buttons">
            <RouterLink to="/projects" class="btn btn-primary">View Projects</RouterLink>
            <RouterLink to="/packages" class="btn btn-secondary">npm Packages</RouterLink>
          </div>
        </div>
        <div class="hero-visual">
          <div class="code-window">
            <div class="window-header">
              <div class="window-buttons">
                <span class="btn-close"></span>
                <span class="btn-minimize"></span>
                <span class="btn-maximize"></span>
              </div>
              <span class="window-title">terminal.js</span>
            </div>
            <div class="code-content">
              <pre><code><span class="code-comment">// Building the future, one commit at a time</span>
<span class="code-keyword">const</span> <span class="code-variable">developer</span> = {
  <span class="code-property">name</span>: <span class="code-string">'Jon Ellwood'</span>,
  <span class="code-property">skills</span>: [<span class="code-string">'Vue.js'</span>, <span class="code-string">'Node.js'</span>, <span class="code-string">'PHP'</span>],
  <span class="code-property">passion</span>: <span class="code-string">'Open Source'</span>,
  <span class="code-method">createAwesome</span>() {
    <span class="code-keyword">return</span> <span class="code-string">'Let\'s build something!'</span>;
  }
};</code></pre>
              <div class="typing-cursor"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="stats-container">
        <div class="stat-item">
          <h3 class="stat-number">{{ stats.repositories }}</h3>
          <p class="stat-label">GitHub Repos</p>
        </div>
        <div class="stat-item">
          <h3 class="stat-number">{{ stats.packages }}</h3>
          <p class="stat-label">npm Packages</p>
        </div>
        <div class="stat-item">
          <h3 class="stat-number">{{ stats.experience }}</h3>
          <p class="stat-label">Years Experience</p>
        </div>
        <div class="stat-item">
          <h3 class="stat-number">{{ stats.followers }}</h3>
          <p class="stat-label">GitHub Followers</p>
        </div>
      </div>
    </section>

    <!-- GitHub Contributions Section -->
    <section class="contributions-section">
      <div class="container">
        <GitHubContributions />
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="featured">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in featuredProjects" :key="project.name">
            <div class="project-icon">
              <span class="emoji">{{ project.emoji }}</span>
            </div>
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <div class="project-links">
              <a :href="project.github" target="_blank" class="project-link">GitHub</a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">Demo</a>
            </div>
          </div>
        </div>
        <div class="featured-cta">
          <RouterLink to="/projects" class="btn btn-outline">View All Projects</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import GitHubContributions from '../components/GitHubContributions.vue'
import { fetchGitHubUser } from '../utils/github.js'

const stats = ref({
  repositories: '123',
  packages: '3',
  experience: '5+',
  followers: '0'
})

const featuredProjects = ref([
  {
    name: 'git-changelog-manager',
    description: 'Automated changelog generation with AI-powered commit message polishing and GitHub integration.',
    emoji: '📋',
    tech: ['Node.js', 'AI Integration', 'CLI'],
    github: 'https://github.com/jonellwood/git-changelog-manager',
    demo: 'https://www.npmjs.com/package/git-changelog-manager'
  },
  {
    name: 'ftp-deploy-manager',
    description: 'Smart FTP deployment tool with git integration, file filtering, and environment-based configuration.',
    emoji: '🚀',
    tech: ['PHP', 'FTP', 'Git'],
    github: 'https://github.com/jonellwood/ftp-deploy-manager',
    demo: null
  }
])

// Load real stats from GitHub API
onMounted(async () => {
  try {
    // Fetch real GitHub user data
    const userData = await fetchGitHubUser('jonellwood')
    stats.value.repositories = userData.public_repos
    stats.value.followers = userData.followers
    
  } catch (error) {
    console.log('Could not load GitHub stats:', error)
    // Keep default values if API fails
  }
})
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.9;
}

.name {
  display: block;
  font-weight: 700;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #ffd700;
  color: #333;
}

.btn-primary:hover {
  background: #ffed4e;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

/* Code Window */
.code-window {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.window-header {
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.window-buttons {
  display: flex;
  gap: 0.5rem;
}

.window-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.btn-close { background: #ff5f57; }
.btn-minimize { background: #ffbd2e; }
.btn-maximize { background: #28ca42; }

.window-title {
  color: #8e8e93;
  font-size: 0.9rem;
}

.code-content {
  padding: 1.5rem;
  position: relative;
}

.code-content pre {
  margin: 0;
  color: #d4d4d4;
  font-size: 0.9rem;
  line-height: 1.6;
}

.code-comment { color: #6a9955; }
.code-keyword { color: #569cd6; }
.code-variable { color: #9cdcfe; }
.code-property { color: #9cdcfe; }
.code-string { color: #ce9178; }
.code-method { color: #dcdcaa; }

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: #ffd700;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Stats Section */
.stats {
  background: #f8f9fa;
  padding: 3rem 2rem;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #6c757d;
  font-weight: 500;
}

/* Contributions Section */
.contributions-section {
  background: #f8f9fa;
  padding: 3rem 2rem;
}

/* Featured Projects */
.featured {
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

.project-icon {
  text-align: center;
  margin-bottom: 1.5rem;
}

.emoji {
  font-size: 3rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.project-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #764ba2;
}

.featured-cta {
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-container {
    grid-template-columns: 1fr;
  }
  
  .hero {
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
}
</style>
