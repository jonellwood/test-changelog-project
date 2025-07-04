<template>
  <nav class="navbar">
    <div class="navbar-brand">
        <h1>Test Changelog Project - v3</h1>
    </div>
    <div class="navbar-menu">
      <RouterLink to="/" class="navbar-item">Home</RouterLink>
      <RouterLink to="/about" class="navbar-item">About</RouterLink>
      <a href="https://github.com/jonellwood/git-changelog-manager" class="navbar-item" target="_blank">
        📋 Changelog Manager
      </a>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.navbar-item {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

.navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.navbar-item.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: 600;
}
</style>
