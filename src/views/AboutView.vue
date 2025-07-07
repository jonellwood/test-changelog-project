<template>
  <div class="about">
    <section class="hero-section">
      <div class="container">
        <div class="about-hero">
          <div class="about-text">
            <h1>About Me</h1>
            <p class="lead">{{ profile.personal.title }} with a passion for creating elegant solutions and contributing to the open source community.</p>
          </div>
          <div class="about-avatar">
            <div class="avatar-container">
              <img :src="profile.personal.avatar" :alt="profile.personal.name" class="avatar-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="content-grid">
          <!-- Main Story -->
          <div class="main-content">
            <div class="story-section">
              <h2>My Journey</h2>
              <p>
                {{ profile.personal.aboutMe.intro }}
              </p>
              <p>
                {{ profile.personal.aboutMe.passion }}
              </p>
              <p>
                {{ profile.personal.aboutMe.automation }}
              </p>
            </div>

            <div class="philosophy-section">
              <h2>Development Philosophy</h2>
              <div class="philosophy-grid">
                <div class="philosophy-item" v-for="item in profile.philosophy" :key="item.title">
                  <div class="philosophy-icon">{{ item.icon }}</div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>

            <div class="interests-section">
              <h2>Beyond Code</h2>
              <p>
                {{ profile.personal.aboutMe.beyondCode }}
              </p>
              <p>
                {{ profile.personal.aboutMe.interests }}
              </p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="sidebar">
            <div class="skills-section">
              <h3>Technical Skills</h3>
              <div class="skills-category" v-for="skillCategory in skillsArray" :key="skillCategory.title">
                <h4>{{ skillCategory.title }}</h4>
                <div class="skills-tags">
                  <span class="skill-tag" v-for="tech in skillCategory.technologies" :key="tech">{{ tech }}</span>
                </div>
              </div>
            </div>

            <div class="quick-facts">
              <h3>Quick Facts</h3>
              <ul>
                <li v-for="fact in profile.quickFacts" :key="fact.label">
                  <strong>{{ fact.icon }} {{ fact.label }}:</strong> {{ fact.value }}
                </li>
              </ul>
            </div>

            <div class="availability">
              <h3>Availability</h3>
              <p>I'm currently {{ profile.personal.availability.status.toLowerCase() }}. If you have an interesting project or need help with web development, feel free to reach out!</p>
              <RouterLink to="/contact" class="btn btn-primary">Get In Touch</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import profile, { getSkillsArray } from '../data/profile.js'

const skillsArray = getSkillsArray()
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-hero {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.lead {
  font-size: 1.3rem;
  opacity: 0.9;
  line-height: 1.6;
}

.avatar-container {
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 4px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.about-content {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
}

.main-content {
  space-y: 3rem;
}

.story-section,
.philosophy-section,
.interests-section {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.story-section h2,
.philosophy-section h2,
.interests-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 600;
}

.story-section p,
.interests-section p {
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.philosophy-item {
  text-align: center;
  padding: 1.5rem;
}

.philosophy-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.philosophy-item h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.philosophy-item p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.sidebar {
  space-y: 2rem;
}

.skills-section,
.quick-facts,
.availability {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.skills-section h3,
.quick-facts h3,
.availability h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.skills-category {
  margin-bottom: 1.5rem;
}

.skills-category h4 {
  font-size: 1rem;
  color: #667eea;
  margin-bottom: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #e9ecef;
  color: #495057;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.quick-facts ul {
  list-style: none;
  padding: 0;
}

.quick-facts li {
  padding: 0.5rem 0;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}

.quick-facts li:last-child {
  border-bottom: none;
}

.availability p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .about-hero h1 {
    font-size: 2.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .philosophy-grid {
    grid-template-columns: 1fr;
  }
  
  .avatar-container {
    width: 150px;
    height: 150px;
  }
}
</style>
