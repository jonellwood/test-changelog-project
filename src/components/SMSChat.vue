<template>
  <div class="sms-thread" role="region" aria-label="SMS Chat with Jon Ellwood">
    <div class="sms-header">
      <div class="contact-info">
        <div class="contact-avatar">
          <img src="/jon.png" alt="Jon Ellwood profile picture" class="avatar-image" />
        </div>
        <div class="contact-details">
          <h3>Jon Ellwood</h3>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div class="status-indicator" aria-label="Online status">●</div>
    </div>

    <div
      class="messages-container"
      role="log"
      aria-live="polite"
      aria-label="Chat messages"
      ref="messagesContainer"
    >
      <div
        v-for="(message, index) in visibleMessages"
        :key="index"
        :class="['msg', message.sender]"
        role="article"
        :aria-label="`Message from ${message.sender === 'device' ? 'Jon' : 'user'} at ${message.time}`"
      >
        <div class="message-bubble">
          <span v-if="message.isTyping" class="typing-indicator">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
          <span v-else>{{ message.text }}</span>
        </div>
        <div class="message-time">{{ message.time }}</div>
      </div>
    </div>

    <div class="input-area">
      <input
        type="text"
        placeholder="Ask me anything..."
        class="message-input"
        disabled
        aria-label="Type a message (currently disabled for demo)"
      />
      <button class="send-button" aria-label="Send message (currently disabled for demo)">→</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// Chat messages data
const messages = ref([
  {
    sender: 'device',
    text: 'Hi there! 👋',
    time: '10:30 AM',
    isTyping: false,
  },
  {
    sender: 'device',
    text: "I'm Jon, a full-stack developer passionate about learning new things that create amazing web experiences.",
    time: '10:30 AM',
    isTyping: false,
  },
  {
    sender: 'user',
    text: 'What technologies do you work with?',
    time: '10:31 AM',
    isTyping: false,
  },
  {
    sender: 'device',
    text: "I ❤️ plain 'ol' HTML, CSS, and Javascript - but also use Vue.js, Sveltekit, PHP, and Python (and dabble in React). Anything that helps me create experiences that provide the best UX. I love the challenge of building scalable applications!",
    time: '10:31 AM',
    isTyping: false,
  },
  {
    sender: 'user',
    text: 'Can you show me your projects?',
    time: '10:32 AM',
    isTyping: false,
  },
  {
    sender: 'device',
    text: "Absolutely! Check out my GitHub or browse the projects section. I've built everything from npm packages to full-stack applications.",
    time: '10:32 AM',
    isTyping: false,
  },
])

const visibleMessages = ref([])
const messagesContainer = ref(null)

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Typing animation delay (reduced for users who prefer reduced motion)
const typeDelay = prefersReducedMotion ? 100 : 1500
const revealDelay = prefersReducedMotion ? 100 : 800

// Auto-scroll to bottom function
const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTo({
      top: messagesContainer.value.scrollHeight,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }
}

onMounted(() => {
  animateMessages()
})

const animateMessages = async () => {
  for (let i = 0; i < messages.value.length; i++) {
    // Show typing indicator for device messages
    if (messages.value[i].sender === 'device') {
      visibleMessages.value.push({
        ...messages.value[i],
        isTyping: true,
      })

      // Scroll to show typing indicator
      await scrollToBottom()

      // Wait for typing animation
      await new Promise((resolve) => setTimeout(resolve, typeDelay))

      // Replace with actual message
      visibleMessages.value[visibleMessages.value.length - 1].isTyping = false

      // Scroll to show the complete message
      await scrollToBottom()
    } else {
      // User messages appear immediately
      visibleMessages.value.push(messages.value[i])

      // Scroll to show user message
      await scrollToBottom()
    }

    // Wait before next message
    await new Promise((resolve) => setTimeout(resolve, revealDelay))
  }
}
</script>

<style scoped>
.sms-thread {
  background: #000;
  border-radius: 20px;
  width: 100%;
  max-width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  box-sizing: border-box;
  position: relative;
}

.sms-header {
  background: #1c1c1e;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #667eea;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.contact-details h3 {
  margin: 0;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
}

.contact-details p {
  margin: 0;
  color: #8e8e93;
  font-size: 0.8rem;
}

.status-indicator {
  color: #30d158;
  font-size: 0.8rem;
}

.messages-container {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.msg {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  animation: slideIn 0.3s ease-out;
  box-sizing: border-box;
  word-wrap: break-word;
}

.msg.user {
  align-self: flex-end;
  align-items: flex-end;
}

.msg.device {
  align-self: flex-start;
  align-items: flex-start;
}

.message-bubble {
  padding: 0.75rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  line-height: 1.4;
  word-wrap: break-word;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  hyphens: auto;
  overflow-wrap: break-word;
  text-align: left;
}

.msg.user .message-bubble {
  background: #007aff;
  color: white;
  border-bottom-right-radius: 8px;
}

.msg.device .message-bubble {
  background: #2c2c2e;
  color: #fff;
  border-bottom-left-radius: 8px;
}

.message-time {
  font-size: 0.7rem;
  color: #8e8e93;
  margin-top: 0.25rem;
  padding: 0 0.5rem;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8e8e93;
  animation: typing 1.4s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
}
.dot:nth-child(3) {
  animation-delay: 0.4s;
}

.input-area {
  background: #1c1c1e;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  border-top: 1px solid #333;
}

.message-input {
  flex: 1;
  background: #2c2c2e;
  border: none;
  border-radius: 20px;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 0.9rem;
  outline: none;
}

.message-input::placeholder {
  color: #8e8e93;
}

.send-button {
  background: #007aff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.send-button:hover {
  background: #0056b3;
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .dot {
    animation: none;
  }

  .msg {
    animation: none;
  }

  .typing-indicator .dot {
    opacity: 0.7;
  }
}

/* Component is now conditionally mounted via JavaScript - no hiding needed */

/* Mobile optimizations */
@media (max-width: 768px) {
  .sms-thread {
    height: 400px;
    border-radius: 16px;
    max-width: 100%;
    margin: 0;
  }

  .message-bubble {
    font-size: 0.85rem;
    padding: 0.6rem 0.9rem;
    max-width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .msg {
    max-width: 85%;
  }

  .sms-header {
    padding: 0.75rem;
  }

  .messages-container {
    padding: 0.75rem;
    overflow-x: hidden;
  }

  .input-area {
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .sms-thread {
    height: 350px;
    border-radius: 12px;
  }

  .message-bubble {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
  }

  .msg {
    max-width: 90%;
  }

  .sms-header {
    padding: 0.5rem;
  }

  .contact-details h3 {
    font-size: 0.8rem;
  }

  .contact-details p {
    font-size: 0.7rem;
  }

  .messages-container {
    padding: 0.5rem;
  }

  .input-area {
    padding: 0.5rem;
  }

  .message-input {
    font-size: 0.8rem;
    padding: 0.6rem 0.8rem;
  }
}
</style>
