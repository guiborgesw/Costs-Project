const express = require('express');
const path = require('path');

const app = express();

// disponibiliza o build do React
app.use(express.static(path.join(__dirname, 'build')));

// rota fallback (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// inicia servidor
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
