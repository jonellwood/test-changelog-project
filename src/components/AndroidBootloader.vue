<template>
  <!-- 
    AndroidBootloader Component
    
    This component provides a terminal-style Android bootloader interface.
    Currently available for future use - can be swapped with SMSChat in HomeView.
    
    To use this component instead of SMSChat:
    1. Import: import AndroidBootloader from '../components/AndroidBootloader.vue'
    2. Replace: <SMSChat /> with <AndroidBootloader /> in the mobile container
  -->
  <div class="bootloader-container" role="region" aria-label="Android Bootloader Terminal" ref="bootloaderContainer">
    <pre class="bootlog" role="log" aria-live="polite" aria-label="Bootloader output">{{ bootlogContent }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// Bootlog content with timestamps and hex addresses for authenticity
const bootlogContent = ref('')
const bootloaderContainer = ref(null)
const visibleLines = ref([])

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const bootData = [
  { timestamp: '00:00:00.001', hex: '0x001000', msg: 'ANDROID BOOTLOADER', status: '' },
  { timestamp: '00:00:00.015', hex: '0x001010', msg: '', status: '' },
  { timestamp: '00:00:00.023', hex: '0x001020', msg: 'Product/Variant: jonellwood_dev', status: '' },
  { timestamp: '00:00:00.031', hex: '0x001030', msg: 'HW Version: Full Stack v5.0', status: '' },
  { timestamp: '00:00:00.045', hex: '0x001040', msg: 'Bootloader Version: OSS-2025.1', status: '' },
  { timestamp: '00:00:00.052', hex: '0x001050', msg: 'Baseband Version: Vue-3.5.17', status: '' },
  { timestamp: '00:00:00.067', hex: '0x001060', msg: 'Carrier Info: Open Source', status: '' },
  { timestamp: '00:00:00.075', hex: '0x001070', msg: 'Serial Number: JE123DEV456', status: '' },
  { timestamp: '00:00:00.089', hex: '0x001080', msg: '', status: '' },
  { timestamp: '00:00:00.095', hex: '0x001090', msg: '───────────────────────────────────', status: '' },
  { timestamp: '00:00:00.112', hex: '0x0010A0', msg: '', status: '' },
  { timestamp: '00:00:00.125', hex: '0x0010B0', msg: 'DEVELOPER: Jon Ellwood', status: '' },
  { timestamp: '00:00:00.134', hex: '0x0010C0', msg: 'STATUS: Full Stack Developer', status: '' },
  { timestamp: '00:00:00.147', hex: '0x0010D0', msg: 'SPECIALIZATION: Vue.js & Node.js', status: '' },
  { timestamp: '00:00:00.156', hex: '0x0010E0', msg: 'BOOTLOADER STATE: Unlocked', status: '✓' },
  { timestamp: '00:00:00.167', hex: '0x0010F0', msg: '', status: '' },
  { timestamp: '00:00:00.178', hex: '0x001100', msg: '───────────────────────────────────', status: '' },
  { timestamp: '00:00:00.189', hex: '0x001110', msg: '', status: '' },
  { timestamp: '00:00:00.195', hex: '0x001120', msg: 'INSTALLED PACKAGES:', status: '' },
  { timestamp: '00:00:00.212', hex: '0x001130', msg: '├─ git-changelog-manager v1.0.3', status: '' },
  { timestamp: '00:00:00.223', hex: '0x001140', msg: '├─ ftp-deploy-manager v1.2.0', status: '' },
  { timestamp: '00:00:00.234', hex: '0x001150', msg: '└─ tag-toggle (VSCode) v1.1.0', status: '' },
  { timestamp: '00:00:00.245', hex: '0x001160', msg: '', status: '' },
  { timestamp: '00:00:00.256', hex: '0x001170', msg: 'SKILL MODULES LOADED:', status: '' },
  { timestamp: '00:00:00.267', hex: '0x001180', msg: '├─ JavaScript/TypeScript [OK]', status: '✓' },
  { timestamp: '00:00:00.278', hex: '0x001190', msg: '├─ Vue.js Framework v3.x [OK]', status: '✓' },
  { timestamp: '00:00:00.289', hex: '0x0011A0', msg: '├─ Node.js Runtime [OK]', status: '✓' },
  { timestamp: '00:00:00.295', hex: '0x0011B0', msg: '├─ PHP/Laravel Backend [OK]', status: '✓' },
  { timestamp: '00:00:00.312', hex: '0x0011C0', msg: '├─ MySQL Database [OK]', status: '✓' },
  { timestamp: '00:00:00.323', hex: '0x0011D0', msg: '├─ Git Version Control [OK]', status: '✓' },
  { timestamp: '00:00:00.334', hex: '0x0011E0', msg: '└─ CLI Development Tools [OK]', status: '✓' },
  { timestamp: '00:00:00.345', hex: '0x0011F0', msg: '', status: '' },
  { timestamp: '00:00:00.356', hex: '0x001200', msg: 'GITHUB STATS:', status: '' },
  { timestamp: '00:00:00.367', hex: '0x001210', msg: '├─ Repositories: 123+', status: '' },
  { timestamp: '00:00:00.378', hex: '0x001220', msg: '├─ npm Downloads: 1000+', status: '' },
  { timestamp: '00:00:00.389', hex: '0x001230', msg: '├─ Years Experience: 5+', status: '' },
  { timestamp: '00:00:00.395', hex: '0x001240', msg: '└─ Open Source Commits: ∞', status: '' },
  { timestamp: '00:00:00.412', hex: '0x001250', msg: '', status: '' },
  { timestamp: '00:00:00.423', hex: '0x001260', msg: 'NETWORK INTERFACES:', status: '' },
  { timestamp: '00:00:00.434', hex: '0x001270', msg: '├─ GitHub: github.com/jonellwood', status: '' },
  { timestamp: '00:00:00.445', hex: '0x001280', msg: '├─ LinkedIn: /in/jon-ellwood...', status: '' },
  { timestamp: '00:00:00.456', hex: '0x001290', msg: '├─ Email: jonellwood@gmail.com', status: '' },
  { timestamp: '00:00:00.467', hex: '0x0012A0', msg: '├─ Bluesky: @jonellwood.dev', status: '' },
  { timestamp: '00:00:00.478', hex: '0x0012B0', msg: '└─ Website: jonellwood.dev', status: '' },
  { timestamp: '00:00:00.489', hex: '0x0012C0', msg: '', status: '' },
  { timestamp: '00:00:00.495', hex: '0x0012D0', msg: 'DEVICE STATE: Available for work', status: '' },
  { timestamp: '00:00:00.512', hex: '0x0012E0', msg: 'UNLOCK STATUS: Open to opportunities', status: '' },
  { timestamp: '00:00:00.523', hex: '0x0012F0', msg: '', status: '' },
  { timestamp: '00:00:00.534', hex: '0x001300', msg: '───────────────────────────────────', status: '' },
  { timestamp: '00:00:00.545', hex: '0x001310', msg: '', status: '' },
  { timestamp: '00:00:00.556', hex: '0x001320', msg: 'EASTER EGG: Type \'woodwork\' for', status: '' },
  { timestamp: '00:00:00.567', hex: '0x001330', msg: 'hobby mode 🪑', status: '' },
  { timestamp: '00:00:00.578', hex: '0x001340', msg: '', status: '' },
  { timestamp: '00:00:00.589', hex: '0x001350', msg: 'fastboot> _', status: '' }
]

const formatBootLine = (entry) => {
  const timestamp = `[${entry.timestamp}]`
  const hex = `${entry.hex}`
  const status = entry.status ? ` ${entry.status}` : ''
  
  if (entry.msg === '') {
    return ''
  }
  
  return `${timestamp} ${hex} ${entry.msg}${status}`
}

// Auto-scroll to bottom function
const scrollToBottom = async () => {
  await nextTick()
  if (bootloaderContainer.value) {
    bootloaderContainer.value.scrollTo({
      top: bootloaderContainer.value.scrollHeight,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  }
}

// Animate bootloader lines appearing progressively
const animateBootloader = async () => {
  const lineDelay = prefersReducedMotion ? 10 : 150 // Faster than SMS for terminal feel
  
  for (let i = 0; i < bootData.length; i++) {
    const formattedLine = formatBootLine(bootData[i])
    
    if (formattedLine) {
      visibleLines.value.push(formattedLine)
      bootlogContent.value = visibleLines.value.join('\n')
      
      // Auto-scroll to show new line
      await scrollToBottom()
    }
    
    // Wait before next line
    await new Promise(resolve => setTimeout(resolve, lineDelay))
  }
}

onMounted(() => {
  // Start the animated bootloader sequence
  animateBootloader()
})
</script>

<style scoped>
.bootloader-container {
  width: 100%;
  max-width: 100%;
  height: 500px;
  background-color: #000;
  color: #0f0;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 12px;
}

.bootlog {
  font-family: 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #000;
  color: #0f0;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
}

.bootlog::after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 12px;
  background-color: #0f0;
  margin-left: 2px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .bootlog::after {
    animation: none;
    opacity: 1;
  }
}

/* Color coding for status symbols */
.bootlog :global(.status-success) {
  color: #0f0;
}

.bootlog :global(.status-error) {
  color: #f00;
}

.bootlog :global(.status-warning) {
  color: #ff0;
}

/* Component is now conditionally mounted via JavaScript - no hiding needed */

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .bootloader-container {
    padding: 10px;
    height: 400px;
  }
  
  .bootlog {
    font-size: 10px;
    line-height: 1.1;
  }
}

@media (max-width: 480px) {
  .bootloader-container {
    padding: 5px;
    height: 350px;
  }
  
  .bootlog {
    font-size: 9px;
    line-height: 1.0;
  }
}
</style>
