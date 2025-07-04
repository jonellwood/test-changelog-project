<template>
  <div class="contact">
    <section class="hero-section">
      <div class="container">
        <h1>Get In Touch</h1>
        <p>Let's connect! I'm always interested in new opportunities, collaborations, and interesting projects.</p>
      </div>
    </section>
    
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Methods -->
          <div class="contact-methods">
            <h2>Ways to Connect</h2>
            <div class="contact-cards">
              <a href="mailto:jonellwood@gmail.com" class="contact-card email">
                <div class="contact-icon">📧</div>
                <h3>Email</h3>
                <p>jonellwood@gmail.com</p>
                <span class="contact-label">Best for: Project inquiries, collaborations</span>
              </a>

              <a href="https://github.com/jonellwood" target="_blank" class="contact-card github">
                <div class="contact-icon">🐙</div>
                <h3>GitHub</h3>
                <p>@jonellwood</p>
                <span class="contact-label">Best for: Code reviews, open source</span>
              </a>

              <a href="https://www.linkedin.com/in/jon-ellwood-320199244/" target="_blank" class="contact-card linkedin">
                <div class="contact-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>/in/jon-ellwood-320199244</p>
                <span class="contact-label">Best for: Professional networking</span>
              </a>

              <a href="https://bsky.app/profile/jonellwood.dev" target="_blank" class="contact-card bluesky">
                <div class="contact-icon">🦋</div>
                <h3>Bluesky</h3>
                <p>@jonellwood.dev</p>
                <span class="contact-label">Best for: Quick questions, tech chat</span>
              </a>
            </div>
          </div>

          <!-- Quick Info -->
          <div class="contact-info">
            <h2>Quick Info</h2>
            
            <div class="info-section">
              <h3>🌍 Location</h3>
              <p>Currently based in the United States</p>
            </div>

            <div class="info-section">
              <h3>💼 Availability</h3>
              <p>Open to freelance projects and consulting opportunities</p>
            </div>

            <div class="info-section">
              <h3>🕐 Response Time</h3>
              <p>Usually respond within 24-48 hours</p>
            </div>

            <div class="info-section">
              <h3>🚀 Interests</h3>
              <ul>
                <li>Vue.js & Modern Frontend</li>
                <li>Node.js & Backend Development</li>
                <li>Open Source Projects</li>
                <li>Developer Tools & CLI Apps</li>
                <li>Automation & Productivity</li>
              </ul>
            </div>

            <div class="info-section">
              <h3>📦 My npm Packages</h3>
              <div class="npm-links">
                <a href="https://www.npmjs.com/package/git-changelog-manager" target="_blank" class="npm-link">
                  git-changelog-manager
                </a>
                <a href="https://www.npmjs.com/package/ftp-deploy-manager" target="_blank" class="npm-link">
                  ftp-deploy-manager
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="contact-cta">
          <h2>Let's Build Something Together</h2>
          <p>Whether you have a project in mind, need help with existing code, or just want to chat about tech, I'd love to hear from you!</p>
          <a href="mailto:jonellwood@gmail.com" class="btn btn-primary">
            📧 Send Email
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No reactive data needed for this static contact page
</script>

<style scoped>
.contact {
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

.contact-content {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-methods h2,
.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.contact-card p {
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.contact-label {
  font-size: 0.9rem;
  color: #6c757d;
  font-style: italic;
}

.contact-info {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section:last-child {
  margin-bottom: 0;
}

.info-section h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-section p {
  color: #6c757d;
  line-height: 1.6;
}

.info-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-section li {
  padding: 0.25rem 0;
  color: #6c757d;
  position: relative;
  padding-left: 1.5rem;
}

.info-section li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.npm-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.npm-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.npm-link:hover {
  color: #764ba2;
}

.contact-cta {
  text-align: center;
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.contact-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.contact-cta p {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

/* Specific contact card hover effects */
.contact-card.email:hover .contact-icon {
  animation: bounce 0.6s ease-in-out;
}

.contact-card.github:hover .contact-icon {
  animation: rotate 0.6s ease-in-out;
}

.contact-card.linkedin:hover .contact-icon {
  animation: pulse 0.6s ease-in-out;
}

.contact-card.bluesky:hover .contact-icon {
  animation: swing 0.6s ease-in-out;
}

@keyframes bounce {
  0%, 20%, 60%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  80% { transform: translateY(-5px); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes swing {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-cards {
    grid-template-columns: 1fr;
  }
  
  .contact-cta h2 {
    font-size: 2rem;
  }
}
</style>
