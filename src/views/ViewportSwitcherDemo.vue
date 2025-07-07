<template>
  <div class="viewport-demo">
    <div class="demo-header">
      <h1>Viewport-Based Component Switcher Demo</h1>
      <p>Current viewport: <strong>{{ isMobile ? 'Mobile' : 'Desktop' }}</strong> ({{ viewportWidth }}px)</p>
      <p>Breakpoint: 768px</p>
    </div>
    
    <div class="component-container">
      <!-- Desktop Component -->
      <div v-if="!isMobile" class="desktop-component">
        <h2>🖥️ Desktop Terminal Component</h2>
        <div class="terminal-mockup">
          <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="terminal-body">
            <p>$ cat developer.json</p>
            <p>{</p>
            <p>  "name": "Jon Ellwood",</p>
            <p>  "role": "Full Stack Developer",</p>
            <p>  "viewport": "desktop"</p>
            <p>}</p>
            <span class="cursor">_</span>
          </div>
        </div>
      </div>
      
      <!-- Mobile Component -->
      <div v-if="isMobile" class="mobile-component">
        <h2>📱 Mobile Android Bootloader</h2>
        <div class="bootloader-mockup">
          <div class="boot-header">Android Bootloader</div>
          <div class="boot-body">
            <p>[00:00:01] Product: jonellwood_dev</p>
            <p>[00:00:02] Bootloader: Vue-3.x</p>
            <p>[00:00:03] Status: Full Stack Developer</p>
            <p>[00:00:04] Viewport: mobile ✓</p>
            <p>[00:00:05] fastboot> <span class="cursor">_</span></p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="demo-info">
      <h3>How It Works:</h3>
      <ul>
        <li>🎯 <strong>JavaScript-based switching:</strong> Uses Vue's v-if for conditional rendering</li>
        <li>⚡ <strong>Performance optimized:</strong> Throttled resize events (100ms)</li>
        <li>🚫 <strong>No duplicate DOM content:</strong> Only one component is mounted at a time</li>
        <li>♿ <strong>SEO & Accessibility friendly:</strong> Clean DOM structure</li>
        <li>📏 <strong>Responsive breakpoint:</strong> 768px (customizable)</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useViewportSwitcher } from '../composables/useViewportSwitcher.js'

// Initialize viewport switcher
const { isMobile } = useViewportSwitcher(768)

// Track actual viewport width for demo purposes
const viewportWidth = ref(0)

const updateViewportWidth = () => {
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  updateViewportWidth()
  window.addEventListener('resize', updateViewportWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateViewportWidth)
})
</script>

<style scoped>
.viewport-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.demo-header h1 {
  margin: 0 0 1rem 0;
  font-size: 2rem;
}

.demo-header p {
  margin: 0.5rem 0;
  opacity: 0.9;
}

.component-container {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.desktop-component, .mobile-component {
  width: 100%;
  text-align: center;
}

.terminal-mockup {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  max-width: 500px;
  margin: 1rem auto;
  font-family: 'Courier New', monospace;
}

.terminal-header {
  background: #2d2d2d;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red { background: #ff5f57; }
.yellow { background: #ffbd2e; }
.green { background: #28ca42; }

.terminal-body {
  padding: 1rem;
  color: #0f0;
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.4;
}

.bootloader-mockup {
  background: #000;
  border-radius: 8px;
  max-width: 400px;
  margin: 1rem auto;
  font-family: 'Courier New', monospace;
  overflow: hidden;
}

.boot-header {
  background: #333;
  color: #0f0;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
}

.boot-body {
  padding: 1rem;
  color: #0f0;
  text-align: left;
  font-size: 0.85rem;
  line-height: 1.4;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.demo-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.demo-info h3 {
  margin-top: 0;
  color: #333;
}

.demo-info ul {
  list-style: none;
  padding: 0;
}

.demo-info li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
}

.demo-info li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .viewport-demo {
    padding: 1rem;
  }
  
  .demo-header h1 {
    font-size: 1.5rem;
  }
  
  .terminal-mockup, .bootloader-mockup {
    max-width: 100%;
  }
}</style>
