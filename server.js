const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Сжатие
app.use(compression());

// health-check для Render
app.get('/health', (req, res) => res.status(200).send('OK'));

// Отдаём статику из /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Catch-all для SPA (Express 5 + path-to-regexp v6)
app.get('/:path(.*)', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ION site is running at http://localhost:${PORT}`);
});
