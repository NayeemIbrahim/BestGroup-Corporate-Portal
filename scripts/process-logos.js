const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/Nayeem PC/.gemini/antigravity-ide/brain/1bf2cb14-1de4-4a1b-b604-91aa32c2cabb/.user_uploaded';
const file1 = path.join(userUploadedDir, 'media_1792049801808.jpg');
const file2 = path.join(userUploadedDir, 'media_1792049801811.jpg');

const publicImagesDir = path.join(__dirname, '../public/images');
const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../app');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

/**
 * Removes both the outer white border and the black circular background.
 * For pixels on black, we apply smooth alpha matting so gold and silver edges remain crisp without black fringes.
 */
async function removeBackground(inputFile, isEmblemOnly = false) {
  const { data, info } = await sharp(inputFile)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 (RGBA)
  const out = Buffer.from(data);

  const cx = width / 2;
  const cy = height / 2;
  const circleRadius = width * 0.495; // radius of circular disc

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = out[idx];
      const g = out[idx + 1];
      const b = out[idx + 2];

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // 1. Outside the circle (the white corners)
      if (dist > circleRadius + 2) {
        out[idx + 3] = 0;
        continue;
      }

      // Smooth outer circle antialiasing
      let circleFactor = 1.0;
      if (dist > circleRadius - 2) {
        circleFactor = Math.max(0, (circleRadius + 2 - dist) / 4);
      }

      // 2. White corner pixels if any leak inside
      if (r > 245 && g > 245 && b > 245 && dist > circleRadius - 10) {
        out[idx + 3] = 0;
        continue;
      }

      // 3. Black background removal
      // Calculate luminosity / max channel
      const maxVal = Math.max(r, g, b);
      
      // Black threshold
      if (maxVal < 14) {
        // Pure black background
        out[idx + 3] = 0;
      } else if (maxVal < 45) {
        // Smooth transition edge between black background and gold/silver
        // Un-multiply color with respect to black background to remove black fringe
        const alpha = (maxVal - 14) / (45 - 14);
        const finalAlpha = Math.round(alpha * 255 * circleFactor);
        out[idx + 3] = finalAlpha;
        if (alpha > 0.05) {
          out[idx] = Math.min(255, Math.round(r / alpha));
          out[idx + 1] = Math.min(255, Math.round(g / alpha));
          out[idx + 2] = Math.min(255, Math.round(b / alpha));
        }
      } else {
        // Solid logo content (gold, silver, highlights)
        out[idx + 3] = Math.round(255 * circleFactor);
      }
    }
  }

  // Create sharp image from raw buffer and convert to PNG
  const pngBuffer = await sharp(out, {
    raw: {
      width,
      height,
      channels: 4
    }
  }).png().toBuffer();

  // Trim transparent pixels tightly to the content bounding box
  const trimmedBuffer = await sharp(pngBuffer)
    .trim({ threshold: 5 })
    .png()
    .toBuffer();

  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log(`Processed ${path.basename(inputFile)}: trimmed to ${trimmedMeta.width}x${trimmedMeta.height}`);

  return sharp(trimmedBuffer);
}

async function run() {
  console.log('Processing Full Logo (Image 1)...');
  const fullLogo = await removeBackground(file1, false);
  
  // Save full logo to public/images/logo.png and public/images/bestgroup-logo.png
  await fullLogo
    .clone()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicImagesDir, 'logo.png'));
  
  await fullLogo
    .clone()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicImagesDir, 'bestgroup-logo.png'));
  console.log('Saved public/images/logo.png');

  console.log('Processing Icon Mark (Image 2)...');
  const iconMark = await removeBackground(file2, true);
  
  // Save icon mark to public/images/logo-icon.png
  await iconMark
    .clone()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicImagesDir, 'logo-icon.png'));
  console.log('Saved public/images/logo-icon.png');

  // Also create a horizontal version (Emblem on left + Metallic Text on right)
  const fullLogoRaw = await sharp(path.join(publicImagesDir, 'logo.png'))
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Extract the text portion (y >= 285)
  const textBuffer = await sharp(path.join(publicImagesDir, 'logo.png'))
    .extract({ left: 0, top: 285, width: fullLogoRaw.info.width, height: fullLogoRaw.info.height - 285 })
    .trim()
    .png()
    .toBuffer();
  
  const textMeta = await sharp(textBuffer).metadata();
  console.log(`Extracted text block: ${textMeta.width}x${textMeta.height}`);

  // Resize icon to match height with nice proportions
  const targetEmblemHeight = 220;
  const resizedEmblem = await sharp(path.join(publicImagesDir, 'logo-icon.png'))
    .resize({ height: targetEmblemHeight })
    .png()
    .toBuffer();
  const emblemMeta = await sharp(resizedEmblem).metadata();

  const gap = 30;
  const totalWidth = emblemMeta.width + gap + textMeta.width;
  const totalHeight = Math.max(emblemMeta.height, textMeta.height);

  const emblemTop = Math.round((totalHeight - emblemMeta.height) / 2);
  const textTop = Math.round((totalHeight - textMeta.height) / 2);

  await sharp({
    create: {
      width: totalWidth,
      height: totalHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: resizedEmblem, left: 0, top: emblemTop },
      { input: textBuffer, left: emblemMeta.width + gap, top: textTop }
    ])
    .png()
    .toFile(path.join(publicImagesDir, 'logo-horizontal.png'));
  console.log(`Saved public/images/logo-horizontal.png (${totalWidth}x${totalHeight})`);

  // Also create a square icon with subtle padding for favicon / app icon
  // 512x512 app icon
  const iconBuffer = await iconMark.toBuffer();
  await sharp(iconBuffer)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  console.log('Saved app/icon.png (512x512)');

  await sharp(iconBuffer)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));
  console.log('Saved app/apple-icon.png (180x180)');

  // Favicon 32x32 png / ico
  await sharp(iconBuffer)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Saved public/favicon.ico (32x32)');

  // Also save a 64x64 favicon.png
  await sharp(iconBuffer)
    .resize(64, 64, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Saved public/favicon.png');

  console.log('All logo and icon assets processed and saved successfully!');
}

run().catch(err => {
  console.error('Error processing logos:', err);
  process.exit(1);
});
