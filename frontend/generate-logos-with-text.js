const fs = require('fs');
const path = require('path');

// Logo variants with company name
const logosWithText = {
  // Horizontal layout - White background
  'logo-horizontal-white.svg': `<svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- White background with rounded corners -->
  <rect width="800" height="200" fill="white" rx="20"/>
  
  <!-- Neural network icon (centered vertically at x=100) -->
  <g transform="translate(100, 100)">
    <circle cx="0" cy="-60" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="-40" cy="0" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="40" cy="0" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="60" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="0" r="16" fill="url(#logoGradient)" />
    
    <line x1="0" y1="-60" x2="0" y2="-16" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="0" y1="16" x2="0" y2="48" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="-12" y1="-8" x2="-28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="12" y1="-8" x2="28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="-12" y1="8" x2="-28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="12" y1="8" x2="28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
  </g>
  
  <!-- Company name "Drag AI" -->
  <text x="250" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#1a1a2e">
    Drag AI
  </text>
</svg>`,

  // Horizontal layout - Transparent background
  'logo-horizontal-transparent.svg': `<svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- Neural network icon (centered vertically at x=100) -->
  <g transform="translate(100, 100)">
    <circle cx="0" cy="-60" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="-40" cy="0" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="40" cy="0" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="60" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="0" r="16" fill="url(#logoGradient)" />
    
    <line x1="0" y1="-60" x2="0" y2="-16" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="0" y1="16" x2="0" y2="48" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="-12" y1="-8" x2="-28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="12" y1="-8" x2="28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="-12" y1="8" x2="-28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
    <line x1="12" y1="8" x2="28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.6" />
  </g>
  
  <!-- Company name "Drag AI" -->
  <text x="250" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#1a1a2e">
    Drag AI
  </text>
</svg>`,

  // Horizontal layout - Dark background
  'logo-horizontal-dark.svg': `<svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- Dark background with rounded corners -->
  <rect width="800" height="200" fill="#1a1a2e" rx="20"/>
  
  <!-- Neural network icon (centered vertically at x=100) -->
  <g transform="translate(100, 100)">
    <circle cx="0" cy="-60" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="-40" cy="0" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="40" cy="0" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="60" r="12" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="0" r="16" fill="url(#logoGradient)" />
    
    <line x1="0" y1="-60" x2="0" y2="-16" stroke="url(#logoGradient)" stroke-width="5" opacity="0.8" />
    <line x1="0" y1="16" x2="0" y2="48" stroke="url(#logoGradient)" stroke-width="5" opacity="0.8" />
    <line x1="-12" y1="-8" x2="-28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.8" />
    <line x1="12" y1="-8" x2="28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.8" />
    <line x1="-12" y1="8" x2="-28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.8" />
    <line x1="12" y1="8" x2="28" y2="0" stroke="url(#logoGradient)" stroke-width="5" opacity="0.8" />
  </g>
  
  <!-- Company name "Drag AI" -->
  <text x="250" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="white">
    Drag AI
  </text>
</svg>`,

  // Stacked/Vertical layout - White background
  'logo-stacked-white.svg': `<svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- White background with rounded corners -->
  <rect width="400" height="500" fill="white" rx="40"/>
  
  <!-- Neural network icon (centered at x=200, y=150) -->
  <g transform="translate(200, 150)">
    <circle cx="0" cy="-60" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="-50" cy="0" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="50" cy="0" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="60" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="0" r="20" fill="url(#logoGradient)" />
    
    <line x1="0" y1="-60" x2="0" y2="-20" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="0" y1="20" x2="0" y2="45" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="-15" y1="-10" x2="-35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="15" y1="-10" x2="35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="-15" y1="10" x2="-35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="15" y1="10" x2="35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
  </g>
  
  <!-- Company name "Drag AI" centered below icon -->
  <text x="200" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" fill="#1a1a2e" text-anchor="middle">
    Drag AI
  </text>
</svg>`,

  // Stacked/Vertical layout - Transparent
  'logo-stacked-transparent.svg': `<svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- Neural network icon (centered at x=200, y=150) -->
  <g transform="translate(200, 150)">
    <circle cx="0" cy="-60" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="-50" cy="0" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="50" cy="0" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="60" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="0" r="20" fill="url(#logoGradient)" />
    
    <line x1="0" y1="-60" x2="0" y2="-20" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="0" y1="20" x2="0" y2="45" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="-15" y1="-10" x2="-35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="15" y1="-10" x2="35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="-15" y1="10" x2="-35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="15" y1="10" x2="35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
  </g>
  
  <!-- Company name "Drag AI" centered below icon -->
  <text x="200" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" fill="#1a1a2e" text-anchor="middle">
    Drag AI
  </text>
</svg>`,

  // Stacked/Vertical layout - Dark background
  'logo-stacked-dark.svg': `<svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- Dark background with rounded corners -->
  <rect width="400" height="500" fill="#1a1a2e" rx="40"/>
  
  <!-- Neural network icon (centered at x=200, y=150) -->
  <g transform="translate(200, 150)">
    <circle cx="0" cy="-60" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="-50" cy="0" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="50" cy="0" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="60" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="0" r="20" fill="url(#logoGradient)" />
    
    <line x1="0" y1="-60" x2="0" y2="-20" stroke="url(#logoGradient)" stroke-width="6" opacity="0.8" />
    <line x1="0" y1="20" x2="0" y2="45" stroke="url(#logoGradient)" stroke-width="6" opacity="0.8" />
    <line x1="-15" y1="-10" x2="-35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.8" />
    <line x1="15" y1="-10" x2="35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.8" />
    <line x1="-15" y1="10" x2="-35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.8" />
    <line x1="15" y1="10" x2="35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.8" />
  </g>
  
  <!-- Company name "Drag AI" centered below icon -->
  <text x="200" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" fill="white" text-anchor="middle">
    Drag AI
  </text>
</svg>`,

  // Wide banner format - Transparent (for website headers)
  'logo-banner-transparent.svg': `<svg viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- Neural network icon (centered vertically at x=150) -->
  <g transform="translate(150, 150)">
    <circle cx="0" cy="-70" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="-50" cy="0" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="50" cy="0" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="70" r="15" fill="url(#logoGradient)" opacity="0.9" />
    <circle cx="0" cy="0" r="20" fill="url(#logoGradient)" />
    
    <line x1="0" y1="-70" x2="0" y2="-20" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="0" y1="20" x2="0" y2="55" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="-15" y1="-10" x2="-35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="15" y1="-10" x2="35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="-15" y1="10" x2="-35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
    <line x1="15" y1="10" x2="35" y2="0" stroke="url(#logoGradient)" stroke-width="6" opacity="0.6" />
  </g>
  
  <!-- Company name "Drag AI" with extra large font for banners -->
  <text x="300" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="96" font-weight="700" fill="#1a1a2e">
    Drag AI
  </text>
</svg>`
};

// Create logos directory
const logosDir = path.join(__dirname, 'public', 'logos');

// Write all logo files with text
Object.entries(logosWithText).forEach(([filename, content]) => {
  const filepath = path.join(logosDir, filename);
  fs.writeFileSync(filepath, content);
  console.log(`✅ Created: ${filename}`);
});

console.log('\n📁 Logo files with company name created in: /app/frontend/public/logos/');
console.log('\nNew logos with "Drag AI" text:');
console.log('  Horizontal layouts (800x200):');
console.log('    - logo-horizontal-white.svg');
console.log('    - logo-horizontal-transparent.svg');
console.log('    - logo-horizontal-dark.svg');
console.log('  Vertical/Stacked layouts (400x500):');
console.log('    - logo-stacked-white.svg');
console.log('    - logo-stacked-transparent.svg');
console.log('    - logo-stacked-dark.svg');
console.log('  Banner format (1200x300):');
console.log('    - logo-banner-transparent.svg');
