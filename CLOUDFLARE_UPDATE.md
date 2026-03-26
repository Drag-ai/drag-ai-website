# ⚙️ Cloudflare Pages Build Settings Update

Since you're replacing an existing website, you may need to update Cloudflare Pages build settings.

---

## 🔍 Check Current Cloudflare Setup

1. Go to: https://dash.cloudflare.com/8479a22f113fabc13dab3573a62f5e03
2. Navigate to: **Workers & Pages**
3. Find your project (likely named `drag-ai-website` or similar)
4. Click on it

---

## ⚙️ Required Build Settings

Your NEW website requires these settings:

```
Framework preset:      Create React App
Build command:         cd frontend && yarn install && yarn build
Build output directory: frontend/build
Root directory:        (leave empty or "/")
Node version:          16 or higher (default is fine)
```

---

## 🔄 How to Update Settings

### If Project Already Exists:

1. In your Cloudflare Pages project, go to **Settings** tab
2. Scroll to **Build & deployments** section
3. Click **Edit** next to "Build settings"
4. Update to the settings above
5. Click **Save**

Then trigger a new deployment:
- Go to **Deployments** tab
- Click **Retry deployment** (or push new commit to trigger build)

### If Project Doesn't Exist Yet:

Follow the full setup in `CLOUDFLARE_DEPLOYMENT.md`:
1. Workers & Pages → Create Application → Pages
2. Connect to Git → Select `Drag-ai/drag-ai-website`
3. Use the build settings above
4. Add environment variable: `REACT_APP_WEB3FORMS_KEY`

---

## 🔐 Environment Variables

**CRITICAL**: Ensure this environment variable is set:

```
Variable name:  REACT_APP_WEB3FORMS_KEY
Value:          af781fa2-7ab3-4154-8aee-f123f4ae54c5
```

**How to add/update**:
1. In your Pages project → **Settings** tab
2. Scroll to **Environment variables**
3. Click **Add variable** or **Edit** if exists
4. Add the variable above
5. Select **Production** and **Preview** (both)
6. Save

**⚠️ Important**: After adding/changing environment variables, you must **trigger a new deployment** for changes to take effect.

---

## 🎯 Project Structure Differences

### Old Website (if it was different):
- May have been different framework
- Different build commands
- Different folder structure

### New Website:
- React SPA in `/frontend` folder
- Uses Create React App
- Requires `cd frontend` before build
- Output is in `frontend/build`

**This is why build settings MUST be updated!**

---

## ✅ Verification After Deployment

Once deployed, test these features:

### Navigation Test:
- [ ] Can you access all pages? (Home, About, Services, Industries, Careers, Contact)
- [ ] Do navigation links work?
- [ ] Can you directly access `/careers` URL?

### Functionality Test:
- [ ] Does the neural network animation appear?
- [ ] Does the contact form work?
- [ ] Are images loading?
- [ ] Is styling correct (purple/pink theme)?

### Mobile Test:
- [ ] Does site work on mobile?
- [ ] Is it responsive?

### 404 Test:
- [ ] Refresh page at `/careers` - does it work or show 404?
  - If 404: Check that `_redirects` file was included in build
  - The file is at: `frontend/public/_redirects`

---

## 🆘 Common Issues After Deployment

### Issue 1: 404 on Page Refresh
**Cause**: SPA routing not configured
**Fix**: Ensure `frontend/public/_redirects` exists with:
```
/*    /index.html   200
```
Then redeploy.

### Issue 2: Build Fails - "command not found"
**Cause**: Build command doesn't navigate to frontend folder
**Fix**: Ensure build command starts with `cd frontend &&`

### Issue 3: Contact Form Doesn't Work
**Cause**: Missing environment variable
**Fix**: Add `REACT_APP_WEB3FORMS_KEY` to environment variables and redeploy

### Issue 4: Site Shows Old Content
**Cause**: Cloudflare cache
**Fix**: 
- Go to your domain in Cloudflare
- **Caching** → **Configuration** → **Purge Everything**
- Or wait 5-10 minutes for cache to clear

---

## 📊 Build Logs

If build fails, check logs:
1. Go to **Deployments** tab
2. Click on the failed deployment
3. View **Build logs**
4. Common errors:
   - Wrong directory path
   - Missing dependencies
   - Node version issues

---

## 🔗 Quick Links

- **Your Cloudflare Dashboard**: https://dash.cloudflare.com/8479a22f113fabc13dab3573a62f5e03
- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Build Configuration Guide**: https://developers.cloudflare.com/pages/platform/build-configuration/

---

**After updating build settings and pushing to GitHub, your new website should deploy successfully! 🚀**
