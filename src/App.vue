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
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}

.main-content {
  flex: 1;
  padding: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>
