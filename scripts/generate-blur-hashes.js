import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs';
import path from 'path';

const images = {
  live: '/projects/rookmelder-disco/images/02-live.jpg',
  band: '/projects/rookmelder-disco/images/04-band.jpg',
  guitar: '/projects/rookmelder-disco/images/01-guitar.jpg',
  performance: '/projects/rookmelder-disco/images/03-performance.jpg',
};

async function generateBlurHashes() {
  const blurHashes = {};

  for (const [key, imagePath] of Object.entries(images)) {
    try {
      const { base64 } = await getPlaiceholder(`./public${imagePath}`);
      blurHashes[key] = base64;
      console.log(`✓ Generated blur hash for ${key}`);
    } catch (error) {
      console.error(`✗ Failed to generate blur hash for ${key}:`, error.message);
    }
  }

  console.log('\nBlur hashes:');
  console.log(JSON.stringify(blurHashes, null, 2));
}

generateBlurHashes();
