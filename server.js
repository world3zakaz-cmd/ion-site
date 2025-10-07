const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000; // Render подставит свой порт

// Сжатие ответов
app.use(compression());

// Проверка, что сервер жив
app.get('/health', (req, res) => res.status(200).send('OK'));

// Раздаём статику из папки /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Фолбэк для любых других маршрутов (Express 5 совместимый)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`ION site is running at http://localhost:${PORT}`);
});
