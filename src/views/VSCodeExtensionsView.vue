<template>
  <div class="vscode-extensions">
    <section class="hero-section">
      <div class="container">
        <h1>VSCode Extensions</h1>
        <p>Enhancing developer productivity with custom Visual Studio Code extensions.</p>
      </div>
    </section>
    
    <section class="extensions-content">
      <div class="container">
        <div class="extensions-grid">
          <div class="extension-card featured">
            <div class="extension-header">
              <div class="extension-icon">
                <span class="emoji">🏷️</span>
              </div>
              <div class="extension-info">
                <h2>Tag Toggle</h2>
                <p class="extension-subtitle">Intelligent HTML tag commenting for VSCode</p>
              </div>
              <div class="extension-badge">
                <span class="installs">8 installs</span>
              </div>
            </div>
            
            <div class="extension-description">
              <p>
                Quickly comment and uncomment HTML tags and their matching closing tags with a single keyboard shortcut. 
                Place your cursor on any opening tag and use <kbd>Ctrl+Shift+C</kbd> (or <kbd>Cmd+Shift+C</kbd> on macOS) 
                to comment out the entire tag pair, even with hundreds of lines of content in between.
              </p>
            </div>
            
            <div class="features-section">
              <h3>Features</h3>
              <ul class="features-list">
                <li>
                  <strong>Smart Tag Detection:</strong> Automatically finds the matching closing tag for any opening tag, 
                  regardless of how many lines are between them
                </li>
                <li>
                  <strong>Self-Closing Tag Support:</strong> Handles self-closing tags like <code>&lt;img&gt;</code>, 
                  <code>&lt;input&gt;</code>, and <code>&lt;br&gt;</code>
                </li>
                <li>
                  <strong>Deep Nesting Support:</strong> Works with complex nested structures and hundreds of lines between tags
                </li>
                <li>
                  <strong>Simple Keyboard Shortcut:</strong> One shortcut to rule them all - no complex commands to remember
                </li>
              </ul>
            </div>
            
            <div class="usage-section">
              <h3>Usage</h3>
              <div class="usage-steps">
                <div class="step">
                  <span class="step-number">1</span>
                  <p>Place your cursor on any opening HTML tag</p>
                </div>
                <div class="step">
                  <span class="step-number">2</span>
                  <p>Press <kbd>Ctrl+Shift+C</kbd> (Windows/Linux) or <kbd>Cmd+Shift+C</kbd> (macOS)</p>
                </div>
                <div class="step">
                  <span class="step-number">3</span>
                  <p>Watch as both the opening and closing tags get commented out!</p>
                </div>
              </div>
            </div>
            
            <div class="tech-info">
              <h3>Technical Details</h3>
              <div class="tech-tags">
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">VSCode API</span>
                <span class="tech-tag">Extension Development</span>
                <span class="tech-tag">HTML Parsing</span>
              </div>
            </div>
            
            <div class="extension-links">
              <a href="https://marketplace.visualstudio.com/items?itemName=JonEllwood.tag-toggle" 
                 target="_blank" 
                 class="btn btn-primary">
                <span>📦</span> Install from Marketplace
              </a>
              <a href="https://github.com/jonellwood/tag-toggle" 
                 target="_blank" 
                 class="btn btn-secondary">
                <span>📂</span> View Source Code
              </a>
            </div>
            
            <div class="installation-guide">
              <h3>Quick Installation</h3>
              <div class="install-method">
                <p><strong>Method 1:</strong> VS Code Quick Open</p>
                <div class="code-block">
                  <code>ext install JonEllwood.tag-toggle</code>
                  <button class="copy-btn" @click="copyToClipboard('ext install JonEllwood.tag-toggle')">Copy</button>
                </div>
              </div>
              <div class="install-method">
                <p><strong>Method 2:</strong> Command Palette</p>
                <ol>
                  <li>Open Command Palette (<kbd>Ctrl+Shift+P</kbd>)</li>
                  <li>Type "Extensions: Install Extensions"</li>
                  <li>Search for "tag-toggle"</li>
                  <li>Click Install</li>
                </ol>
              </div>
            </div>
          </div>
          
          <!-- Placeholder for future extensions -->
          <div class="extension-card coming-soon">
            <div class="extension-header">
              <div class="extension-icon">
                <span class="emoji">🚧</span>
              </div>
              <div class="extension-info">
                <h2>More Extensions Coming Soon</h2>
                <p class="extension-subtitle">Stay tuned for more developer productivity tools</p>
              </div>
            </div>
            <div class="extension-description">
              <p>I'm always working on new ideas to make developers' lives easier. Follow my GitHub to be notified when new extensions are released!</p>
            </div>
            <div class="extension-links">
              <a href="https://github.com/jonellwood" target="_blank" class="btn btn-outline">
                <span>👀</span> Follow on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
    console.log('Copied to clipboard:', text)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
.vscode-extensions {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-section p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.extensions-content {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.extensions-grid {
  display: grid;
  gap: 2rem;
}

.extension-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.extension-card.featured {
  border: 2px solid #667eea;
}

.extension-card.coming-soon {
  opacity: 0.8;
  border: 2px dashed #ccc;
}

.extension-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

.extension-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.extension-icon .emoji {
  font-size: 3rem;
}

.extension-info {
  flex: 1;
}

.extension-info h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.extension-subtitle {
  color: #6c757d;
  font-size: 1.1rem;
  margin: 0;
}

.extension-badge {
  background: #e9ecef;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #495057;
  font-weight: 500;
}

.extension-description {
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #555;
}

.features-section,
.usage-section,
.tech-info,
.installation-guide {
  margin-bottom: 2rem;
}

.features-section h3,
.usage-section h3,
.tech-info h3,
.installation-guide h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

.features-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.usage-steps {
  display: grid;
  gap: 1rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.step-number {
  background: #667eea;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step p {
  margin: 0;
  color: #555;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
}

.extension-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

.btn-outline {
  background: transparent;
  color: #6c757d;
  border: 2px solid #dee2e6;
}

.btn-outline:hover {
  background: #6c757d;
  color: white;
}

.install-method {
  margin-bottom: 1.5rem;
}

.install-method p {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.code-block {
  display: flex;
  align-items: center;
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  margin-bottom: 1rem;
}

.code-block code {
  flex: 1;
  background: none;
  color: inherit;
  font-size: 0.9rem;
}

.copy-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 1rem;
}

.copy-btn:hover {
  background: #764ba2;
}

.install-method ol {
  margin-left: 1rem;
  color: #555;
}

.install-method ol li {
  margin-bottom: 0.5rem;
}

kbd {
  background: #f1f3f4;
  border: 1px solid #c7c7c7;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  color: #333;
  display: inline-block;
  font-family: Arial, sans-serif;
  font-size: 0.85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}

code {
  background: #f8f9fa;
  color: #e83e8c;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Dark mode specific overrides */
:deep(.dark) .vscode-extensions {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

:deep(.dark) .extensions-content {
  background-color: var(--bg-secondary);
}

:deep(.dark) .extension-card {
  background-color: var(--card-bg);
  box-shadow: 0 8px 30px var(--card-shadow);
}

:deep(.dark) .extension-info h2,
:deep(.dark) .features-section h3,
:deep(.dark) .usage-section h3,
:deep(.dark) .tech-info h3,
:deep(.dark) .installation-guide h3 {
  color: var(--text-primary);
}

:deep(.dark) .extension-subtitle,
:deep(.dark) .extension-description,
:deep(.dark) .features-list li,
:deep(.dark) .step p,
:deep(.dark) .install-method ol li {
  color: var(--text-secondary);
}

:deep(.dark) .install-method p {
  color: var(--text-primary);
}

:deep(.dark) .step {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
}

:deep(.dark) .extension-badge {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

:deep(.dark) .tech-tag {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .extension-header {
    flex-direction: column;
    text-align: center;
  }
  
  .extension-links {
    flex-direction: column;
  }
  
  .usage-steps {
    grid-template-columns: 1fr;
  }
  
  .code-block {
    flex-direction: column;
    gap: 1rem;
  }
  
  .copy-btn {
    margin-left: 0;
    align-self: flex-end;
  }
}
</style>
