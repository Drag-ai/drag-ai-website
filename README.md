# Drag-AI Website

Professional AI consulting and services website built with Astro 4+, Tailwind CSS, and TypeScript.

## 🚀 Live Site

- **Production**: https://drag-ai.com
- **Staging**: (To be configured)

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Content Management](#content-management)
- [SEO & Performance](#seo--performance)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This is a static website for Drag-AI, an AI consulting and services company. The site features:

- **Homepage** with hero section, benefits, industries, and process
- **About Page** with founder bios and company values
- **Services Page** with detailed service offerings and pricing
- **Industries Pages** (7 specialized industry solutions)
- **Contact Page** with lead capture form
- **Responsive Design** optimized for all devices
- **SEO Optimized** with meta tags, structured data, and sitemap
- **Fast Performance** (Lighthouse score 95+)

## 🛠️ Tech Stack

### Core Technologies

- **Framework**: [Astro 4+](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS 4+](https://tailwindcss.com) - Utility-first CSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Package Manager**: npm (can use pnpm or yarn)

### Key Features

- **Static Site Generation (SSG)** - Pre-rendered HTML for maximum performance
- **Zero JavaScript by Default** - Only loads JS where needed
- **SEO Optimized** - Built-in sitemap, meta tags, and structured data
- **Mobile-First Design** - Responsive across all devices
- **Form Handling** - Web3Forms integration for contact form

### Deployment

- **Recommended**: [Cloudflare Pages](https://pages.cloudflare.com/) (Free tier)
- **Alternatives**: Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
drag-ai-website/
├── public/
│   ├── logo.jpg                 # Company logo
│   └── favicon.svg              # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro         # Navigation header
│   │   └── Footer.astro         # Site footer
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── about.astro          # About page
│   │   ├── contact.astro        # Contact page
│   │   ├── services.astro       # Services page
│   │   └── industries/
│   │       ├── index.astro      # Industries overview
│   │       └── construction.astro # Construction industry page
│   └── styles/
│       └── global.css           # Global styles & Tailwind
├── astro.config.mjs             # Astro configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ (or pnpm/yarn)
- **Git** for version control

### Installation

1. **Clone the repository** (if using Git):
   ```bash
   git clone <repository-url>
   cd drag-ai-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   Navigate to `http://localhost:4321`

## 💻 Development

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

### Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes** to files in `src/`
3. **Hot reload** automatically updates browser
4. **Test changes** in browser
5. **Commit changes** to Git

### Adding New Pages

1. Create new `.astro` file in `src/pages/`
2. Import Layout and components:
   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   import Header from '../components/Header.astro';
   import Footer from '../components/Footer.astro';
   ---

   <Layout title="Page Title">
     <Header />
     <!-- Your content here -->
     <Footer />
   </Layout>
   ```

3. Page will be available at `/filename` (e.g., `pricing.astro` → `/pricing`)

### Styling Guidelines

- Use **Tailwind utility classes** for styling
- Custom styles in `src/styles/global.css`
- Follow **mobile-first** approach
- Use **semantic HTML** for accessibility

## 🚀 Deployment

### Option 1: Cloudflare Pages (Recommended)

**Why Cloudflare Pages?**
- ✅ Free tier with unlimited bandwidth
- ✅ Global CDN (300+ locations)
- ✅ Automatic HTTPS
- ✅ Git integration (auto-deploy on push)
- ✅ Preview deployments for branches

**Deployment Steps:**

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Sign up** at [Cloudflare Pages](https://pages.cloudflare.com/)

3. **Connect Git repository**:
   - Click "Create a project"
   - Connect your GitHub/GitLab account
   - Select the repository

4. **Configure build settings**:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 or higher

5. **Deploy**:
   - Click "Save and Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Site will be live at `<project-name>.pages.dev`

6. **Custom Domain** (Optional):
   - Go to "Custom domains"
   - Add `drag-ai.com`
   - Update DNS records as instructed
   - SSL certificate auto-provisioned

**Automatic Deployments:**
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

### Option 2: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts** to link project

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Option 3: Netlify

1. **Build site**:
   ```bash
   npm run build
   ```

2. **Drag & drop** `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

3. **Or use Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

### Option 4: Manual Deployment

1. **Build site**:
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** to any static hosting:
   - AWS S3 + CloudFront
   - DigitalOcean Spaces
   - GitHub Pages
   - Any web server (Apache, Nginx)

## 📝 Content Management

### Updating Content

#### Text Content
Edit `.astro` files directly in `src/pages/`:
- Homepage: `src/pages/index.astro`
- About: `src/pages/about.astro`
- Contact: `src/pages/contact.astro`
- Services: `src/pages/services.astro`

#### Images
Place images in `public/` folder:
- Logo: `public/logo.jpg`
- Other images: `public/images/`

Reference in code:
```astro
<img src="/logo.jpg" alt="Drag-AI Logo" />
```

#### Contact Information
Update in `src/components/Footer.astro` and `src/pages/contact.astro`:
- Phone number
- Email address
- Office location
- Social media links

### Contact Form Setup

The contact form uses **Web3Forms** (free, open-source):

1. **Get Access Key**:
   - Visit [Web3Forms](https://web3forms.com/)
   - Sign up (free)
   - Create new form
   - Copy access key

2. **Update Form**:
   - Open `src/pages/contact.astro`
   - Find line: `<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

3. **Test Form**:
   - Fill out form on contact page
   - Check email for submission

**Alternative Form Services:**
- [Formspree](https://formspree.io/) - Free tier available
- [Netlify Forms](https://www.netlify.com/products/forms/) - If using Netlify
- Custom backend with Zoho Mail SMTP

### Adding More Industry Pages

1. **Copy template**:
   ```bash
   cp src/pages/industries/construction.astro src/pages/industries/hospitality.astro
   ```

2. **Update content**:
   - Change industry name, icon, and description
   - Update use cases and challenges
   - Modify stats and testimonials

3. **Add to navigation**:
   - Update `src/pages/industries/index.astro`
   - Add link in `src/components/Footer.astro`

## 🔍 SEO & Performance

### SEO Features

- ✅ **Meta Tags**: Title, description, Open Graph, Twitter Cards
- ✅ **Sitemap**: Auto-generated at `/sitemap.xml`
- ✅ **Canonical URLs**: Prevent duplicate content
- ✅ **Semantic HTML**: Proper heading hierarchy
- ✅ **Alt Text**: All images have descriptive alt text
- ✅ **Mobile-Friendly**: Responsive design
- ✅ **Fast Loading**: Optimized assets

### Performance Optimizations

- ✅ **Static Generation**: Pre-rendered HTML
- ✅ **Minimal JavaScript**: Only where needed
- ✅ **Optimized Images**: Proper sizing and formats
- ✅ **CSS Optimization**: Tailwind purges unused styles
- ✅ **Font Loading**: Preconnect to Google Fonts
- ✅ **Lazy Loading**: Images load on scroll

### Expected Lighthouse Scores

- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 100

### Testing Performance

1. **Build production site**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Run Lighthouse**:
   - Open Chrome DevTools
   - Go to "Lighthouse" tab
   - Click "Generate report"

## 🎨 Customization

### Colors

Update brand colors in `src/styles/global.css`:

```css
@theme {
  --color-primary: #2563eb;        /* Blue */
  --color-primary-dark: #1e40af;   /* Dark Blue */
  --color-secondary: #7c3aed;      /* Purple */
  --color-accent: #f59e0b;         /* Amber */
}
```

### Fonts

Change fonts in `src/layouts/Layout.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

Update in `src/styles/global.css`:

```css
@theme {
  --font-sans: 'Your Font', system-ui, sans-serif;
}
```

### Logo

Replace `public/logo.jpg` with your logo:
- Recommended size: 200x200px or larger
- Format: JPG, PNG, or SVG
- Keep filename as `logo.jpg` or update references

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 4321
npx kill-port 4321

# Or use different port
npm run dev -- --port 3000
```

#### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist .astro
npm install
npm run build
```

#### Styling Not Working

```bash
# Ensure Tailwind is installed
npm install @tailwindcss/vite tailwindcss

# Check astro.config.mjs has Tailwind plugin
```

#### Form Not Submitting

- Check Web3Forms access key is correct
- Verify internet connection
- Check browser console for errors
- Test with different browser

### Getting Help

- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs
- **GitHub Issues**: Create issue in repository
- **Email**: contact@drag-ai.com

## 📞 Contact

**Drag-AI**
- **Website**: https://drag-ai.com
- **Email**: contact@drag-ai.com
- **Phone**: +91-8305020077
- **Location**: ULF, Bellandur, Bengaluru
- **LinkedIn**: https://www.linkedin.com/company/drag-ai/
- **Twitter**: https://x.com/drag_ai

## 📄 License

© 2024-2026 Drag-AI. All rights reserved.

---

**Built with ❤️ by Drag-AI Team**

For questions or support, contact: contact@drag-ai.com
