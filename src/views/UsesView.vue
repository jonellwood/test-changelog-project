<template>
  <div class="uses">
    <section class="hero-section">
      <div class="container">
        <h1>/uses</h1>
        <p class="hero-subtitle">
          A rundown of the tools, gear, and setup I use for development and productivity. 
          Inspired by <a href="https://wesbos.com/uses" target="_blank">Wes Bos</a> and the amazing 
          <a href="https://uses.tech" target="_blank">uses.tech</a> community.
        </p>
      </div>
    </section>

    <section class="uses-content">
      <div class="container">
        <div class="uses-grid">
          <!-- Editor + Terminal -->
          <div class="uses-category">
            <h2>💻 Editor + Terminal</h2>
            <div class="uses-items">
              <div class="uses-item">
                <h3>Visual Studio Code</h3>
                <p>My primary editor for everything. Clean, fast, and with an incredible extension ecosystem.</p>
                <div class="item-details">
                  <strong>Key Extensions:</strong>
                  <ul>
                    <li>Vue Language Features (Volar)</li>
                    <li>ES7+ React/Redux/React-Native snippets</li>
                    <li>Auto Rename Tag</li>
                    <li>Bracket Pair Colorizer 2</li>
                    <li>GitLens</li>
                    <li>Tag Toggle (my own extension!)</li>
                  </ul>
                </div>
              </div>
              
              <div class="uses-item">
                <h3>iTerm2</h3>
                <p>Terminal replacement for macOS with better customization and features than the default Terminal.</p>
              </div>
              
              <div class="uses-item">
                <h3>Oh My Zsh</h3>
                <p>Framework for managing Zsh configuration with tons of helpful plugins and themes.</p>
                <div class="item-details">
                  <strong>Theme:</strong> agnoster<br>
                  <strong>Key Plugins:</strong> git, npm, node, vscode
                </div>
              </div>

              <div class="uses-item">
                <h3>Operator Mono</h3>
                <p>My coding font of choice. The italics are beautiful and it's incredibly readable at any size.</p>
              </div>
            </div>
          </div>

          <!-- Desktop Apps -->
          <div class="uses-category">
            <h2>🖥️ Desktop Apps</h2>
            <div class="uses-items">
              <div class="uses-item">
                <h3>Chrome</h3>
                <p>Primary browser for development. DevTools are unmatched, especially for Vue.js debugging.</p>
              </div>

              <div class="uses-item">
                <h3>Safari</h3>
                <p>Secondary browser for testing and personal browsing. Great for battery life on macOS.</p>
              </div>

              <div class="uses-item">
                <h3>GitHub Desktop</h3>
                <p>For when I want a visual diff or need to manage complex merges. CLI for everything else.</p>
              </div>

              <div class="uses-item">
                <h3>Notion</h3>
                <p>Note-taking, project planning, and knowledge management. My external brain for everything.</p>
              </div>

              <div class="uses-item">
                <h3>TablePlus</h3>
                <p>Database client that makes working with MySQL, PostgreSQL, and other databases a pleasure.</p>
              </div>

              <div class="uses-item">
                <h3>Postman</h3>
                <p>API testing and development. Essential for building and testing REST APIs.</p>
              </div>
            </div>
          </div>

          <!-- Productivity -->
          <div class="uses-category">
            <h2>⚡ Productivity</h2>
            <div class="uses-items">
              <div class="uses-item">
                <h3>Alfred</h3>
                <p>Spotlight replacement with workflows, snippets, and powerful automation capabilities.</p>
              </div>

              <div class="uses-item">
                <h3>Rectangle</h3>
                <p>Window management for macOS. Snap windows to different sizes and positions with keyboard shortcuts.</p>
              </div>

              <div class="uses-item">
                <h3>CleanMyMac X</h3>
                <p>Keeps my Mac running smooth by clearing cache, managing startup items, and monitoring system health.</p>
              </div>

              <div class="uses-item">
                <h3>1Password</h3>
                <p>Password manager and secure digital vault. Essential for security in the modern web.</p>
              </div>

              <div class="uses-item">
                <h3>Spotify</h3>
                <p>Music for coding. Usually instrumental, lo-fi, or ambient electronic music to maintain focus.</p>
              </div>
            </div>
          </div>

          <!-- Hardware -->
          <div class="uses-category">
            <h2>🔧 Hardware</h2>
            <div class="uses-items">
              <div class="uses-item">
                <h3>MacBook Pro 14" (2021)</h3>
                <p>M1 Pro chip, 16GB RAM, 512GB SSD. Perfect balance of power and portability for development work.</p>
              </div>

              <div class="uses-item">
                <h3>LG 27" 4K Monitor</h3>
                <p>External display for when I'm at my desk. The extra screen real estate is invaluable for multitasking.</p>
              </div>

              <div class="uses-item">
                <h3>Magic Keyboard</h3>
                <p>Apple's wireless keyboard. Clean design and comfortable typing experience.</p>
              </div>

              <div class="uses-item">
                <h3>Magic Mouse</h3>
                <p>Wireless mouse with gesture support. Great for scrolling through long codebases.</p>
              </div>

              <div class="uses-item">
                <h3>AirPods Pro</h3>
                <p>For music and calls. The noise cancellation is perfect for focusing in busy environments.</p>
              </div>

              <div class="uses-item">
                <h3>Standing Desk</h3>
                <p>Height-adjustable desk for better health and posture during long coding sessions.</p>
              </div>
            </div>
          </div>

          <!-- Development Tools -->
          <div class="uses-category">
            <h2>🛠️ Development Stack</h2>
            <div class="uses-items">
              <div class="uses-item">
                <h3>Vue.js 3</h3>
                <p>My frontend framework of choice. Clean, reactive, and has amazing developer experience.</p>
              </div>

              <div class="uses-item">
                <h3>Vite</h3>
                <p>Build tool that's incredibly fast and has excellent Vue support out of the box.</p>
              </div>

              <div class="uses-item">
                <h3>Node.js</h3>
                <p>JavaScript runtime for building CLI tools, APIs, and full-stack applications.</p>
              </div>

              <div class="uses-item">
                <h3>PHP & Laravel</h3>
                <p>For backend applications and when working with existing PHP codebases.</p>
              </div>

              <div class="uses-item">
                <h3>Git & GitHub</h3>
                <p>Version control and collaboration. GitHub for hosting repos and managing open source projects.</p>
              </div>

              <div class="uses-item">
                <h3>npm</h3>
                <p>Package manager for JavaScript. Also use it for publishing my own packages and CLI tools.</p>
              </div>
            </div>
          </div>

          <!-- Hosting & Services -->
          <div class="uses-category">
            <h2>☁️ Hosting & Services</h2>
            <div class="uses-items">
              <div class="uses-item">
                <h3>Netlify</h3>
                <p>Static site hosting with automatic deployments from Git. Simple and reliable.</p>
              </div>

              <div class="uses-item">
                <h3>Vercel</h3>
                <p>Alternative hosting for frontend applications with excellent performance and DX.</p>
              </div>

              <div class="uses-item">
                <h3>DigitalOcean</h3>
                <p>VPS hosting for when I need more control over the server environment.</p>
              </div>

              <div class="uses-item">
                <h3>Cloudflare</h3>
                <p>DNS, CDN, and security services. Makes websites faster and more secure.</p>
              </div>

              <div class="uses-item">
                <h3>GitHub Actions</h3>
                <p>CI/CD pipelines for automated testing, building, and deployment of projects.</p>
              </div>
            </div>
          </div>

          <!-- Woodworking -->
          <div class="uses-category">
            <h2>🪵 Woodworking Shop</h2>
            <div class="uses-items">
              <div class="uses-item">
                <h3>Table Saw</h3>
                <p>The heart of the shop. For breaking down lumber and making precise cuts.</p>
              </div>

              <div class="uses-item">
                <h3>Random Orbital Sander</h3>
                <p>Essential for smoothing surfaces and preparing wood for finishing.</p>
              </div>

              <div class="uses-item">
                <h3>Miter Saw</h3>
                <p>For crosscuts and miters. Accurate and efficient for trim work and joinery.</p>
              </div>

              <div class="uses-item">
                <h3>Hand Planes</h3>
                <p>Collection of vintage and modern hand planes. Nothing beats the satisfaction of hand-planed wood.</p>
              </div>

              <div class="uses-item">
                <h3>Chisels</h3>
                <p>Sharp chisels are essential for fine detail work and joinery. I maintain a set of both Western and Japanese styles.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Note -->
        <div class="uses-footer">
          <p>
            This page is inspired by <a href="https://wesbos.com/uses" target="_blank">Wes Bos</a> and 
            <a href="https://daverupert.com/uses" target="_blank">Dave Rupert</a>. 
            Check out <a href="https://uses.tech" target="_blank">uses.tech</a> for more developer setups!
          </p>
          <p>
            <em>Last updated: January 2025</em>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No reactive data needed for this static page
</script>

<style scoped>
.uses {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-section h1 {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.hero-subtitle a {
  color: #ffd700;
  text-decoration: none;
  font-weight: 600;
}

.hero-subtitle a:hover {
  text-decoration: underline;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.uses-content {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.uses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.uses-category {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.uses-category h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
  border-bottom: 3px solid #667eea;
  padding-bottom: 0.75rem;
}

.uses-items {
  space-y: 1.5rem;
}

.uses-item {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.uses-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.uses-item h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
}

.uses-item p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.item-details {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  margin-top: 1rem;
}

.item-details strong {
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
}

.item-details ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
}

.item-details li {
  padding: 0.25rem 0;
  color: #555;
  position: relative;
  padding-left: 1rem;
}

.item-details li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.uses-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px solid #dee2e6;
  text-align: center;
  color: #6c757d;
}

.uses-footer p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.uses-footer a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.uses-footer a:hover {
  text-decoration: underline;
}

.uses-footer em {
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .uses-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .uses-category {
    padding: 2rem;
  }
  
  .hero-section {
    padding: 3rem 1rem;
  }
}
</style>
