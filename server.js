const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000; // Render подставит свой порт

app.use(compression());

// простая проверка, что сервис жив
app.get('/health', (req, res) => res.status(200).send('OK'));

// отдаём статику из /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ если путь не найден — всегда отдаём index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ION site is running at http://localhost:${PORT}`);
});
