const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function makeFavicons() {
  const symbolPng = path.resolve('public/logo/unfailed-symbol-white.png');

  // Favicon sizes: 16, 32, 48
  const sizes = [16, 32, 48];
  for (const size of sizes) {
    const pad = Math.max(1, Math.round(size * 0.1));
    const targetSize = size - pad * 2;

    const resized = await sharp(symbolPng)
      .resize(targetSize, targetSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toFile('public/favicon-' + size + 'x' + size + '.png');

    console.log('Generated public/favicon-' + size + 'x' + size + '.png');
  }

  // Apple touch icon: 180x180 on dark nearBlack (#0D0C0A) background
  const appleTarget = 180 - 36;
  const appleSymbol = await sharp(symbolPng)
    .resize(appleTarget, appleTarget, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 13, g: 12, b: 10, alpha: 1 } // #0D0C0A
    }
  })
  .composite([{ input: appleSymbol, gravity: 'center' }])
  .png()
  .toFile('public/apple-touch-icon.png');
  console.log('Generated public/apple-touch-icon.png');

  // 32x32 as public/favicon.ico and app/favicon.ico
  fs.copyFileSync('public/favicon-32x32.png', 'public/favicon.ico');
  fs.copyFileSync('public/favicon-32x32.png', 'app/favicon.ico');
  console.log('Generated favicon.ico');
}

makeFavicons();
