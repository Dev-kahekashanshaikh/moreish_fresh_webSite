import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  {
    name: 'hero-chicken.jpg',
    url: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'about-retail.jpg',
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'journey-farm.jpg',
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'journey-transport.jpg',
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'journey-retail.jpg',
    url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'journey-packaging.jpg',
    url: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'journey-customer.jpg',
    url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'product-broiler.jpg',
    url: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'product-seafood.jpg',
    url: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'product-quail.jpg',
    url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'product-pheasant.jpg',
    url: 'https://images.unsplash.com/photo-1584447141399-22c4746bd04a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'product-layer.jpg',
    url: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'packaging-showcase.jpg',
    url: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'vision-farm.jpg',
    url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80'
  }
];

async function downloadAll() {
  console.log(`Starting download of ${images.length} images...`);
  for (const item of images) {
    const dest = path.join(imagesDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      const response = await fetch(item.url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(arrayBuffer));
      console.log(`✓ Saved ${item.name} (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

downloadAll();
