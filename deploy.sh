#!/bin/bash
# Quick deployment script for Drag AI website

echo "🚀 Drag AI Website - GitHub & Cloudflare Deployment"
echo "=================================================="
echo ""

# Check if git is configured
if ! git config user.name > /dev/null 2>&1; then
    echo "⚠️  Git user not configured. Please run:"
    echo "   git config user.name 'Your Name'"
    echo "   git config user.email 'your-email@example.com'"
    echo ""
    exit 1
fi

echo "✓ Git is configured"
echo "  User: $(git config user.name)"
echo "  Email: $(git config user.email)"
echo ""

# Check current status
echo "📁 Current git status:"
git status --short | head -10
echo ""

# Confirm before proceeding
read -p "Do you want to commit and prepare for GitHub push? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled"
    exit 0
fi

# Stage all files
echo "📦 Staging files..."
git add .

# Create commit
echo "💾 Creating commit..."
git commit -m "Complete Drag AI website with all pages (Home, About, Services, Industries, Contact, Careers, Privacy, Terms)"

echo ""
echo "✅ Commit created successfully!"
echo ""
echo "📋 NEXT STEPS:"
echo "=============="
echo ""
echo "1️⃣  CREATE GITHUB REPOSITORY:"
echo "   Go to: https://github.com/new"
echo "   - Repository name: drag-ai-website"
echo "   - Visibility: Public or Private"
echo "   - DO NOT initialize with README"
echo ""
echo "2️⃣  CONNECT TO GITHUB:"
echo "   Run this command (replace YOUR-USERNAME):"
echo "   git remote add origin https://github.com/YOUR-USERNAME/drag-ai-website.git"
echo ""
echo "3️⃣  PUSH TO GITHUB:"
echo "   git push -u origin main"
echo ""
echo "4️⃣  DEPLOY TO CLOUDFLARE:"
echo "   - Open: https://dash.cloudflare.com/8479a22f113fabc13dab3573a62f5e03"
echo "   - Workers & Pages → Create Application → Pages → Connect to Git"
echo "   - Select your repository"
echo "   - Build command: cd frontend && yarn install && yarn build"
echo "   - Build output: frontend/build"
echo "   - Framework: Create React App"
echo ""
echo "📖 For detailed instructions, see:"
echo "   - GITHUB_GUIDE.md"
echo "   - CLOUDFLARE_DEPLOYMENT.md"
echo ""
