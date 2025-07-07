<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <RouterLink to="/" class="brand-link">
        <h1>{{ profile.personal.name }}</h1>
        <span class="tagline">{{ profile.personal.title }}</span>
      </RouterLink>
    </div>
    
    <div class="navbar-menu">
      <RouterLink to="/" class="navbar-item">Home</RouterLink>
      <RouterLink to="/about" class="navbar-item">About</RouterLink>
      <RouterLink to="/projects" class="navbar-item">Projects</RouterLink>
      
      <!-- Packages Dropdown -->
      <div class="dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
        <button class="navbar-item dropdown-trigger" :class="{ active: isPackagesRoute }">
          <span>Packages</span>
          <svg class="dropdown-icon" :class="{ rotated: showDropdown }" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <div class="dropdown-menu" :class="{ show: showDropdown }">
          <RouterLink to="/packages" class="dropdown-item">
            <span class="dropdown-emoji">📦</span>
            <div>
              <div class="dropdown-title">npm Packages</div>
              <div class="dropdown-subtitle">Node.js tools & utilities</div>
            </div>
          </RouterLink>
          <RouterLink to="/vscode-extensions" class="dropdown-item">
            <span class="dropdown-emoji">🔧</span>
            <div>
              <div class="dropdown-title">VSCode Extensions</div>
              <div class="dropdown-subtitle">Developer productivity tools</div>
            </div>
          </RouterLink>
        </div>
      </div>
      
      <RouterLink to="/contact" class="navbar-item">Contact</RouterLink>
      
      <a :href="profile.social.github.url" class="navbar-item external" target="_blank">
        <span>{{ profile.social.github.display }}</span>
        <svg class="external-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      
      <!-- Dark Mode Toggle -->
      <button class="theme-toggle" @click="toggleDarkMode" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        <svg v-if="!isDark" class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
          <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg v-else class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useDarkMode } from '../composables/useDarkMode.js'
import profile from '../data/profile.js'

const route = useRoute()
const showDropdown = ref(false)
const { isDark, toggleDarkMode } = useDarkMode()

// Check if current route is packages-related for dropdown active state
const isPackagesRoute = computed(() => {
  return route.path === '/packages' || route.path === '/vscode-extensions'
})
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* Remove sticky positioning to prevent z-index conflicts */
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.brand-link {
  text-decoration: none;
  color: inherit;
}

.navbar-brand h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
}

.tagline {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 400;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.navbar-item {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
}

.navbar-item:hover {
  color: #f0f0f0;
  transform: translateY(-1px);
}

.navbar-item.router-link-active,
.navbar-item.active {
  color: #ffd700;
}

.navbar-item.router-link-active::after,
.navbar-item.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ffd700;
  border-radius: 1px;
}

/* Dropdown Styles - Using flexbox positioning instead of absolute */
.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dropdown-trigger {
  cursor: pointer;
}

.dropdown-icon {
  transition: transform 0.3s ease;
  margin-left: 0.25rem;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  min-width: 280px;
  max-width: 90vw;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-10px);
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  overflow: hidden;
  z-index: 50;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
  transform: none;
}

.dropdown-item.router-link-active {
  background-color: #e3f2fd;
  color: #667eea;
}

.dropdown-item.router-link-active::after {
  display: none;
}

.dropdown-emoji {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.dropdown-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
}

.dropdown-subtitle {
  font-size: 0.85rem;
  color: #6c757d;
  margin: 0;
}

/* Theme Toggle */
.theme-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.sun-icon, .moon-icon {
  transition: transform 0.3s ease;
}

.theme-toggle:hover .sun-icon,
.theme-toggle:hover .moon-icon {
  transform: rotate(15deg);
}

.external-icon {
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.navbar-item.external:hover .external-icon {
  opacity: 1;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    max-width: 100vw;
    box-sizing: border-box;
  }
  
  .navbar-menu {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
  }
  
  .navbar-brand h1 {
    font-size: 1.5rem;
  }
  
  .tagline {
    font-size: 0.8rem;
  }
  
  .dropdown-menu {
    left: 1rem;
    right: 1rem;
    width: auto;
    min-width: auto;
    max-width: calc(100vw - 2rem);
    transform: translateX(-50%) translateY(-10px);
  }
  
  .dropdown-menu.show {
    transform: translateX(-50%) translateY(0);
  }
}
</style>
