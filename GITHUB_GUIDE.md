# GitHub Setup Guide: Push Drag AI Website to GitHub

## Prerequisites
✅ GitHub account (create at https://github.com if you don't have one)
✅ Git installed (already configured in your environment)

---

## Option 1: Using GitHub Web Interface (Easiest)

### Step 1: Create a New Repository on GitHub
1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `drag-ai-website` (or your preferred name)
   - **Description**: `Premium Agentic AI consulting website for Drag AI`
   - **Visibility**: Choose **Public** or **Private**
   - ❌ **Do NOT** initialize with README, .gitignore, or license (we already have these)
3. Click **Create repository**

### Step 2: Copy Your Repository URL
After creation, you'll see a page with commands. Copy the repository URL:
- HTTPS: `https://github.com/YOUR-USERNAME/drag-ai-website.git`
- SSH: `git@github.com:YOUR-USERNAME/drag-ai-website.git`

### Step 3: Push Your Code from Terminal

Run these commands in your terminal:

```bash
# Navigate to project directory
cd /app

# Configure git user (if not already done)
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Check current status
git status

# Stage all files
git add .

# Commit changes
git commit -m "Initial commit: Drag AI premium website with all pages"

# Add GitHub remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/drag-ai-website.git

# Push to GitHub
git push -u origin main
```

**Note**: If your default branch is `master` instead of `main`, use:
```bash
git branch -M main  # Rename to main
git push -u origin main
```

### Step 4: Authenticate
When prompted:
- **For HTTPS**: Enter your GitHub username and **Personal Access Token** (not password)
  - Create token at: https://github.com/settings/tokens/new
  - Required scopes: `repo`
- **For SSH**: Use SSH keys (requires prior setup)

---

## Option 2: Using GitHub CLI (gh)

If you have GitHub CLI installed:

```bash
cd /app

# Login to GitHub
gh auth login

# Create repository and push
gh repo create drag-ai-website --public --source=. --push

# Or for private repo
gh repo create drag-ai-website --private --source=. --push
```

---

## Verify Your Code is on GitHub

1. Go to your repository URL: `https://github.com/YOUR-USERNAME/drag-ai-website`
2. You should see all your files including:
   - `frontend/` folder
   - `backend/` folder
   - `README.md`
   - `CLOUDFLARE_DEPLOYMENT.md`
   - `.gitignore`

---

## Important: Create a Personal Access Token (PAT)

Since GitHub no longer accepts passwords for Git operations:

### Steps to Create PAT:
1. Go to: https://github.com/settings/tokens/new
2. **Note**: `Drag AI Deployment`
3. **Expiration**: Choose duration (90 days, 1 year, or no expiration)
4. **Scopes**: Check `repo` (full control of private repositories)
5. Click **Generate token**
6. **Copy the token immediately** (you won't see it again!)

### Use the Token:
When Git asks for password during `git push`:
- Username: `your-github-username`
- Password: `paste-your-personal-access-token`

---

## Common Git Commands for Future Updates

### Check Current Status
```bash
cd /app
git status
```

### Commit and Push Changes
```bash
# Stage specific files
git add frontend/src/pages/NewPage.js

# Or stage all changes
git add .

# Commit with message
git commit -m "Add new feature: XYZ"

# Push to GitHub
git push origin main
```

### View Commit History
```bash
git log --oneline -10
```

### Create a New Branch
```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Push branch to GitHub
git push -u origin feature/new-feature
```

### Switch Between Branches
```bash
git checkout main
git checkout feature/new-feature
```

---

## Protect Your Secrets

The `.gitignore` file already prevents sensitive files from being committed:
- `.env` files (environment variables)
- `node_modules/` (dependencies)
- Build outputs
- Logs

**Always verify** before pushing:
```bash
git status  # Check what will be committed
```

**If you accidentally commit secrets**:
1. Remove from git: `git rm --cached frontend/.env`
2. Commit: `git commit -m "Remove .env file"`
3. Push: `git push origin main`
4. **Rotate/change the exposed secrets immediately**

---

## Troubleshooting

### Error: "remote origin already exists"
```bash
# Remove old remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR-USERNAME/drag-ai-website.git
```

### Error: "failed to push some refs"
```bash
# Pull latest changes first
git pull origin main --rebase

# Then push
git push origin main
```

### Error: "Permission denied (publickey)"
Switch to HTTPS instead of SSH:
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/drag-ai-website.git
```

### Large File Warning
If Git warns about large files:
```bash
# Check file sizes
du -sh frontend/node_modules

# These should already be ignored by .gitignore
# Verify: cat .gitignore
```

---

## Next Steps

After pushing to GitHub:
1. ✅ Verify all files are on GitHub
2. ✅ Proceed to Cloudflare Pages deployment (see `CLOUDFLARE_DEPLOYMENT.md`)
3. ✅ Set up branch protection rules (optional)
4. ✅ Enable GitHub Actions for CI/CD (optional)

---

**Need help?** Contact info@drag-ai.com
