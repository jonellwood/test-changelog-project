import { ref, watch } from 'vue'

const isDark = ref(false)

// Initialize from localStorage or system preference
const initializeDarkMode = () => {
  const stored = localStorage.getItem('darkMode')
  if (stored !== null) {
    isDark.value = JSON.parse(stored)
  } else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Apply initial theme
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}

// Watch for changes and persist to localStorage
watch(isDark, (newValue) => {
  localStorage.setItem('darkMode', JSON.stringify(newValue))
  updateTheme()
}, { immediate: false })

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only update if user hasn't manually set a preference
  if (localStorage.getItem('darkMode') === null) {
    isDark.value = e.matches
  }
})

export function useDarkMode() {
  return {
    isDark,
    toggleDarkMode,
    initializeDarkMode
  }
}
