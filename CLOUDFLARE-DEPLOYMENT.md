# ☁️ Cloudflare Pages Deployment Guide

Complete step-by-step guide to deploy your Drag-AI website to Cloudflare Pages.

---

## 🌟 Why Cloudflare Pages?

- ✅ **Free tier** with unlimited bandwidth
- ✅ **Global CDN** - Fast worldwide
- ✅ **Automatic HTTPS** - SSL certificates included
- ✅ **Git integration** - Auto-deploy on push
- ✅ **Preview deployments** - Test before going live
- ✅ **Custom domains** - Use drag-ai.com
- ✅ **Zero configuration** - Works out of the box with Astro

---

## 📋 Prerequisites

Before you begin:

- [ ] Code pushed to GitHub (see GITHUB-SETUP.md)
- [ ] Cloudflare account ([Sign up free](https://dash.cloudflare.com/sign-up))
- [ ] Domain name (optional, for custom domain)
- [ ] All changes committed and pushed to GitHub

---

## 🚀 Method 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Create Cloudflare Account

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click **"Sign up"** (if you don't have an account)
3. Verify your email address
4. Log in to Cloudflare Dashboard

### Step 2: Connect GitHub Repository

1. In Cloudflare Dashboard, click **"Workers & Pages"** (left sidebar)
2. Click **"Create application"**
3. Select **"Pages"** tab
4. Click **"Connect to Git"**
5. Choose **"GitHub"**
6. Click **"Connect GitHub"**
7. Authorize Cloudflare to access your GitHub account
8. Select your repository: **`drag-ai-website`**
9. Click **"Begin setup"**

### Step 3: Configure Build Settings

Fill in the following settings:

```
Project name: drag-ai-website
Production branch: main
```

**Build settings:**

```
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
```

**Environment variables:** (Leave empty for now)

### Step 4: Deploy

1. Click **"Save and Deploy"**
2. Wait for build to complete (1-3 minutes)
3. You'll see build logs in real-time
4. Once complete, you'll get a URL like: `https://drag-ai-website.pages.dev`

### Step 5: Verify Deployment

1. Click the deployment URL
2. Test all pages:
   - Homepage: `/`
   - About: `/about`
   - Services: `/services`
   - Industries: `/industries`
   - Contact: `/contact`
   - Privacy: `/privacy`
   - Terms: `/terms`
3. Check mobile responsiveness
4. Test contact form

---

## 🌐 Method 2: Deploy via Wrangler CLI (Advanced)

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This opens a browser window to authorize.

### Step 3: Deploy

```bash
# Navigate to project directory
cd drag-ai-website

# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=drag-ai-website
```

### Step 4: Follow Prompts

- Confirm project name
- Choose production branch
- Wait for deployment

---

## 🔧 Custom Domain Setup (drag-ai.com)

### Prerequisites:

- Domain registered (drag-ai.com)
- Access to domain registrar (GoDaddy, Namecheap, etc.)

### Step 1: Add Custom Domain in Cloudflare

1. Go to your Cloudflare Pages project
2. Click **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter your domain: `drag-ai.com`
5. Click **"Continue"**

### Step 2: Configure DNS

Cloudflare will show you DNS records to add. You have two options:

#### Option A: Use Cloudflare Nameservers (Recommended)

1. In Cloudflare Dashboard, go to **"Websites"**
2. Click **"Add a site"**
3. Enter `drag-ai.com`
4. Choose **Free** plan
5. Cloudflare will show you nameservers (e.g., `ns1.cloudflare.com`)
6. Go to your domain registrar (GoDaddy, Namecheap, etc.)
7. Update nameservers to Cloudflare's nameservers
8. Wait 24-48 hours for propagation
9. Cloudflare will automatically configure DNS

#### Option B: Add CNAME Record (Faster)

If you want to keep your current nameservers:

1. Go to your domain registrar's DNS settings
2. Add a CNAME record:
   ```
   Type: CNAME
   Name: @ (or leave blank for root domain)
   Value: drag-ai-website.pages.dev
   TTL: Auto or 3600
   ```
3. Add another CNAME for www:
   ```
   Type: CNAME
   Name: www
   Value: drag-ai-website.pages.dev
   TTL: Auto or 3600
   ```
4. Save changes
5. Wait 10-60 minutes for DNS propagation

### Step 3: Verify Custom Domain

1. In Cloudflare Pages, check domain status
2. Wait for **"Active"** status
3. Visit `https://drag-ai.com`
4. Verify HTTPS works (automatic SSL)

### Step 4: Set Primary Domain

1. In Cloudflare Pages → Custom domains
2. Click **"..."** next to `drag-ai.com`
3. Select **"Set as primary domain"**
4. This redirects `drag-ai-website.pages.dev` to `drag-ai.com`

---

## 🔄 Automatic Deployments

### How it works:

1. You push code to GitHub
2. Cloudflare detects the push
3. Automatically builds and deploys
4. New version goes live in 1-3 minutes

### Configure auto-deploy:

Already configured! Every push to `main` branch triggers deployment.

### Deploy from other branches:

1. Push to a different branch (e.g., `dev`)
2. Cloudflare creates a preview deployment
3. Access at: `https://[branch-name].drag-ai-website.pages.dev`
4. Test before merging to `main`

---

## 🔍 Preview Deployments

### Create preview for pull requests:

1. Create a new branch:
   ```bash
   git checkout -b feature/new-page
   ```

2. Make changes and push:
   ```bash
   git add .
   git commit -m "Add new page"
   git push origin feature/new-page
   ```

3. Create Pull Request on GitHub

4. Cloudflare automatically creates preview deployment

5. Preview URL appears in PR comments

6. Test the preview

7. Merge PR when ready

8. Production automatically updates

---

## ⚙️ Environment Variables

### Add environment variables:

1. Go to Cloudflare Pages project
2. Click **"Settings"** → **"Environment variables"**
3. Add variables:
   ```
   Variable name: API_KEY
   Value: your-api-key-here
   Environment: Production (or Preview)
   ```
4. Click **"Save"**
5. Redeploy for changes to take effect

### Use in code:

```javascript
// Access environment variables
const apiKey = import.meta.env.API_KEY;
```

---

## 📊 Build Configuration

### Optimize build settings:

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  site: 'https://drag-ai.com',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
    },
  },
});
```

### Build command options:

```bash
# Standard build
npm run build

# Build with specific base path
npm run build -- --base=/subpath/

# Build with custom output directory
npm run build -- --outDir=custom-dist
```

---

## 🐛 Troubleshooting

### Problem: Build fails

**Check build logs:**
1. Go to Cloudflare Pages project
2. Click **"Deployments"**
3. Click failed deployment
4. Review build logs

**Common solutions:**
```bash
# Ensure build works locally first
npm run build

# Check for errors
npm run build 2>&1 | tee build.log

# Clear cache and rebuild
rm -rf node_modules dist .astro
npm install
npm run build
```

### Problem: 404 errors on routes

**Solution:** Astro static sites work automatically with Cloudflare Pages. If you see 404s:

1. Verify files exist in `dist/` after build
2. Check `astro.config.mjs` has `output: 'static'`
3. Ensure build output directory is `dist`

### Problem: Custom domain not working

**Check DNS:**
```bash
# Check DNS propagation
nslookup drag-ai.com

# Or use online tool
# https://dnschecker.org
```

**Solutions:**
- Wait 24-48 hours for full propagation
- Clear browser cache
- Try incognito/private mode
- Verify CNAME records are correct

### Problem: Old version still showing

**Clear cache:**
1. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear Cloudflare cache:
   - Go to Cloudflare Dashboard
   - Click **"Caching"** → **"Configuration"**
   - Click **"Purge Everything"**

### Problem: Build takes too long

**Optimize:**
1. Reduce image sizes
2. Minimize dependencies
3. Use build cache:
   ```bash
   # In Cloudflare Pages settings
   Enable: "Build cache"
   ```

---

## 📈 Performance Optimization

### Enable Cloudflare features:

1. **Auto Minify:**
   - Go to **"Speed"** → **"Optimization"**
   - Enable: JavaScript, CSS, HTML

2. **Brotli Compression:**
   - Automatically enabled

3. **HTTP/3:**
   - Go to **"Network"**
   - Enable HTTP/3

4. **Rocket Loader:**
   - Go to **"Speed"** → **"Optimization"**
   - Enable Rocket Loader (optional)

### Image optimization:

```astro
<!-- Use Cloudflare Image Resizing -->
<img 
  src="/cdn-cgi/image/width=800,quality=85/logo.jpg"
  alt="Logo"
/>
```

---

## 🔒 Security Best Practices

### 1. Enable Security Headers:

Create `_headers` file in `public/` directory:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### 2. Configure CSP (Content Security Policy):

Add to `_headers`:

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://web3forms.com; style-src 'self' 'unsafe-inline';
```

### 3. Enable HSTS:

In Cloudflare Dashboard:
- Go to **"SSL/TLS"** → **"Edge Certificates"**
- Enable **"Always Use HTTPS"**
- Enable **"HSTS"**

---

## 📊 Analytics Setup

### Cloudflare Web Analytics (Free):

1. Go to Cloudflare Dashboard
2. Click **"Analytics"** → **"Web Analytics"**
3. Click **"Add a site"**
4. Enter `drag-ai.com`
5. Copy the JavaScript snippet
6. Add to `src/layouts/Layout.astro`:

```astro
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

### Google Analytics (Optional):

Add to `src/layouts/Layout.astro`:

```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 Rollback Deployment

### If something goes wrong:

1. Go to Cloudflare Pages project
2. Click **"Deployments"**
3. Find previous working deployment
4. Click **"..."** → **"Rollback to this deployment"**
5. Confirm rollback
6. Previous version goes live immediately

---

## 📝 Deployment Checklist

Before deploying to production:

- [ ] All pages tested locally
- [ ] Build succeeds: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] SEO tags present
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] No console errors
- [ ] Code committed to GitHub
- [ ] Environment variables set (if needed)

---

## 🎯 Post-Deployment Tasks

After successful deployment:

1. **Test production site:**
   - Visit all pages
   - Test forms
   - Check mobile view
   - Verify HTTPS

2. **Set up monitoring:**
   - Enable Cloudflare Analytics
   - Set up uptime monitoring
   - Configure error alerts

3. **Update DNS:**
   - Point domain to Cloudflare
   - Verify SSL certificate

4. **Submit to search engines:**
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap

5. **Set up redirects (if needed):**
   Create `_redirects` file in `public/`:
   ```
   /old-page /new-page 301
   /blog/* /news/:splat 301
   ```

---

## 📞 Support Resources

### Cloudflare:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [Cloudflare Status](https://www.cloudflarestatus.com/)

### Astro:
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Astro Discord](https://astro.build/chat)

### Need Help?
- Check deployment logs first
- Review error messages
- Search Cloudflare Community
- Contact Cloudflare Support (paid plans)

---

## ✅ Deployment Verification

After deployment, verify:

- [ ] Site loads at production URL
- [ ] Custom domain works (if configured)
- [ ] HTTPS enabled (green padlock)
- [ ] All pages accessible
- [ ] Forms work correctly
- [ ] Images display properly
- [ ] Mobile responsive
- [ ] Fast load times (< 3 seconds)
- [ ] No console errors
- [ ] Analytics tracking (if enabled)

---

## 🎉 Success!

Your Drag-AI website is now live on Cloudflare Pages!

**Production URL:** `https://drag-ai.com` (or `https://drag-ai-website.pages.dev`)

**Next steps:**
1. Share with your team
2. Start marketing
3. Monitor analytics
4. Gather feedback
5. Iterate and improve

---

**Last Updated:** January 8, 2026

**Questions?** Refer to the documentation links above or contact your development team.