<template>
  <div class="about">
    <section class="hero-section">
      <div class="container">
        <div class="about-hero">
          <div class="about-text">
            <h1>About Me</h1>
            <p class="lead">Full Stack Developer with a passion for creating elegant solutions and contributing to the open source community.</p>
          </div>
          <div class="about-avatar">
            <div class="avatar-container">
              <img src="/jon.png" alt="Jon Ellwood" class="avatar-image" />
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
                I'm a Full Stack Developer based in the United States with over 5 years of experience crafting web applications 
                and developer tools. My journey began with a curiosity for how things work under the hood, which led me to fall 
                in love with both the creative and logical aspects of programming.
              </p>
              <p>
                What drives me most is the intersection of functionality and user experience. Whether I'm building a Vue.js 
                frontend, architecting a Node.js backend, or creating developer productivity tools, I focus on writing clean, 
                maintainable code that solves real problems.
              </p>
              <p>
                I'm particularly passionate about automation and developer experience. You can see this in my projects like 
                <strong>git-changelog-manager</strong>, which automates changelog generation with AI assistance, and 
                <strong>tag-toggle</strong>, a VSCode extension that streamlines HTML editing workflows.
              </p>
            </div>

            <div class="philosophy-section">
              <h2>Development Philosophy</h2>
              <div class="philosophy-grid">
                <div class="philosophy-item">
                  <div class="philosophy-icon">🎯</div>
                  <h3>Purpose-Driven Code</h3>
                  <p>Every line of code should serve a purpose. I believe in writing clean, readable code that tells a story and solves genuine problems.</p>
                </div>
                <div class="philosophy-item">
                  <div class="philosophy-icon">🔧</div>
                  <h3>Tool Builder</h3>
                  <p>I love creating tools that make other developers' lives easier. From CLI utilities to VSCode extensions, I'm always looking for ways to automate repetitive tasks.</p>
                </div>
                <div class="philosophy-item">
                  <div class="philosophy-icon">🌱</div>
                  <h3>Continuous Learning</h3>
                  <p>Technology evolves rapidly, and I embrace that change. I'm constantly exploring new frameworks, tools, and methodologies to stay current and improve my craft.</p>
                </div>
                <div class="philosophy-item">
                  <div class="philosophy-icon">🤝</div>
                  <h3>Open Source First</h3>
                  <p>I believe in the power of community-driven development. Most of my projects are open source because sharing knowledge makes everyone better.</p>
                </div>
              </div>
            </div>

            <div class="interests-section">
              <h2>Beyond Code</h2>
              <p>
                When I'm not coding, you might find me working with wood in my shop. I've been a woodworker for years, 
                and there's something deeply satisfying about creating something tangible with your hands. The precision 
                and craftsmanship required in woodworking actually translates well to programming—both require attention 
                to detail, proper planning, and the right tools for the job.
              </p>
              <p>
                I also enjoy contributing to fantasy football analytics (you can see my <strong>draft-app</strong> project), 
                exploring new technologies, and helping other developers through code reviews and mentoring.
              </p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="sidebar">
            <div class="skills-section">
              <h3>Technical Skills</h3>
              <div class="skills-category">
                <h4>Frontend</h4>
                <div class="skills-tags">
                  <span class="skill-tag">Vue.js 3</span>
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">TypeScript</span>
                  <span class="skill-tag">HTML5</span>
                  <span class="skill-tag">CSS3</span>
                  <span class="skill-tag">Responsive Design</span>
                </div>
              </div>
              
              <div class="skills-category">
                <h4>Backend</h4>
                <div class="skills-tags">
                  <span class="skill-tag">Node.js</span>
                  <span class="skill-tag">PHP</span>
                  <span class="skill-tag">Laravel</span>
                  <span class="skill-tag">APIs</span>
                  <span class="skill-tag">MySQL</span>
                </div>
              </div>
              
              <div class="skills-category">
                <h4>Tools & Platforms</h4>
                <div class="skills-tags">
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">VSCode</span>
                  <span class="skill-tag">CLI Development</span>
                  <span class="skill-tag">FTP/SFTP</span>
                  <span class="skill-tag">Automation</span>
                </div>
              </div>
            </div>

            <div class="quick-facts">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>🌍 Location:</strong> United States</li>
                <li><strong>💼 Experience:</strong> 5+ years</li>
                <li><strong>🎯 Focus:</strong> Full Stack Development</li>
                <li><strong>📦 npm Packages:</strong> 3 published</li>
                <li><strong>🏆 GitHub Repos:</strong> 123+ projects</li>
                <li><strong>🔧 VSCode Extensions:</strong> 1 published</li>
              </ul>
            </div>

            <div class="availability">
              <h3>Availability</h3>
              <p>I'm currently open to freelance projects and consulting opportunities. If you have an interesting project or need help with web development, feel free to reach out!</p>
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
