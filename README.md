# Jon Ellwood - Personal Website 🚀

> A modern, responsive personal website showcasing my work, projects, and professional journey as a developer.

## 🌐 Live Website

Visit [jonellwood.dev](https://jonellwood.dev) to see the live site!

## ✨ Features

### 🏠 **Home**

- Professional introduction and hero section
- GitHub activity integration with real-time stats
- Interactive GitHub contributions graph
- Quick access to key information

### 👨‍💻 **About**

- Professional background and experience
- Skills and technologies I work with
- Personal interests and hobbies

### 🛠️ **Projects**

- Showcase of featured projects and applications
- Technology stack tags for each project
- Live demos and source code links
- Project descriptions and highlights

### 📦 **Packages**

- Published npm packages with installation instructions
- Package descriptions and use cases
- Download statistics and links to documentation

### 🔧 **Uses**

- Development tools and software I use daily
- Hardware setup and equipment
- Productivity apps and workflows

### 🧩 **VS Code Extensions**

- Curated list of my favorite VS Code extensions
- Productivity and development enhancement tools
- Installation links and descriptions

### 📞 **Contact**

- Multiple ways to get in touch
- Social media links and professional profiles
- Contact form for direct communication

## 🛠️ Tech Stack

- **Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **State Management**: Pinia
- **Routing**: Vue Router
- **Deployment**: Netlify
- **Version Control**: Git with changelog management

## 🚀 GitHub Integration

The website features real-time GitHub integration including:

- Repository count and statistics
- Commit activity for the current year
- Interactive contributions graph (GitHub-style)
- Live data fetched from GitHub API

### Setting up GitHub Token (Optional)

For enhanced GitHub features, you can add a personal access token:

1. Copy the environment template:

   ```bash
   cp .env.example .env
   ```

2. Generate a token at [GitHub Settings](https://github.com/settings/tokens)
   - Select `public_repo` scope for public repositories

3. Add your token to `.env`:

   ```env
   VUE_APP_GITHUB_TOKEN=your_token_here
   ```

*Note: Without a token, the site will show demo data for the contributions graph.*

## 🏗️ Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jonellwood/test-changelog-project.git
   cd test-changelog-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser to `http://localhost:5173`**

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and fix code
npm run lint

# Format code with Prettier
npm run format

# Add changelog entry
npm run changelog:add

# Create changelog release
npm run changelog:release
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── AppNavbar.vue   # Navigation component
│   ├── AppFooter.vue   # Footer component
│   └── GitHubContributions.vue  # GitHub integration
├── views/              # Page components
│   ├── HomeView.vue    # Landing page
│   ├── AboutView.vue   # About me page
│   ├── ProjectsView.vue # Projects showcase
│   ├── PackagesView.vue # npm packages
│   ├── UsesView.vue    # Tools and setup
│   ├── VSCodeExtensionsView.vue # VS Code extensions
│   └── ContactView.vue # Contact information
├── utils/              # Utility functions
│   └── github.js       # GitHub API integration
├── composables/        # Vue composables
│   └── useDarkMode.js  # Dark mode functionality
└── assets/             # Static assets and styles
```

## 🎨 Customization

The website is built with customization in mind:

- **Content**: Update page content in the respective Vue files
- **Styling**: Modify CSS variables and component styles
- **GitHub Integration**: Add your GitHub username in the API utils
- **Projects**: Update the projects data in `ProjectsView.vue`
- **Packages**: Modify package information in `PackagesView.vue`

## 📝 Changelog Management

This project uses `git-changelog-manager` for version tracking:

- View changelog entries in `changelog/releases/`
- Add new entries with `npm run changelog:add`
- Create releases with `npm run changelog:release`

## 🚀 Deployment

The site is configured for deployment on Netlify:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 20
- **SPA Redirects**: Configured for Vue Router

## 🤝 Contributing

This is my personal website, but if you find bugs or have suggestions:

1. Open an issue describing the problem or enhancement
2. Fork the repository and create a feature branch
3. Submit a pull request with your changes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vue 3](https://vuejs.org/) and [Vite](https://vite.dev/)
- Deployed on [Netlify](https://netlify.com/)
- GitHub integration powered by [GitHub API](https://docs.github.com/en/rest)
- Icons and styling inspired by modern web design principles

---

**Jon Ellwood** - *Software Developer*

[Website](https://jonellwood.dev) • [GitHub](https://github.com/jonellwood) • [LinkedIn](https://linkedin.com/in/jonellwood)
