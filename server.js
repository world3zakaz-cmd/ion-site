const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// сжатие
app.use(compression());

// health-check для Render
app.get('/health', (req, res) => res.status(200).send('OK'));

// статика из /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ SPA fallback без использования path-to-regexp шаблонов
// (важно: идёт ПОСЛЕ express.static)
app.use((req, res, next) => {
  if (req.method !== 'GET') return next();              // не ломаем POST/PUT/… (если вдруг появятся)
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ION site is running at http://localhost:${PORT}`);
});
