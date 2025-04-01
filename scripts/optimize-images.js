import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

// Ensure the images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Sample Ghana/Africa images to use if local images don't exist
const placeholderImages = [
  {
    name: 'ghana-hero.jpg',
    url: 'https://images.unsplash.com/photo-1580902394836-21e0d429b7f4',
    width: 1920,
    height: 1080,
  },
  {
    name: 'ghana-classroom.jpg',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
    width: 800,
    height: 600,
  },
  {
    name: 'ghana-community.jpg',
    url: 'https://images.unsplash.com/photo-1604873908998-7c0963c16d8b',
    width: 600,
    height: 600,
  },
  {
    name: 'ghana-celebration.jpg',
    url: 'https://images.unsplash.com/photo-1519699792356-99c17f8156a7',
    width: 400,
    height: 400,
  },
  {
    name: 'project-library.jpg',
    url: 'https://images.unsplash.com/photo-1588580000645-4562a6d2c839',
    width: 800,
    height: 600,
  },
  {
    name: 'project-water.jpg',
    url: 'https://images.unsplash.com/photo-1585756229319-3a6034defa31',
    width: 800,
    height: 600,
  },
  {
    name: 'project-coding.jpg',
    url: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f',
    width: 800,
    height: 600,
  },
  {
    name: 'project-health.jpg',
    url: 'https://images.unsplash.com/photo-1516831906352-1bc6bf45d488',
    width: 800,
    height: 600,
  },
  {
    name: 'project-agriculture.jpg',
    url: 'https://images.unsplash.com/photo-1505471768190-275e2ad36672',
    width: 800,
    height: 600,
  },
  {
    name: 'project-culture.jpg',
    url: 'https://images.unsplash.com/photo-1590229217970-2c9a1994a908',
    width: 800,
    height: 600,
  },
  {
    name: 'ghana-office.jpg',
    url: 'https://images.unsplash.com/photo-1572028412480-0a75271c6bb7',
    width: 800,
    height: 600,
  }
];

async function downloadImage(url, outputPath, width, height) {
  try {
    console.log(`Downloading ${url}...`);
    
    // Fetch the image using node-fetch
    const response = await fetch(`${url}?w=${width}&h=${height}&fit=crop&auto=format&q=80`);
    
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    
    const buffer = await response.arrayBuffer();
    
    // Optimize the image with sharp
    await sharp(Buffer.from(buffer))
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);
    
    console.log(`Optimized and saved ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${url}:`, error.message);
    return false;
  }
}

async function optimizeExistingImage(inputPath, outputPath, width, height) {
  try {
    console.log(`Optimizing ${inputPath}...`);
    
    // Check if file exists and has content
    const stats = fs.statSync(inputPath);
    if (stats.size === 0) {
      return false;
    }
    
    // Optimize with sharp
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath + '.optimized');
    
    // Replace original with optimized version
    fs.renameSync(outputPath + '.optimized', outputPath);
    
    console.log(`Optimized and saved ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return false;
  }
}

async function processImages() {
  console.log('Starting image optimization...');
  
  for (const img of placeholderImages) {
    const imgPath = path.join(imagesDir, img.name);
    
    // Check if the image already exists
    if (fs.existsSync(imgPath) && fs.statSync(imgPath).size > 0) {
      console.log(`Optimizing existing image: ${img.name}`);
      await optimizeExistingImage(imgPath, imgPath, img.width, img.height);
    } else {
      console.log(`Downloading placeholder image: ${img.name}`);
      await downloadImage(img.url, imgPath, img.width, img.height);
    }
    
    // Create WebP version for modern browsers
    try {
      const webpPath = imgPath.replace(/\.[^.]+$/, '.webp');
      await sharp(imgPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      console.log(`Created WebP version: ${webpPath}`);
    } catch (error) {
      console.error(`Error creating WebP for ${img.name}:`, error.message);
    }
  }
  
  console.log('Image optimization complete!');
}

// Run the optimization
processImages().catch(error => {
  console.error('Error in image optimization:', error);
  process.exit(1);
}); 