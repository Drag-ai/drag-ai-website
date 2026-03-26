const fs = require('fs');
const path = require('path');

// High-quality SVG logos in different variants
const logos = {
  // Logo with white background (suitable for light backgrounds)
  'logo-white-bg.svg': `<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- White background with rounded corners -->
  <rect width="400" height="400" fill="white" rx="80"/>
  
  <!-- Neural network nodes (scaled 10x) -->
  <circle cx="200" cy="80" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="100" cy="200" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="300" cy="200" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="200" cy="320" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="200" cy="200" r="40" fill="url(#logoGradient)" />
  
  <!-- Connecting lines (scaled 10x, thicker for better visibility) -->
  <line x1="200" y1="80" x2="200" y2="160" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="200" y1="240" x2="200" y2="290" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="170" y1="180" x2="130" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="230" y1="180" x2="270" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="170" y1="220" x2="130" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="230" y1="220" x2="270" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
</svg>`,

  // Logo with transparent background
  'logo-transparent.svg': `<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- Neural network nodes (scaled 10x) -->
  <circle cx="200" cy="80" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="100" cy="200" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="300" cy="200" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="200" cy="320" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="200" cy="200" r="40" fill="url(#logoGradient)" />
  
  <!-- Connecting lines (scaled 10x, thicker for better visibility) -->
  <line x1="200" y1="80" x2="200" y2="160" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="200" y1="240" x2="200" y2="290" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="170" y1="180" x2="130" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="230" y1="180" x2="270" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="170" y1="220" x2="130" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
  <line x1="230" y1="220" x2="270" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.6" />
</svg>`,

  // Logo with dark background (suitable for dark themes)
  'logo-dark-bg.svg': `<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- Dark background with rounded corners -->
  <rect width="400" height="400" fill="#1a1a2e" rx="80"/>
  
  <!-- Neural network nodes (scaled 10x) -->
  <circle cx="200" cy="80" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="100" cy="200" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="300" cy="200" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="200" cy="320" r="30" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="200" cy="200" r="40" fill="url(#logoGradient)" />
  
  <!-- Connecting lines (scaled 10x, thicker for better visibility) -->
  <line x1="200" y1="80" x2="200" y2="160" stroke="url(#logoGradient)" stroke-width="12" opacity="0.8" />
  <line x1="200" y1="240" x2="200" y2="290" stroke="url(#logoGradient)" stroke-width="12" opacity="0.8" />
  <line x1="170" y1="180" x2="130" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.8" />
  <line x1="230" y1="180" x2="270" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.8" />
  <line x1="170" y1="220" x2="130" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.8" />
  <line x1="230" y1="220" x2="270" y2="200" stroke="url(#logoGradient)" stroke-width="12" opacity="0.8" />
</svg>`,

  // Ultra high-res logo (2048x2048) for print
  'logo-ultra-hd.svg': `<svg viewBox="0 0 2048 2048" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  
  <!-- White background with rounded corners -->
  <rect width="2048" height="2048" fill="white" rx="200"/>
  
  <!-- Neural network nodes (scaled 51.2x for ultra HD) -->
  <circle cx="1024" cy="410" r="150" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="512" cy="1024" r="150" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="1536" cy="1024" r="150" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="1024" cy="1638" r="150" fill="url(#logoGradient)" opacity="0.9" />
  <circle cx="1024" cy="1024" r="200" fill="url(#logoGradient)" />
  
  <!-- Connecting lines (scaled for ultra HD, extra thick for print quality) -->
  <line x1="1024" y1="410" x2="1024" y2="820" stroke="url(#logoGradient)" stroke-width="60" opacity="0.6" />
  <line x1="1024" y1="1228" x2="1024" y2="1488" stroke="url(#logoGradient)" stroke-width="60" opacity="0.6" />
  <line x1="870" y1="922" x2="665" y2="1024" stroke="url(#logoGradient)" stroke-width="60" opacity="0.6" />
  <line x1="1178" y1="922" x2="1383" y2="1024" stroke="url(#logoGradient)" stroke-width="60" opacity="0.6" />
  <line x1="870" y1="1126" x2="665" y2="1024" stroke="url(#logoGradient)" stroke-width="60" opacity="0.6" />
  <line x1="1178" y1="1126" x2="1383" y2="1024" stroke="url(#logoGradient)" stroke-width="60" opacity="0.6" />
</svg>`
};

// Create logos directory
const logosDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Write all logo files
Object.entries(logos).forEach(([filename, content]) => {
  const filepath = path.join(logosDir, filename);
  fs.writeFileSync(filepath, content);
  console.log(`✅ Created: ${filename}`);
});

console.log('\n📁 All high-quality logo files created in: /app/frontend/public/logos/');
console.log('\nAvailable logos:');
console.log('  - logo-white-bg.svg     (White background, for light themes)');
console.log('  - logo-transparent.svg  (Transparent, for any background)');
console.log('  - logo-dark-bg.svg      (Dark background, for dark themes)');
console.log('  - logo-ultra-hd.svg     (2048x2048, for print/high-res)');
