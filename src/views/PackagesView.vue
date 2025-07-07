<template>
  <div class="packages">
    <section class="hero-section">
      <div class="container">
        <h1>npm Packages</h1>
        <p>Open source tools and utilities I've published to help the developer community.</p>
      </div>
    </section>
    
    <section class="packages-content">
      <div class="container">
        <div class="packages-grid">
          <div class="package-card" v-for="pkg in packages" :key="pkg.name">
            <div class="package-header">
              <span class="package-emoji">{{ pkg.emoji }}</span>
              <div class="package-info">
                <h3>{{ pkg.name }}</h3>
                <span class="package-version">v{{ pkg.version }}</span>
              </div>
            </div>
            <p class="package-description">{{ pkg.description }}</p>
            
            <div class="package-stats">
              <div class="stat">
                <span class="stat-icon">📦</span>
                <span class="stat-value">{{ pkg.downloads }}</span>
                <span class="stat-label">downloads</span>
              </div>
              <div class="stat">
                <span class="stat-icon">📅</span>
                <span class="stat-value">{{ pkg.lastUpdated }}</span>
                <span class="stat-label">updated</span>
              </div>
            </div>

            <div class="package-install">
              <code class="install-command">npm install {{ pkg.name }}</code>
              <button @click="copyToClipboard(pkg.name)" class="copy-btn" title="Copy install command">
                📋
              </button>
            </div>

            <div class="package-tech">
              <span v-for="tech in pkg.tech" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>

            <div class="package-features">
              <h4>Features:</h4>
              <ul>
                <li v-for="feature in pkg.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>

            <div class="package-links">
              <a :href="pkg.npm" target="_blank" class="btn btn-primary">
                <span>📦</span> npm
              </a>
              <a :href="pkg.github" target="_blank" class="btn btn-secondary">
                <span>🐙</span> GitHub
              </a>
              <a v-if="pkg.docs" :href="pkg.docs" target="_blank" class="btn btn-outline">
                <span>📚</span> Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getPackages } from '../data/profile.js'

const packages = ref(getPackages())

const copyToClipboard = (packageName) => {
  const text = `npm install ${packageName}`
  navigator.clipboard.writeText(text).then(() => {
    // You could add a toast notification here
    console.log('Copied to clipboard:', text)
  }).catch(err => {
    console.error('Failed to copy:', err)
  })
}
</script>

<style scoped>
.packages {
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

.packages-content {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.package-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.package-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

.package-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.package-emoji {
  font-size: 3rem;
}

.package-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.25rem 0;
}

.package-version {
  background: #667eea;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.package-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.package-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.stat-icon {
  font-size: 1.1rem;
}

.stat-value {
  font-weight: 600;
  color: #333;
}

.stat-label {
  color: #6c757d;
}

.package-install {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.install-command {
  flex: 1;
  background: transparent;
  border: none;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  color: #333;
}

.copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.copy-btn:hover {
  background: #e9ecef;
}

.package-tech {
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

.package-features {
  margin-bottom: 2rem;
}

.package-features h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
}

.package-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.package-features li {
  padding: 0.25rem 0;
  color: #6c757d;
  position: relative;
  padding-left: 1.5rem;
}

.package-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.package-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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
  background: #333;
  color: white;
}

.btn-secondary:hover {
  background: #555;
  transform: translateY(-2px);
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

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .packages-grid {
    grid-template-columns: 1fr;
  }
  
  .package-stats {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .package-links {
    flex-direction: column;
  }
}
</style>
