import { promises as fs } from 'node:fs';
import path from 'node:path';

async function copyFiles() {
  try {
    console.log('Starting image copy process...');
    
    // Create the target directories if they don't exist
    await fs.mkdir('dist/images', { recursive: true });
    
    // Get all files from public/images
    const files = await fs.readdir('public/images');
    
    // Copy each file
    for (const file of files) {
      const srcPath = path.join('public/images', file);
      const destPath = path.join('dist/images', file);
      
      const stat = await fs.stat(srcPath);
      if (stat.isFile() && stat.size > 0) {
        await fs.copyFile(srcPath, destPath);
        console.log(`Copied ${srcPath} to ${destPath} (${stat.size} bytes)`);
      } else {
        console.warn(`Skipping ${srcPath} - empty or not a file`);
      }
    }
    
    // Also ensure we have a copy in assets for OG images
    await fs.mkdir('dist/assets/images', { recursive: true });
    
    // Copy important images to assets directory too (for OG tags)
    const ogImage = 'ghana-hero.jpg';
    const ogSrcPath = path.join('public/images', ogImage);
    const ogDestPath = path.join('dist/assets/images', ogImage);
    
    try {
      await fs.copyFile(ogSrcPath, ogDestPath);
      console.log(`Copied OG image ${ogSrcPath} to ${ogDestPath}`);
    } catch (err) {
      console.error(`Failed to copy OG image: ${err.message}`);
    }
    
    console.log('All images copied successfully');
  } catch (error) {
    console.error('Error copying images:', error);
  }
}

copyFiles(); 