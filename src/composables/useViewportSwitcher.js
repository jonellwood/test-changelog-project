import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for viewport-based component switching
 * 
 * This composable provides a lightweight JavaScript utility for responsive component mounting.
 * It ensures no duplicate content is present in the DOM by using conditional rendering (v-if)
 * instead of CSS media queries. This approach:
 * 
 * 1. Mounts/unmounts components based on viewport width dynamically
 * 2. Prevents SEO and accessibility issues by ensuring only one component is in the DOM
 * 3. Provides better performance as unused components are not rendered
 * 4. Uses throttled resize events to optimize performance
 * 
 * @param {number} breakpoint - The breakpoint width in pixels (default: 768px)
 * @returns {Object} - Object containing isMobile reactive ref and utility functions
 */
export function useViewportSwitcher(breakpoint = 768) {
  const isMobile = ref(false)
  
  // Check if current viewport is mobile
  const checkViewport = () => {
    isMobile.value = window.innerWidth <= breakpoint
  }
  
  // Throttle function to limit resize event frequency
  const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }
  
  // Throttled resize handler
  const handleResize = throttle(checkViewport, 100)
  
  // Initialize viewport check on mount
  onMounted(() => {
    checkViewport()
    window.addEventListener('resize', handleResize)
  })
  
  // Clean up event listener on unmount
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  
  return {
    isMobile,
    checkViewport
  }
}
