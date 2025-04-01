// This script runs an optimized production build
// It includes minification, tree shaking, and image optimization

import { execSync } from 'child_process';

console.log('🚀 Starting optimized production build...');

try {
  // Clean any previous builds
  console.log('🧹 Cleaning previous builds...');
  execSync('rm -rf dist', { stdio: 'inherit' });

  // Run the TypeScript compiler
  console.log('🔨 Compiling TypeScript...');
  execSync('npx tsc', { stdio: 'inherit' });

  // Run the Vite build with production optimizations
  console.log('📦 Building optimized bundle...');
  execSync('NODE_ENV=production npx vite build', { stdio: 'inherit' });

  // Run the image optimization
  console.log('🖼️ Optimizing images...');
  execSync('node scripts/optimize-images.js', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
  console.log('📁 Output located in the "dist" directory');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 