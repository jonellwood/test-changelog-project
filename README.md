# Jon Ellwood - Personal Website

A modern personal website built with Vue 3 and Vite, featuring GitHub integration, dynamic stats, and a contributions graph.

## Features

- **GitHub Integration**: Real-time repository count, commit statistics, and contributions graph
- **Dynamic Stats**: Live data fetched from GitHub API
- **Contributions Graph**: Visual representation of GitHub activity (similar to GitHub profile)
- **Responsive Design**: Mobile-friendly layout with modern styling
- **Project Showcase**: Featured projects with technology tags and links
- **npm Packages**: Display of published packages with installation instructions

## GitHub API Integration

The website fetches real data from GitHub's API including:
- Repository count
- Commit statistics for the current year
- Contribution graph data (optional with token)

### Setup GitHub Token (Optional)

For the contribution graph to show real data, you can provide a GitHub personal access token:

1. Copy the environment example file:
   ```sh
   cp .env.example .env
   ```

2. Generate a GitHub personal access token at: https://github.com/settings/tokens
   - Select "public_repo" scope for public repositories

3. Add your token to `.env`:
   ```
   VUE_APP_GITHUB_TOKEN=your_token_here
   ```

If no token is provided, the contribution graph will show mock data for demonstration purposes.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
