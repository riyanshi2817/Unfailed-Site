const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const PORT = 3000;
const OUT_DIR = path.resolve(__dirname, '..', 'out');

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

server.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const scratchDir = __dirname;
  const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\859a4b00-92e2-45d0-ae50-33cf1bcc4f16';

  try {
    // 1. Navbar screenshot
    const navShot = path.join(scratchDir, 'navbar-view.png');
    console.log('Capturing navbar...');
    execSync(`"${edgePath}" --headless=new --disable-gpu --window-size=1280,350 --virtual-time-budget=2000 --screenshot="${navShot}" http://localhost:${PORT}/`, { timeout: 20000 });

    // 2. Full page screenshot
    const fullShot = path.join(scratchDir, 'full-page-view.png');
    console.log('Capturing full page...');
    execSync(`"${edgePath}" --headless=new --disable-gpu --window-size=1280,2400 --virtual-time-budget=2000 --screenshot="${fullShot}" http://localhost:${PORT}/`, { timeout: 20000 });

    // 3. Legal page screenshot
    const legalShot = path.join(scratchDir, 'legal-nav-view.png');
    console.log('Capturing legal collapsed nav...');
    execSync(`"${edgePath}" --headless=new --disable-gpu --window-size=1280,350 --virtual-time-budget=2000 --screenshot="${legalShot}" http://localhost:${PORT}/legal/privacy/`, { timeout: 20000 });

    // Crop Footer from fullShot
    const footerShot = path.join(scratchDir, 'footer-view.png');
    const fullMeta = await sharp(fullShot).metadata();
    console.log('Full page dimensions:', fullMeta.width, fullMeta.height);
    // Crop bottom 420px of full page
    await sharp(fullShot)
      .extract({ left: 0, top: fullMeta.height - 420, width: fullMeta.width, height: 420 })
      .toFile(footerShot);
    console.log('Cropped footer successfully!');

    // Copy screenshots to artifact directory for embedding
    fs.copyFileSync(navShot, path.join(artifactDir, 'navbar-view.png'));
    fs.copyFileSync(footerShot, path.join(artifactDir, 'footer-view.png'));
    fs.copyFileSync(legalShot, path.join(artifactDir, 'legal-nav-view.png'));
    console.log('All screenshots saved to artifact directory!');
  } catch (err) {
    console.error('Capture error:', err.message);
  } finally {
    server.close();
    process.exit(0);
  }
});
