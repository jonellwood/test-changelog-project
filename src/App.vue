<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import { useDarkMode } from './composables/useDarkMode.js'

const { initializeDarkMode } = useDarkMode()

onMounted(() => {
  initializeDarkMode()
})
</script>

<template>
  <div id="app">
    <AppNavbar />
    
    <main class="main-content">
      <RouterView />
    </main>
    
    <AppFooter />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 0;
}
</style>
