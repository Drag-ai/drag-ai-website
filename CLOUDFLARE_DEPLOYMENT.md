# Deployment Guide: Drag AI Website to Cloudflare Pages

## Prerequisites
✅ Code pushed to GitHub (see GITHUB_GUIDE.md)
✅ Cloudflare account with access to dashboard
✅ Web3Forms access key (currently: `af781fa2-7ab3-4154-8aee-f123f4ae54c5`)

---

## Step-by-Step Cloudflare Pages Deployment

### 1. Access Cloudflare Dashboard
- Go to: https://dash.cloudflare.com/8479a22f113fabc13dab3573a62f5e03
- Click on **Workers & Pages** in the left sidebar

### 2. Create New Pages Project
- Click **Create Application** button
- Select **Pages** tab
- Click **Connect to Git**

### 3. Connect GitHub Repository
- **Authorize Cloudflare** to access your GitHub account (if first time)
- **Select your repository** from the list (e.g., `your-username/drag-ai-website`)
- Click **Begin setup**

### 4. Configure Build Settings

**Project name**: `drag-ai` (or your preferred name)

**Production branch**: `main` (or `master`)

**Framework preset**: Select **"Create React App"** from dropdown

**Build settings**:
```
Build command:         cd frontend && yarn install && yarn build
Build output directory: frontend/build
Root directory:        (leave empty or set to "/")
```

**Environment variables** (click "Add variable"):
```
Name:  REACT_APP_WEB3FORMS_KEY
Value: af781fa2-7ab3-4154-8aee-f123f4ae54c5
```

### 5. Deploy
- Click **Save and Deploy**
- Wait 2-5 minutes for the build to complete
- Your site will be live at: `https://drag-ai-xxx.pages.dev`

### 6. Custom Domain (Optional)
After deployment:
- Go to your Pages project → **Custom domains**
- Click **Set up a custom domain**
- Enter your domain (e.g., `drag-ai.com`)
- Follow DNS configuration instructions

---

## Post-Deployment Testing Checklist

Test the following on your live site:

- [ ] Homepage loads correctly
- [ ] All navigation links work (Home, About, Services, Industries, Careers, Contact)
- [ ] Neural network background animation displays
- [ ] Contact form submission works
- [ ] Footer links navigate properly
- [ ] Mobile responsive design works
- [ ] Direct URL access works (e.g., `yourdomain.com/careers`)

---

## Troubleshooting

### Issue: 404 on Page Refresh
**Solution**: The `_redirects` file should already be in `frontend/public/`. Verify it contains:
```
/*    /index.html   200
```

### Issue: Build Fails
**Common causes**:
1. Wrong build directory path → Use `frontend/build`
2. Missing dependencies → Build command should include `yarn install`
3. Node version mismatch → Cloudflare uses Node 16+ by default

**Check build logs** in Cloudflare Dashboard → Your Project → Deployments

### Issue: Environment Variables Not Working
- Ensure `REACT_APP_` prefix is used (React requirement)
- Redeploy after adding environment variables
- Variables are available at build time only for React apps

### Issue: Contact Form Not Working
- Verify Web3Forms key is correct in environment variables
- Check browser console for API errors
- Test form with valid email format

---

## Continuous Deployment

Once connected to GitHub, Cloudflare Pages will:
- **Auto-deploy** on every push to `main` branch
- Create **preview deployments** for pull requests
- Maintain **deployment history** with rollback capability

To update your site:
```bash
git add .
git commit -m "Update website"
git push origin main
```

Cloudflare will automatically rebuild and deploy within minutes.

---

## Alternative: Deploy via Wrangler CLI

If you prefer command-line deployment:

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the frontend
cd /path/to/your/project/frontend
yarn build

# Deploy to Cloudflare Pages
wrangler pages deploy build --project-name=drag-ai

# Follow prompts to create project if first time
```

---

## Monitoring & Analytics

Enable analytics in Cloudflare Dashboard:
- Go to your Pages project → **Analytics**
- View page views, bandwidth, and performance metrics
- Set up alerts for deployment failures

---

## Cost
Cloudflare Pages is **free** for:
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time

**Enterprise features** (paid):
- Custom SSL certificates
- Advanced DDoS protection
- Priority support

---

## Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [React Router & SPAs on Pages](https://developers.cloudflare.com/pages/platform/serving-pages/#single-page-app-spa-rendering)
- [Web3Forms Docs](https://docs.web3forms.com/)

---

**Need help?** Contact info@drag-ai.com
