<template>
  <div class="projects">
    <section class="hero-section">
      <div class="container">
        <h1>My Projects</h1>
        <p>A collection of my work, open source contributions, and personal projects.</p>
      </div>
    </section>
    
    <section class="projects-content">
      <div class="container">
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects" :key="project.name">
            <div class="project-header">
              <span class="project-emoji">{{ project.emoji }}</span>
              <h3>{{ project.name }}</h3>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <div class="project-stats" v-if="project.stats">
              <span v-if="project.stats.stars">⭐ {{ project.stats.stars }}</span>
              <span v-if="project.stats.forks">🍴 {{ project.stats.forks }}</span>
              <span v-if="project.stats.downloads">📦 {{ project.stats.downloads }}</span>
            </div>
            <div class="project-links">
              <a :href="project.github" target="_blank" class="btn btn-primary">GitHub</a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-secondary">Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAllProjects } from '../data/profile.js'

const projects = ref(getAllProjects())
</script>

<style scoped>
.projects {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-section p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.projects-content {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
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

.project-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-emoji {
  font-size: 2.5rem;
}

.project-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
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
  margin-bottom: 1rem;
}

.tech-tag {
  background: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.project-links {
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
  text-align: center;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-links {
    flex-direction: column;
  }
}
</style>
