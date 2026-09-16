const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PORT = 3010;
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

server.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const scratchDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\859a4b00-92e2-45d0-ae50-33cf1bcc4f16\\scratch';

  try {
    // 1. Navbar screenshot (top of homepage, 1280x400)
    console.log('Capturing navbar...');
    execSync(`"${edgePath}" --headless=new --disable-gpu --window-size=1280,450 --virtual-time-budget=2000 --screenshot="${path.join(scratchDir, 'navbar-screenshot.png')}" http://localhost:${PORT}/`, { timeout: 20000 });

    // 2. Full page screenshot to crop footer
    console.log('Capturing full page...');
    execSync(`"${edgePath}" --headless=new --disable-gpu --window-size=1280,2400 --virtual-time-budget=2000 --screenshot="${path.join(scratchDir, 'fullpage-screenshot.png')}" http://localhost:${PORT}/`, { timeout: 20000 });

    // 3. Legal page collapsed navbar
    console.log('Capturing legal page navbar...');
    execSync(`"${edgePath}" --headless=new --disable-gpu --window-size=1280,450 --virtual-time-budget=2000 --screenshot="${path.join(scratchDir, 'legal-navbar-screenshot.png')}" http://localhost:${PORT}/legal/privacy/`, { timeout: 20000 });

    console.log('All screenshots captured successfully!');
  } catch (err) {
    console.error('Capture error:', err.message);
  } finally {
    server.close();
    process.exit(0);
  }
});
