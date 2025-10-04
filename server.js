const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`ION site is running at http://localhost:${PORT}`);
});
