# 💻 Local Development Setup Guide

Complete guide to run the Drag-AI website on your local machine.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software:

1. **Node.js** (v18.14.1 or higher)
   - Download: [https://nodejs.org/](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (for cloning repository)
   - Download: [https://git-scm.com/](https://git-scm.com/)
   - Verify installation: `git --version`

4. **Code Editor** (recommended)
   - [Visual Studio Code](https://code.visualstudio.com/)
   - [WebStorm](https://www.jetbrains.com/webstorm/)
   - [Sublime Text](https://www.sublimetext.com/)

---

## 🚀 Quick Start (5 Minutes)

### If you already have the code locally:

```bash
# 1. Navigate to project directory
cd drag-ai-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:4321
```

That's it! Your website is now running locally. 🎉

---

## 📥 Step 1: Get the Code

### Option A: Clone from GitHub (Recommended)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/drag-ai-website.git

# Navigate into the directory
cd drag-ai-website
```

### Option B: Download ZIP

1. Go to your GitHub repository
2. Click **"Code"** → **"Download ZIP"**
3. Extract the ZIP file
4. Open terminal in the extracted folder

### Option C: Already have the code

If you already have the code in `/Users/deepesh/Documents/additionla_exp/drag/drag-ai-website`:

```bash
cd /Users/deepesh/Documents/additionla_exp/drag/drag-ai-website
```

---

## 📦 Step 2: Install Dependencies

This installs all required packages (Astro, Tailwind CSS, etc.):

```bash
npm install
```

**What this does:**
- Reads `package.json`
- Downloads all dependencies to `node_modules/`
- Creates `package-lock.json` (if not exists)
- Takes 1-3 minutes depending on internet speed

**Expected output:**
```
added 245 packages, and audited 246 packages in 45s
```

---

## 🏃 Step 3: Run Development Server

### Start the server:

```bash
npm run dev
```

**Expected output:**
```
  🚀  astro  v4.16.18 started in 234ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose

  watching for file changes...
```

### Access the website:

1. Open your browser
2. Go to: **http://localhost:4321**
3. You should see the Drag-AI homepage

---

## 🛠️ Available Commands

### Development:

```bash
# Start development server (with hot reload)
npm run dev

# Start on different port
npm run dev -- --port 3000

# Expose to network (access from other devices)
npm run dev -- --host
```

### Building:

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Other:

```bash
# Check Astro version
npm run astro -- --version

# Run Astro CLI commands
npm run astro -- [command]
```

---

## 📁 Project Structure

```
drag-ai-website/
├── public/                 # Static assets (images, fonts, etc.)
│   ├── favicon.svg
│   ├── logo.jpg
│   ├── robots.txt
│   └── og-image-template.html
│
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   │
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   │
│   ├── pages/              # Website pages (file-based routing)
│   │   ├── index.astro     # Homepage (/)
│   │   ├── about.astro     # About page (/about)
│   │   ├── services.astro  # Services (/services)
│   │   ├── contact.astro   # Contact (/contact)
│   │   ├── privacy.astro   # Privacy Policy (/privacy)
│   │   ├── terms.astro     # Terms of Service (/terms)
│   │   └── industries/     # Industry pages
│   │       ├── index.astro
│   │       ├── construction.astro
│   │       ├── hospitality.astro
│   │       └── ...
│   │
│   └── styles/             # Global styles
│       └── global.css
│
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## 🔧 Development Workflow

### 1. Make Changes:

Edit any file in the `src/` directory:

```bash
# Example: Edit homepage
code src/pages/index.astro

# Or use any text editor
open src/pages/index.astro
```

### 2. See Changes Instantly:

- Save the file
- Browser automatically refreshes (Hot Module Replacement)
- No need to restart the server

### 3. Add New Pages:

```bash
# Create new page
touch src/pages/blog.astro

# Access at http://localhost:4321/blog
```

### 4. Add New Components:

```bash
# Create new component
touch src/components/Newsletter.astro

# Import in any page
# ---
# import Newsletter from '../components/Newsletter.astro';
# ---
# <Newsletter />
```

---

## 🎨 Customization Guide

### Change Colors:

Edit `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Change Content:

Edit page files in `src/pages/`:

```astro
<!-- src/pages/index.astro -->
<h1>Your New Heading</h1>
<p>Your new content</p>
```

### Add Images:

1. Place images in `public/` folder
2. Reference in code:

```astro
<img src="/your-image.jpg" alt="Description" />
```

### Modify Styles:

Edit `src/styles/global.css` for global styles:

```css
/* Add custom styles */
.custom-class {
  /* your styles */
}
```

---

## 🐛 Troubleshooting

### Problem: Port 4321 already in use

**Solution 1:** Use different port
```bash
npm run dev -- --port 3000
```

**Solution 2:** Kill process using port 4321
```bash
# Mac/Linux
lsof -ti:4321 | xargs kill -9

# Windows
netstat -ano | findstr :4321
taskkill /PID [PID_NUMBER] /F
```

### Problem: "Cannot find module" error

**Solution:** Reinstall dependencies
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Problem: Changes not reflecting

**Solution 1:** Hard refresh browser
- Mac: `Cmd + Shift + R`
- Windows: `Ctrl + Shift + R`

**Solution 2:** Restart dev server
```bash
# Stop server (Ctrl + C)
# Start again
npm run dev
```

### Problem: Build errors

**Solution:** Check for syntax errors
```bash
# Run build to see detailed errors
npm run build
```

### Problem: Slow performance

**Solution 1:** Clear Astro cache
```bash
rm -rf .astro
npm run dev
```

**Solution 2:** Update dependencies
```bash
npm update
```

---

## 🧪 Testing Your Changes

### Before committing changes:

```bash
# 1. Build the project
npm run build

# 2. Preview production build
npm run preview

# 3. Test in browser at http://localhost:4321

# 4. Check for errors in terminal
```

### Test checklist:

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Forms submit properly
- [ ] Images display correctly
- [ ] Mobile responsive (resize browser)
- [ ] No console errors (F12 → Console)

---

## 📱 Testing on Mobile Devices

### Option 1: Use --host flag

```bash
# Start server with network access
npm run dev -- --host

# Output will show:
# Local    http://localhost:4321/
# Network  http://192.168.1.100:4321/  ← Use this on mobile
```

Access the Network URL from your mobile device (must be on same WiFi).

### Option 2: Use ngrok (for external testing)

```bash
# Install ngrok
npm install -g ngrok

# In one terminal, run dev server
npm run dev

# In another terminal, expose it
ngrok http 4321

# Use the ngrok URL on any device
```

---

## 🔄 Updating Dependencies

### Check for updates:

```bash
npm outdated
```

### Update all dependencies:

```bash
npm update
```

### Update specific package:

```bash
npm update astro
npm update @astrojs/tailwind
```

### Update to latest versions:

```bash
# Install npm-check-updates
npm install -g npm-check-updates

# Check for updates
ncu

# Update package.json
ncu -u

# Install updated versions
npm install
```

---

## 💡 Pro Tips

### 1. Use VS Code Extensions:

- **Astro** - Official Astro language support
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind
- **Prettier** - Code formatting
- **ESLint** - Code linting

### 2. Keyboard Shortcuts:

- `Ctrl + C` - Stop dev server
- `Ctrl + Shift + R` - Hard refresh browser
- `Cmd/Ctrl + P` - Quick file search in VS Code

### 3. Development Best Practices:

- Commit changes frequently
- Test on multiple browsers
- Use meaningful commit messages
- Keep dependencies updated
- Document your changes

### 4. Performance Optimization:

- Optimize images before adding to `public/`
- Use WebP format for images
- Minimize custom CSS
- Leverage Tailwind's utility classes

---

## 📚 Learning Resources

### Astro:
- [Official Documentation](https://docs.astro.build)
- [Astro Tutorial](https://docs.astro.build/en/tutorial/0-introduction/)
- [Astro Discord](https://astro.build/chat)

### Tailwind CSS:
- [Official Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Tailwind Play](https://play.tailwindcss.com/)

### TypeScript:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

## 🆘 Getting Help

### If you're stuck:

1. **Check terminal output** - Error messages are helpful
2. **Check browser console** - F12 → Console tab
3. **Review documentation** - Links above
4. **Search GitHub Issues** - Someone may have had same issue
5. **Ask the team** - Don't hesitate to reach out

### Common error patterns:

- **Syntax errors** → Check file for typos
- **Import errors** → Check file paths
- **Build errors** → Run `npm run build` for details
- **Port errors** → Use different port or kill process

---

## ✅ Setup Verification Checklist

- [ ] Node.js installed (v18.14.1+)
- [ ] npm installed
- [ ] Project cloned/downloaded
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server starts (`npm run dev`)
- [ ] Website loads at http://localhost:4321
- [ ] Hot reload works (make a change, see it update)
- [ ] Build succeeds (`npm run build`)
- [ ] Preview works (`npm run preview`)

---

## 🎯 Next Steps

After local setup is complete:

1. ✅ Familiarize yourself with the codebase
2. ✅ Make your first change
3. ✅ Test thoroughly
4. ✅ Commit to Git
5. ✅ Push to GitHub
6. ✅ Deploy to Cloudflare Pages (see CLOUDFLARE-DEPLOYMENT.md)

---

**Last Updated:** January 8, 2026

**Need help?** Contact the development team or refer to the documentation links above.