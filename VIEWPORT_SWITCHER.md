# Viewport-Based Component Switcher

## Overview

This project implements a lightweight JavaScript utility for responsive component switching that dynamically mounts/unmounts components based on viewport width to ensure optimal user experience across devices.

## Features

✅ **JavaScript-based switching**: Uses Vue's `v-if` for conditional rendering instead of CSS media queries  
✅ **Performance optimized**: Throttled resize events (100ms) to prevent excessive calculations  
✅ **No duplicate DOM content**: Only one component is mounted at a time  
✅ **SEO & Accessibility friendly**: Clean DOM structure prevents duplicate content issues  
✅ **Customizable breakpoint**: Default 768px, easily configurable  

## Implementation

### Core Files

- **`src/composables/useViewportSwitcher.js`** - Main composable providing reactive viewport detection
- **`src/views/HomeView.vue`** - Implementation example showing desktop terminal vs mobile component switching
- **`src/components/SMSChat.vue`** - Current mobile component (chat interface)
- **`src/components/AndroidBootloader.vue`** - Alternative mobile component (terminal interface)

### How It Works

```javascript
// 1. Import the composable
import { useViewportSwitcher } from '../composables/useViewportSwitcher.js'

// 2. Initialize with custom breakpoint (optional, defaults to 768px)
const { isMobile } = useViewportSwitcher(768)

// 3. Use conditional rendering in template
```

```vue
<template>
  <!-- Desktop Component - Only mounted when not mobile -->
  <div v-if="!isMobile" class="desktop-component">
    <DesktopTerminal />
  </div>
  
  <!-- Mobile Component - Only mounted when mobile -->
  <div v-if="isMobile" class="mobile-component">
    <SMSChat />
  </div>
</template>
```

## Component Switching

### Current Setup
- **Desktop (> 768px)**: Code terminal window
- **Mobile (≤ 768px)**: SMS chat interface

### Switching to AndroidBootloader

To use the AndroidBootloader component instead of SMSChat:

1. **Update imports in `src/views/HomeView.vue`**:
```javascript
// Change this:
import SMSChat from '../components/SMSChat.vue'
// import AndroidBootloader from '../components/AndroidBootloader.vue' // Available for future use

// To this:
// import SMSChat from '../components/SMSChat.vue' // Available for future use
import AndroidBootloader from '../components/AndroidBootloader.vue'
```

2. **Update the template**:
```vue
<!-- Change this: -->
<SMSChat />

<!-- To this: -->
<AndroidBootloader />
```

## Benefits Over CSS Media Queries

| Aspect | CSS Media Queries | JavaScript Switching |
|--------|------------------|---------------------|
| **DOM Content** | Both components always in DOM | Only active component in DOM |
| **Performance** | All components rendered | Only needed component rendered |
| **SEO Impact** | Potential duplicate content | Clean, single content source |
| **Accessibility** | Screen readers see all content | Screen readers see relevant content |
| **Bundle Size** | All component JS loaded | Conditional component loading possible |
| **Dynamic Control** | Static breakpoints only | Programmable logic possible |

## Performance Considerations

- **Throttled Events**: Resize events are throttled to 100ms to prevent excessive re-calculations
- **Component Mounting**: Components are properly mounted/unmounted, not just hidden
- **Memory Usage**: Unused components don't consume memory or processing power
- **Event Cleanup**: Automatic cleanup of event listeners on component unmount

## Browser Support

Works in all modern browsers that support:
- Vue 3 Composition API
- `window.innerWidth`
- `addEventListener`/`removeEventListener`

## Future Enhancements

Possible extensions to the system:

1. **Multiple Breakpoints**: Support for tablet, desktop, large desktop breakpoints
2. **Component Preloading**: Intelligent preloading of likely-to-be-needed components
3. **Transition Effects**: Smooth transitions between component switches
4. **Orientation Detection**: Additional switching based on device orientation
5. **User Preference**: Allow users to manually override automatic switching

## Testing

The system includes a demo page (`src/views/ViewportSwitcherDemo.vue`) that:
- Shows real-time viewport width
- Demonstrates component switching
- Provides visual feedback of which component is mounted
- Explains the implementation benefits

## Usage in Other Projects

The `useViewportSwitcher` composable is framework-agnostic within Vue 3 and can be easily adapted for:
- Different component libraries
- Custom breakpoints
- Multiple breakpoint tiers
- Integration with existing responsive systems
