const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const sharp = require('sharp');

const PORT = 3000;
const OUT_DIR = path.resolve('out');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';

  let filePath = path.join(OUT_DIR, reqPath);
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

function runEdge(args) {
  return new Promise((resolve, reject) => {
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    const child = spawn(edgePath, args, { stdio: 'ignore' });
    child.on('close', (code) => resolve(code));
    child.on('error', (err) => reject(err));
  });
}

server.listen(PORT, async () => {
  console.log(`Static server running on http://localhost:${PORT}`);
  const scratchDir = path.resolve('C:/Users/ASUS/.gemini/antigravity/brain/859a4b00-92e2-45d0-ae50-33cf1bcc4f16/scratch');
  const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\859a4b00-92e2-45d0-ae50-33cf1bcc4f16';

  try {
    const navShot = path.join(scratchDir, 'nav-shot.png');
    const fullShot = path.join(scratchDir, 'full-shot.png');
    const legalShot = path.join(scratchDir, 'legal-shot.png');

    console.log('Capturing navbar...');
    await runEdge([
      '--headless=new',
      '--disable-gpu',
      '--window-size=1280,350',
      '--virtual-time-budget=1500',
      `--screenshot=${navShot}`,
      `http://localhost:${PORT}/`
    ]);

    console.log('Capturing full page...');
    await runEdge([
      '--headless=new',
      '--disable-gpu',
      '--window-size=1280,2600',
      '--virtual-time-budget=1500',
      `--screenshot=${fullShot}`,
      `http://localhost:${PORT}/`
    ]);

    console.log('Capturing legal collapsed nav...');
    await runEdge([
      '--headless=new',
      '--disable-gpu',
      '--window-size=1280,350',
      '--virtual-time-budget=1500',
      `--screenshot=${legalShot}`,
      `http://localhost:${PORT}/legal/privacy/`
    ]);

    // Crop Footer from fullShot
    const footerShot = path.join(scratchDir, 'footer-shot.png');
    const fullMeta = await sharp(fullShot).metadata();
    console.log('Full page size:', fullMeta.width, fullMeta.height);
    await sharp(fullShot)
      .extract({ left: 0, top: fullMeta.height - 450, width: fullMeta.width, height: 450 })
      .toFile(footerShot);

    // Copy to artifact directory
    fs.copyFileSync(navShot, path.join(artifactDir, 'nav-shot.png'));
    fs.copyFileSync(footerShot, path.join(artifactDir, 'footer-shot.png'));
    fs.copyFileSync(legalShot, path.join(artifactDir, 'legal-shot.png'));
    console.log('Done! All screenshots captured and copied.');
  } catch (e) {
    console.error('Error:', e);
  } finally {
    server.close();
    process.exit(0);
  }
});
