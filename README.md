# Munich Workshop 2025 - Welcome Guide

A React-based welcome guide for the Munich Workshop Week 2025, providing essential information for international visitors including emergency contacts, transport, locations, food, and culture tips.

## 🚀 Live Demo

Visit the live website: [Munich Workshop 2025 Guide](https://martlgap.github.io/welcome-to-munich/)

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Special Vite Configuration](#special-vite-configuration)
- [Making Content Changes](#making-content-changes)
- [Deployment](#deployment)
- [GitHub Pages Setup](#github-pages-setup)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This is a single-page React application built with Vite that serves as a comprehensive welcome guide for workshop participants visiting Munich. The site features:

- Responsive design that works on desktop and mobile
- Multiple sections with essential information
- Mobile-friendly navigation
- Optimized for GitHub Pages deployment

## ✨ Features

- **Emergency Information**: Important phone numbers and contacts
- **Transport Guide**: Public transport information and tips
- **Locations**: Key workshop venues and landmarks
- **Food & Dining**: Restaurant recommendations and dining tips
- **Culture Tips**: Local customs and cultural insights
- **Mobile Responsive**: Works perfectly on all devices

## 🏁 Getting Started

### Prerequisites

Before you begin, make sure you have:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Git](https://git-scm.com/) installed on your computer
- A GitHub account (for deployment)

### Installation

1. **Fork this repository** to your GitHub account by clicking the "Fork" button at the top of this page

2. **Clone your forked repository** to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/welcome-to-munich.git
   cd welcome-to-munich
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173` to see the website

## ⚙️ Special Vite Configuration

This project has a special Vite configuration that handles different base URLs for development and production:

```javascript
// vite.config.js
export default defineConfig(({ command }) => {
  var config = {
    plugins: [react()],
    base: "/",  // For local development
  };

  if (command !== "serve") {
    config.base = "/welcome-to-munich/";  // For GitHub Pages just the repo name
  }
  return config;
});
```

### Why This Configuration?

- **Development**: Uses `base: "/"` so you can access the site at `http://localhost:5173`
- **Production**: Uses `base: "/welcome-to-munich/"` to match the GitHub Pages URL structure

### Customizing for Your Repository

If you fork this repository, you'll need to update the production base URL:

1. Open `vite.config.js`
2. Change the base URL to match your GitHub Pages URL:
   ```javascript
   config.base = "/welcome-to-munich/";  // For github.com/YOUR-USERNAME/welcome-to-munich
   ```

## 📝 Making Content Changes

### Updating Text Content

Most content is located in `src/App.jsx`. Here's how to make common changes:

1. **Update the main title**:
   ```jsx
   <h1>🇩🇪 Welcome to Munich!</h1>
   <p>DDAD CI TEAMS Workshop 2025 Guide</p>
   ```

2. **Add/modify sections**: Look for the `sections` object and the content rendering logic

3. **Update emergency numbers**: Find the emergency section and update the contact information

4. **Modify restaurant recommendations**: Locate the food section and update the listings

### Changing Images

1. **Workshop logo**: Replace `public/workshop-logo.png` with your own image (keep the same name)
2. **Favicon**: Replace `public/vite.svg` with your own icon

### Styling Changes

- **Main styles**: Edit `src/App.css` for layout and visual changes
- **Global styles**: Edit `src/index.css` for site-wide styling

## 🚀 Deployment

### Automatic Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Make your changes** and test them locally with `npm run dev`

2. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Update workshop information"
   git push origin main
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   This command:
   - Builds the project (`npm run build`)
   - Deploys the built files to the `gh-pages` branch
   - GitHub Pages automatically serves the content

### Manual Deployment

If you prefer manual deployment:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

## 🔧 GitHub Pages Setup

### First-Time Setup

1. **Enable GitHub Pages** in your repository:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Click "Save"

2. **Update the base URL** in `vite.config.js`:
   ```javascript
   config.base = "/welcome-to-munich/";  // Replace with your repository name
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Access your site**: 
   - Your site will be available at `https://YOUR-USERNAME.github.io/welcome-to-munich/`

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS settings
3. Update the base URL in `vite.config.js` to `"/"`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint to check code quality

## 🐛 Troubleshooting

### Common Issues

1. **Images not showing after deployment**:
   - Make sure images are in the `public` folder
   - Check that the base URL in `vite.config.js` is correct

2. **404 errors on GitHub Pages**:
   - Verify the base URL matches your repository name
   - Ensure GitHub Pages is enabled and configured correctly

3. **Build errors**:
   - Run `npm run lint` to check for code issues
   - Make sure all dependencies are installed with `npm install`

4. **Changes not appearing**:
   - Clear your browser cache
   - Wait a few minutes for GitHub Pages to update
   - Check that you pushed to the correct branch

### Getting Help

If you encounter issues:

1. Check the browser console for error messages
2. Review the GitHub Actions tab for deployment logs
3. Ensure all file paths and names are correct
4. Verify that your changes work locally before deploying

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Happy coding!** 🎉 If you have any questions or need help, feel free to open an issue in the repository.
