import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

const missingImages = [
  {
    name: 'journey-customer.jpg',
    url: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'product-pheasant.jpg',
    url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=800&q=80'
  }
];

async function downloadMissing() {
  for (const item of missingImages) {
    const dest = path.join(imagesDir, item.name);
    console.log(`Downloading ${item.name}...`);
    const response = await fetch(item.url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(arrayBuffer));
    console.log(`✓ Saved ${item.name} (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB)`);
  }
  console.log('Missing images successfully downloaded!');
}

downloadMissing();
