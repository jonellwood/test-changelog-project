<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>{{ profile.personal.name }}</h4>
        <p>{{ profile.personal.title }} passionate about creating efficient, elegant solutions and sharing knowledge through open source.</p>
      </div>
      
      <div class="footer-section">
        <h4>Connect</h4>
        <ul>
          <li><a :href="profile.social.github.url" target="_blank">{{ profile.social.github.display }}</a></li>
          <li><a :href="profile.social.npm.url" target="_blank">{{ profile.social.npm.display }}</a></li>
          <li><a :href="profile.social.linkedin.url" target="_blank">{{ profile.social.linkedin.display }}</a></li>
          <li><a :href="profile.social.email.url">{{ profile.social.email.display }}</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Built With</h4>
        <p>{{ profile.site.builtWith }}</p>
        <p class="build-info">{{ profile.site.builtWithDescription }}</p>
      </div>
    </div>
    
    <div class="footer-bottom">
        <p>&copy; {{ profile.site.year }} {{ profile.personal.name }}. {{ profile.personal.title }}. Made with ❤️ and Vue.js</p>
    </div>
  </footer>
</template>

<script setup>
import profile from '../data/profile.js'
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
