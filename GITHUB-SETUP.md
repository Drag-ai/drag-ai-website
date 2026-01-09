# 📦 GitHub Repository Setup Guide

Complete guide to upload and manage your Drag-AI website code on GitHub.

---

## 📋 Prerequisites

- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- GitHub account ([Sign up](https://github.com/signup))
- Terminal/Command Prompt access

---

## 🚀 Step 1: Create GitHub Repository

### Option A: Via GitHub Website

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in repository details:
   - **Repository name**: `drag-ai-website` (or your preferred name)
   - **Description**: "Professional AI consulting company website built with Astro"
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Option B: Via GitHub CLI (if installed)

```bash
gh repo create drag-ai-website --public --source=. --remote=origin
```

---

## 📁 Step 2: Files and Folders to Include

### ✅ Files/Folders TO INCLUDE:

```
drag-ai-website/
├── .gitignore              ✅ (Already created - excludes unnecessary files)
├── astro.config.mjs        ✅ (Astro configuration)
├── package.json            ✅ (Dependencies and scripts)
├── package-lock.json       ✅ (Dependency lock file)
├── tailwind.config.mjs     ✅ (Tailwind CSS config)
├── tsconfig.json           ✅ (TypeScript config)
├── README.md               ✅ (Project documentation)
├── DEPLOYMENT.md           ✅ (Deployment guide)
├── GITHUB-SETUP.md         ✅ (This file)
├── LOCAL-SETUP.md          ✅ (Local development guide)
├── SEO-SETUP.md            ✅ (SEO documentation)
├── public/                 ✅ (Static assets)
│   ├── favicon.svg
│   ├── logo.jpg
│   ├── robots.txt
│   └── og-image-template.html
└── src/                    ✅ (Source code)
    ├── components/
    ├── layouts/
    ├── pages/
    └── styles/
```

### ❌ Files/Folders TO EXCLUDE (automatically via .gitignore):

```
node_modules/               ❌ (Dependencies - will be installed via npm)
dist/                       ❌ (Build output - generated during build)
.astro/                     ❌ (Astro cache)
.env                        ❌ (Environment variables - keep secret)
.DS_Store                   ❌ (Mac OS files)
*.log                       ❌ (Log files)
```

---

## 🔧 Step 3: Initialize Git and Push to GitHub

### 1. Navigate to your project directory:

```bash
cd /Users/deepesh/Documents/additionla_exp/drag/drag-ai-website
```

### 2. Initialize Git repository (if not already done):

```bash
git init
```

### 3. Add all files to Git:

```bash
git add .
```

### 4. Create your first commit:

```bash
git commit -m "Initial commit: Drag-AI website with Astro, Tailwind CSS, and complete pages"
```

### 5. Add GitHub remote (replace with your repository URL):

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/drag-ai-website.git
```

**Example:**
```bash
git remote add origin https://github.com/deepeshagrawal/drag-ai-website.git
```

### 6. Verify remote was added:

```bash
git remote -v
```

### 7. Push code to GitHub:

```bash
# For first push
git branch -M main
git push -u origin main
```

---

## 🔄 Step 4: Future Updates

After making changes to your code:

```bash
# 1. Check what files changed
git status

# 2. Add changed files
git add .

# 3. Commit with a descriptive message
git commit -m "Description of changes"

# 4. Push to GitHub
git push
```

### Example workflow:

```bash
# After updating the homepage
git add src/pages/index.astro
git commit -m "Update homepage hero section with new content"
git push

# After adding a new feature
git add .
git commit -m "Add blog section with pagination"
git push
```

---

## 🌿 Step 5: Working with Branches (Optional but Recommended)

### Create a development branch:

```bash
# Create and switch to dev branch
git checkout -b dev

# Make changes, then commit
git add .
git commit -m "Add new feature"

# Push dev branch to GitHub
git push -u origin dev
```

### Merge dev into main:

```bash
# Switch to main branch
git checkout main

# Merge dev into main
git merge dev

# Push updated main
git push
```

---

## 🔐 Step 6: Protect Sensitive Information

### Never commit these files:

1. **Environment variables** (`.env` files)
2. **API keys** (already in .gitignore)
3. **Database credentials**
4. **Private keys**

### If you accidentally committed sensitive data:

```bash
# Remove file from Git but keep locally
git rm --cached .env

# Commit the removal
git commit -m "Remove .env from repository"

# Push changes
git push
```

**Important:** Change any exposed credentials immediately!

---

## 📊 Step 7: Repository Settings (Recommended)

### On GitHub website:

1. Go to your repository
2. Click **"Settings"** tab
3. Configure:
   - **Description**: Add project description
   - **Website**: Add your deployed URL (after deployment)
   - **Topics**: Add tags like `astro`, `tailwindcss`, `ai-consulting`, `website`
   - **Branch protection**: Protect main branch (Settings → Branches)

---

## 🤝 Step 8: Collaboration (If working with team)

### Add collaborators:

1. Go to repository **Settings** → **Collaborators**
2. Click **"Add people"**
3. Enter GitHub username or email
4. Choose permission level (Write, Maintain, or Admin)

### Clone repository (for team members):

```bash
git clone https://github.com/YOUR_USERNAME/drag-ai-website.git
cd drag-ai-website
npm install
```

---

## 📝 Common Git Commands Reference

```bash
# Check status
git status

# View commit history
git log --oneline

# View changes
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- filename

# Pull latest changes
git pull

# Create new branch
git checkout -b branch-name

# Switch branches
git checkout branch-name

# Delete branch
git branch -d branch-name

# View all branches
git branch -a
```

---

## 🆘 Troubleshooting

### Problem: "Permission denied (publickey)"

**Solution:** Set up SSH key or use HTTPS URL

```bash
# Use HTTPS instead
git remote set-url origin https://github.com/YOUR_USERNAME/drag-ai-website.git
```

### Problem: "Repository not found"

**Solution:** Check repository URL and permissions

```bash
# Verify remote URL
git remote -v

# Update if incorrect
git remote set-url origin CORRECT_URL
```

### Problem: Merge conflicts

**Solution:** Resolve conflicts manually

```bash
# Pull latest changes
git pull

# Open conflicted files, resolve conflicts
# Look for <<<<<<< HEAD markers

# After resolving
git add .
git commit -m "Resolve merge conflicts"
git push
```

### Problem: Large files error

**Solution:** Use Git LFS for large files

```bash
# Install Git LFS
git lfs install

# Track large files
git lfs track "*.jpg"
git lfs track "*.png"

# Commit .gitattributes
git add .gitattributes
git commit -m "Add Git LFS tracking"
```

---

## ✅ Verification Checklist

- [ ] Git initialized in project directory
- [ ] .gitignore file present and configured
- [ ] GitHub repository created
- [ ] Remote origin added correctly
- [ ] Initial commit created
- [ ] Code pushed to GitHub successfully
- [ ] Repository visible on GitHub website
- [ ] README.md displays correctly
- [ ] No sensitive files committed

---

## 🔗 Useful Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Astro Documentation](https://docs.astro.build)

---

## 📞 Need Help?

If you encounter issues:

1. Check GitHub's [Status Page](https://www.githubstatus.com/)
2. Review [GitHub Community](https://github.community/)
3. Contact your development team
4. Review error messages carefully

---

**Last Updated:** January 8, 2026