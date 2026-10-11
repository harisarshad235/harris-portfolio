const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = [
  path.join(__dirname, '..', 'public', 'images'),
  path.join(__dirname, '..', 'public', 'images', 'showcase'),
];

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== 'showcase') { // handled explicitly
        await processDirectory(fullPath);
      }
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const baseName = path.basename(file, path.extname(file));
      const webpPath = path.join(dirPath, `${baseName}.webp`);

      try {
        await sharp(fullPath)
          .webp({ quality: 80, effort: 4 })
          .toFile(webpPath);

        const originalSize = (stat.size / 1024).toFixed(1);
        const newSize = (fs.statSync(webpPath).size / 1024).toFixed(1);
        console.log(`Converted: ${file} (${originalSize} KB) -> ${baseName}.webp (${newSize} KB)`);
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err.message);
      }
    }
  }
}

async function run() {
  console.log('Optimizing images to modern WebP format...');
  for (const dir of targetDirs) {
    await processDirectory(dir);
  }
  console.log('Image optimization complete.');
}

run();
