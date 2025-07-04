<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Test Changelog Project</h4>
        <p>Demonstrating git-changelog-manager integration</p>
      </div>
      
      <div class="footer-section">
        <h4>Links</h4>
        <ul>
          <li><a href="https://github.com/jonathanellwood/git-changelog-manager" target="_blank">git-changelog-manager</a></li>
          <li><a href="https://vuejs.org" target="_blank">Vue.js</a></li>
          <li><a href="https://vitejs.dev" target="_blank">Vite</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Version</h4>
        <p>v{{ version }}</p>
        <p class="build-info">Built with Vue 3 & Vite</p>
      </div>
    </div>
    
    <div class="footer-bottom">
        <p>&copy; 2025 Test Changelog Project. Made with ❤️ for changelog automation and testing!</p>
    </div>
  </footer>
</template>

<script>
import packageJson from '../../package.json'

export default {
  name: 'AppFooter',
  computed: {
    version() {
      return packageJson.version
    }
  }
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0 1rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #f8f9fa;
}

.footer-section p {
  margin-bottom: 0.5rem;
  color: #e9ecef;
  line-height: 1.4;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #f8f9fa;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #17a2b8;
  text-decoration: underline;
}

.build-info {
  font-size: 0.9rem;
  color: #ced4da;
  margin-top: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.footer-bottom p {
  margin: 0;
  color: #e9ecef;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .app-footer {
    padding: 1.5rem 0 1rem;
  }
}
</style>
