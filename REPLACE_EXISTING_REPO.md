# Replace Existing Repository: Quick Guide

## Your Repository
**URL**: https://github.com/Drag-ai/drag-ai-website

✅ Remote already configured!

---

## 🚀 Push New Website (Choose One Option)

### Option 1: Clean Replace (Recommended if old site is completely different)

This will replace everything in the repository with your new website:

```bash
cd /app

# Push with force (replaces old content)
git push -f origin main
```

**Note**: Use `-f` (force) because we're replacing the old website completely.

---

### Option 2: Safe Replace (Preserves Git History)

If you want to keep the old commit history:

```bash
cd /app

# Pull old history first
git pull origin main --allow-unrelated-histories

# Resolve any conflicts (if prompted, choose to keep new files)
# Then push
git push origin main
```

---

## 🔐 Authentication

When prompted for credentials:
- **Username**: Your GitHub username (or `Drag-ai` if organization)
- **Password**: Your GitHub Personal Access Token (NOT your password)

**Don't have a token?**
1. Go to: https://github.com/settings/tokens/new
2. Note: "Drag AI Website Deployment"
3. Expiration: Your choice (e.g., 90 days)
4. Scopes: Check `repo` (full control)
5. Click "Generate token"
6. Copy the token and use it as password

---

## ✅ Verify Push

After pushing, check:
1. Go to: https://github.com/Drag-ai/drag-ai-website
2. You should see all new files:
   - `frontend/` folder
   - `README.md` (updated)
   - `CLOUDFLARE_DEPLOYMENT.md`
   - `QUICK_START.md`
   - etc.

---

## 🚀 Next: Update Cloudflare Deployment

### If You Already Have Cloudflare Pages Connected:

The site will **automatically rebuild** after you push! Just wait 3-5 minutes.

**Check deployment**:
1. Go to: https://dash.cloudflare.com/8479a22f113fabc13dab3573a62f5e03
2. Workers & Pages → `drag-ai-website` (or your project name)
3. Check "Deployments" tab
4. Latest deployment should show "Building..." then "Success"

### If This is First Time on Cloudflare:

Follow the setup in `CLOUDFLARE_DEPLOYMENT.md`:
1. Workers & Pages → Create Application → Pages → Connect to Git
2. Select repository: `Drag-ai/drag-ai-website`
3. Configure build:
   - Build command: `cd frontend && yarn install && yarn build`
   - Build output: `frontend/build`
   - Framework: Create React App
4. Add environment variable:
   - Name: `REACT_APP_WEB3FORMS_KEY`
   - Value: `af781fa2-7ab3-4154-8aee-f123f4ae54c5`
5. Save and Deploy

---

## 🆘 Troubleshooting

### Error: "Updates were rejected"
```bash
# Use force push (safe since you're replacing old site)
git push -f origin main
```

### Error: "Authentication failed"
- Ensure you're using Personal Access Token, not password
- Token needs `repo` scope
- For organization repos, ensure you have write access

### Error: "Remote contains work that you do not have"
```bash
# Pull and merge, or force push to replace
git push -f origin main  # Replaces old content
```

---

## 📋 Quick Command Summary

**Fastest path** (replaces old website):
```bash
cd /app
git push -f origin main
```

Then wait for Cloudflare to auto-deploy (if already connected) or set up Cloudflare Pages (if first time).

---

**That's it! Your new website will be live in minutes! 🎉**
