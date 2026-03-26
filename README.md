# Drag AI - Premium Agentic AI Consulting Website

A modern, production-ready marketing website for Drag AI, an early-stage Agentic AI consulting company targeting mid-size to enterprise companies.

## 🚀 Tech Stack

- **Frontend**: React 18 with React Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: tsParticles (neural network background)
- **Form Handling**: Web3Forms (client-side)
- **Backend**: FastAPI (Python) - minimal usage
- **Database**: MongoDB (configured but not actively used)

## 📁 Project Structure

```
/app/
├── frontend/              # React SPA
│   ├── src/
│   │   ├── pages/        # All page components
│   │   ├── components/   # Reusable UI components
│   │   ├── App.js        # Main router
│   │   └── index.css     # Global styles
│   ├── package.json
│   └── .env              # Frontend environment variables
├── backend/              # FastAPI backend (minimal)
│   ├── server.py
│   ├── requirements.txt
│   └── .env              # Backend environment variables
└── README.md
```

## 🎨 Features

- **Premium Purple/Pink Theme** - Modern, professional color scheme
- **Interactive Neural Network Background** - Subtle animation using tsParticles
- **7 Core Pages**: Home, About, Services, Industries, Contact, Careers, Privacy/Terms
- **Working Contact Form** - Integrated with Web3Forms API
- **Responsive Design** - Mobile-friendly layouts
- **SEO Optimized** - Sitemap, robots.txt, meta tags
- **Accessible** - Semantic HTML, keyboard navigation, proper ARIA labels

## 🛠️ Local Development

### Prerequisites
- Node.js 16+ and Yarn
- Python 3.9+

### Frontend Setup

```bash
cd frontend
yarn install
yarn start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python server.py
```

The backend will run on `http://localhost:8001`

## 🌐 Deployment to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard (Recommended)

1. **Push code to GitHub** (see instructions below)

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
   - Select your GitHub repository

3. **Configure Build Settings**:
   ```
   Framework preset: Create React App
   Build command: cd frontend && yarn install && yarn build
   Build output directory: frontend/build
   Root directory: /
   ```

4. **Environment Variables**:
   - Add `REACT_APP_WEB3FORMS_KEY` with your Web3Forms access key
   - (The key is already in `/app/frontend/.env` - copy it from there)

5. **Deploy**: Click "Save and Deploy"

### Option 2: Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
cd frontend
yarn build
wrangler pages deploy build --project-name=drag-ai
```

## 🔐 Environment Variables

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=https://your-backend-url.com
REACT_APP_WEB3FORMS_KEY=your-web3forms-access-key
```

### Backend (.env)
```env
MONGO_URL=your-mongodb-connection-string
```

## 📝 Important Notes

- **SPA Routing**: Configure Cloudflare Pages to redirect all routes to `index.html` for proper React Router behavior
- **Web3Forms Key**: Get your free access key at [web3forms.com](https://web3forms.com)
- **No Fake Metrics**: This site maintains credibility by avoiding fake client logos or testimonials

## 🧪 Testing

The project includes automated browser testing:
```bash
# Screenshots available in /tmp/
# Test reports in /app/test_reports/
```

## 📄 Pages

1. **Home** - Hero, capabilities, industries overview, founder preview
2. **About** - Company story, founders, principles
3. **Services** - 5 core service offerings with business impact
4. **Industries** - Target sectors and use cases
5. **Careers** - Open positions, benefits, company values
6. **Contact** - Working contact form with Web3Forms
7. **Privacy & Terms** - Legal pages

## 🎯 Design Principles

- **Trust-first**: No fake metrics or false promises
- **Premium Feel**: Purple/pink gradient theme, neural network animation
- **Engineering-led**: Clear, honest messaging about capabilities
- **Conversion-focused**: "Book a Discovery Call" CTA throughout

## 📞 Contact

- **Email**: info@drag-ai.com
- **Location**: Bengaluru, India
- **LinkedIn**: [linkedin.com/company/drag-ai](https://www.linkedin.com/company/drag-ai/)

## 📜 License

© 2026 Drag AI. All rights reserved.
