# Deployment Guide for Drag-AI Website

## 🚀 Quick Start Deployment

### Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Git repository set up
- [ ] Domain name ready (drag-ai.com)
- [ ] Web3Forms account created (for contact form)

---

## 📋 Pre-Deployment Steps

### 1. Update Contact Form

**Important**: Replace the Web3Forms access key in the contact form.

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up (free)
3. Create a new form
4. Copy your access key
5. Open `src/pages/contact.astro`
6. Find line 62: `<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">`
7. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

### 2. Verify Content

Double-check these files for accuracy:
- [ ] Company information in `src/components/Footer.astro`
- [ ] Founder bios in `src/pages/about.astro`
- [ ] Contact details in `src/pages/contact.astro`
- [ ] Logo in `public/logo.jpg`

### 3. Test Locally

```bash
# Install dependencies
npm install

# Build production version
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` and test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form submits (test with real email)
- [ ] Mobile responsiveness
- [ ] Images load properly

---

## 🌐 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

**Best for**: Production deployment with global CDN

#### Step-by-Step:

1. **Create Cloudflare Account**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Sign up (free tier available)

2. **Connect Git Repository**
   - Click "Create a project"
   - Connect GitHub/GitLab
   - Select `drag-ai-website` repository
   - Authorize access

3. **Configure Build Settings**
   ```
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   Environment variables: (none needed)
   Node version: 18 or higher
   ```

4. **Deploy**
   - Click "Save and Deploy"
   - Wait 2-3 minutes for build
   - Site live at `<project-name>.pages.dev`

5. **Add Custom Domain**
   - Go to "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter `drag-ai.com`
   - Add DNS records as instructed:
     ```
     Type: CNAME
     Name: @
     Target: <project-name>.pages.dev
     ```
   - Wait for DNS propagation (5-30 minutes)
   - SSL certificate auto-provisioned

6. **Configure www Subdomain** (Optional)
   - Add another custom domain: `www.drag-ai.com`
   - Add DNS record:
     ```
     Type: CNAME
     Name: www
     Target: <project-name>.pages.dev
     ```

#### Automatic Deployments

- **Production**: Push to `main` branch
- **Preview**: Push to any other branch
- **Rollback**: Click "Rollback" in Cloudflare dashboard

#### Environment Variables (if needed)

Go to Settings → Environment variables:
```
NODE_VERSION=18
```

---

### Option 2: Vercel

**Best for**: Next.js-style deployment with preview URLs

#### Step-by-Step:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd drag-ai-website
   vercel
   ```

4. **Follow Prompts**
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - Project name? drag-ai-website
   - Directory? ./
   - Override settings? No

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

6. **Add Custom Domain**
   - Go to Vercel dashboard
   - Select project
   - Settings → Domains
   - Add `drag-ai.com`
   - Configure DNS as instructed

---

### Option 3: Netlify

**Best for**: Simple drag-and-drop deployment

#### Method A: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd drag-ai-website
   npm run build
   netlify deploy --prod
   ```

4. **Add Custom Domain**
   - Go to Netlify dashboard
   - Site settings → Domain management
   - Add custom domain: `drag-ai.com`
   - Configure DNS

#### Method B: Drag & Drop

1. **Build Site**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag `dist/` folder
   - Wait for deployment

3. **Add Custom Domain**
   - Click on site
   - Domain settings → Add custom domain

---

### Option 4: GitHub Pages

**Best for**: Free hosting with GitHub

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Update astro.config.mjs**
   ```javascript
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/drag-ai-website',
   });
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository settings
   - Pages → Source: gh-pages branch
   - Save

---

## 🔧 Post-Deployment Configuration

### 1. DNS Configuration

For `drag-ai.com`:

**Cloudflare DNS** (if using Cloudflare Pages):
```
Type: CNAME
Name: @
Target: <project-name>.pages.dev
Proxy: Enabled (orange cloud)

Type: CNAME
Name: www
Target: <project-name>.pages.dev
Proxy: Enabled (orange cloud)
```

**Other DNS Providers**:
```
Type: A
Name: @
Value: (Get from hosting provider)

Type: CNAME
Name: www
Value: (Get from hosting provider)
```

### 2. SSL Certificate

- **Cloudflare Pages**: Automatic (Let's Encrypt)
- **Vercel**: Automatic (Let's Encrypt)
- **Netlify**: Automatic (Let's Encrypt)

Wait 5-10 minutes for SSL provisioning.

### 3. Verify Deployment

Check these URLs:
- [ ] https://drag-ai.com/ (loads correctly)
- [ ] https://www.drag-ai.com/ (redirects to main domain)
- [ ] https://drag-ai.com/about (About page works)
- [ ] https://drag-ai.com/contact (Contact form works)
- [ ] https://drag-ai.com/industries (Industries page works)
- [ ] https://drag-ai.com/services (Services page works)

### 4. Test Contact Form

1. Go to https://drag-ai.com/contact
2. Fill out form with test data
3. Submit
4. Check email for submission
5. Verify Web3Forms dashboard shows submission

### 5. Performance Testing

Run Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop" or "Mobile"
4. Click "Generate report"

Expected scores:
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 100

---

## 📊 Monitoring & Analytics

### Google Analytics (Optional)

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create account and property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Website**
   - Open `src/layouts/Layout.astro`
   - Add before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Redeploy**
   ```bash
   git add .
   git commit -m "Add Google Analytics"
   git push
   ```

### Plausible Analytics (Privacy-Friendly Alternative)

1. **Sign up** at [Plausible](https://plausible.io/)
2. **Add site**: drag-ai.com
3. **Add script** to `src/layouts/Layout.astro`:
   ```html
   <script defer data-domain="drag-ai.com" src="https://plausible.io/js/script.js"></script>
   ```

---

## 🔄 Continuous Deployment

### Automatic Deployments

Once connected to Git:

1. **Make changes** locally
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update content"
   ```
3. **Push to GitHub**:
   ```bash
   git push origin main
   ```
4. **Automatic deployment** triggers
5. **Live in 2-3 minutes**

### Branch Deployments

- `main` branch → Production (drag-ai.com)
- Other branches → Preview URLs
- Pull requests → Preview deployments

---

## 🐛 Troubleshooting

### Build Fails

**Error**: "Module not found"
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error**: "Out of memory"
```bash
# Solution: Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Site Not Loading

1. **Check DNS propagation**:
   - Visit [DNS Checker](https://dnschecker.org/)
   - Enter `drag-ai.com`
   - Verify CNAME records

2. **Clear browser cache**:
   - Chrome: Ctrl+Shift+Delete
   - Select "Cached images and files"
   - Clear data

3. **Check deployment logs**:
   - Go to hosting dashboard
   - View deployment logs
   - Look for errors

### Contact Form Not Working

1. **Verify Web3Forms key**:
   - Check `src/pages/contact.astro`
   - Ensure key is correct

2. **Test in incognito mode**:
   - Browser extensions may block form

3. **Check browser console**:
   - F12 → Console tab
   - Look for JavaScript errors

### SSL Certificate Issues

**Error**: "Not Secure" warning

1. **Wait 10-15 minutes** for SSL provisioning
2. **Force HTTPS**:
   - Cloudflare: SSL/TLS → Always Use HTTPS
   - Vercel: Automatic
   - Netlify: Automatic

---

## 📞 Support

### Need Help?

- **Email**: info@drag-ai.com
- **Phone**: +91-8305020077
- **Documentation**: See README.md

### Hosting Support

- **Cloudflare**: https://community.cloudflare.com/
- **Vercel**: https://vercel.com/support
- **Netlify**: https://answers.netlify.com/

---

## ✅ Deployment Checklist

### Pre-Deployment
- [ ] Update Web3Forms access key
- [ ] Verify all content is correct
- [ ] Test locally (`npm run build && npm run preview`)
- [ ] Check all links work
- [ ] Test contact form
- [ ] Verify mobile responsiveness

### Deployment
- [ ] Choose hosting provider
- [ ] Connect Git repository
- [ ] Configure build settings
- [ ] Deploy to production
- [ ] Add custom domain (drag-ai.com)
- [ ] Configure DNS records
- [ ] Wait for SSL certificate

### Post-Deployment
- [ ] Test all pages load
- [ ] Verify contact form works
- [ ] Run Lighthouse audit
- [ ] Check mobile version
- [ ] Test on different browsers
- [ ] Set up analytics (optional)
- [ ] Monitor for errors

### Ongoing
- [ ] Regular content updates
- [ ] Monitor form submissions
- [ ] Check analytics
- [ ] Update dependencies monthly
- [ ] Backup content regularly

---

**Deployment Complete! 🎉**

Your Drag-AI website is now live at https://drag-ai.com/

For questions or issues, contact: info@drag-ai.com