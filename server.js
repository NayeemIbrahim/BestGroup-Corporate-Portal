const { createServer } = require('http');
const next = require('next');

const dev = false;
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Failed to start Next.js production server:', err);
  process.exit(1);
});
