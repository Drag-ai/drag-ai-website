# Drag AI - Production-Grade Agentic AI Systems

A modern, production-ready website for Drag AI, an early-stage Agentic AI company building autonomous AI agents and intelligent workflows for business operations.

## 🚀 Tech Stack

- **Frontend**: React 18 with React Router (BrowserRouter)
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
- **8 Core Pages**: Home, About, Services, Industries, Resources, Careers, Contact, Privacy/Terms
- **Working Contact Form** - Integrated with Web3Forms API
- **Resources Section** - Internal prototypes, hypothetical examples, and methodology
- **Responsive Design** - Mobile-friendly layouts
- **SEO Optimized** - Sitemap, robots.txt, meta tags, Agentic AI positioning
- **Accessible** - Semantic HTML, keyboard navigation, proper ARIA labels
- **Social Media Integration** - LinkedIn, Facebook, Instagram links

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

1. **Push code to GitHub** (see GITHUB_GUIDE.md)

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

5. **Deploy**: Click "Save and Deploy"

**Important**: The site uses BrowserRouter with a `_redirects` file for proper SPA routing on Cloudflare Pages.

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

- **Clean URLs**: This site uses BrowserRouter with clean URLs (e.g., `/about`, `/services`)
- **SPA Routing**: `_redirects` file handles routing on Cloudflare Pages
- **Web3Forms Key**: Get your free access key at [web3forms.com](https://web3forms.com)
- **Honest Positioning**: No fake metrics, client testimonials, or false claims
- **Agentic AI Focus**: Positioned as Agentic AI systems specialist, not generic AI consulting

## 🧪 Testing

The project includes automated browser testing:
```bash
# Screenshots available in /tmp/
# Test reports in /app/test_reports/
```

## 📄 Pages

1. **Home** - Agentic AI systems hero, capabilities, founders
2. **About** - Company story, founders, principles
3. **Services** - 6 Agentic AI services (Custom Agents, Autonomous Workflows, Multi-Agent Systems, RAG, Document Processing, Conversational AI)
4. **Industries** - Industry-specific agentic AI solutions
5. **Resources** - Internal prototypes, hypothetical examples, methodology (NEW)
6. **Careers** - Open positions, benefits, company values
7. **Contact** - Working contact form with social media links
8. **Privacy & Terms** - Legal pages

## 🎯 Positioning

- **Primary**: Agentic AI systems for business
- **Focus**: Custom AI agents, autonomous workflows, multi-agent orchestration
- **Approach**: Production-ready, honest about early-stage, no fake metrics
- **Target**: Businesses looking for practical AI implementation

## 🎨 Design Principles

- **Truthfulness**: No fake metrics, clients, or false promises
- **Premium Feel**: Purple/pink gradient theme, neural network animation
- **Clear Messaging**: Honest about capabilities and stage
- **Conversion-focused**: "Book a Discovery Call" CTA throughout

## 📞 Contact & Social

- **Email**: info@drag-ai.com
- **Location**: Bengaluru, India
- **LinkedIn**: [linkedin.com/company/drag-ai](https://www.linkedin.com/company/drag-ai/)
- **Facebook**: [facebook.com/share/18cr5FMcj4](https://www.facebook.com/share/18cr5FMcj4/)
- **Instagram**: [@dragai.tech](https://www.instagram.com/dragai.tech)

## 📚 Documentation

- `README.md` - This file
- `AGENTIC_AI_REPOSITIONING_REPORT.md` - Complete repositioning documentation
- `TRUTHFULNESS_AUDIT.md` - Fake metrics removal audit
- `CLOUDFLARE_DEPLOYMENT.md` - Detailed deployment guide
- `SEO_OPTIMIZATION_REPORT.md` - SEO implementation details
- `design_guidelines.md` - Design system and guidelines

## 📜 License

© 2026 Drag AI. All rights reserved.
