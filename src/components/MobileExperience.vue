<template>
  <div class="mobile-experience">
    <!-- Main component display -->
    <div class="component-container">
      <SMSChat v-if="!showAndroid" />
      <AndroidBootloader v-else />
    </div>
    
    <!-- Toggle switch -->
    <div class="toggle-container">
      <span class="toggle-label" :class="{ active: !showAndroid }">iPhone</span>
      <button 
        @click="toggleComponent" 
        class="toggle-switch"
        :class="{ 'android-mode': showAndroid }"
        :aria-label="showAndroid ? 'Switch to iPhone mode' : 'Switch to Android mode'"
      >
        <span class="toggle-slider"></span>
      </button>
      <span class="toggle-label" :class="{ active: showAndroid }">Android</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SMSChat from './SMSChat.vue'
import AndroidBootloader from './AndroidBootloader.vue'

// State for component switching
const showAndroid = ref(false)

// Toggle between components
const toggleComponent = () => {
  showAndroid.value = !showAndroid.value
}
</script>

<style scoped>
.mobile-experience {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-sizing: border-box;
}

.component-container {
  width: 100%;
  max-width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.toggle-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  user-select: none;
}

.toggle-label.active {
  color: #fff;
  font-weight: 600;
}

.toggle-switch {
  position: relative;
  width: 60px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.toggle-switch:hover {
  background: rgba(255, 255, 255, 0.3);
}

.toggle-switch.android-mode {
  background: #4CAF50;
}

.toggle-switch:focus {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

.toggle-slider {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle-switch.android-mode .toggle-slider {
  transform: translateX(30px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .component-container {
    height: 400px;
  }
  
  .toggle-container {
    padding: 0.6rem 1.2rem;
    gap: 0.8rem;
  }
  
  .toggle-label {
    font-size: 0.85rem;
  }
  
  .toggle-switch {
    width: 50px;
    height: 26px;
  }
  
  .toggle-slider {
    width: 20px;
    height: 20px;
    top: 3px;
    left: 3px;
  }
  
  .toggle-switch.android-mode .toggle-slider {
    transform: translateX(24px);
  }
}

@media (max-width: 480px) {
  .component-container {
    height: 350px;
  }
  
  .toggle-container {
    padding: 0.5rem 1rem;
    gap: 0.6rem;
  }
  
  .toggle-label {
    font-size: 0.8rem;
  }
}
</style>
