const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  // Obtiene el archivo solicitado
  let filePath = '.' + req.url;
  if (filePath == './') {
    filePath = './index.html'; // Redirige al archivo index.html si no se especifica ruta
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';

  if (extname == '.js') {
    contentType = 'application/javascript';
  } else if (extname == '.css') {
    contentType = 'text/css';
  } else if (extname == '.json') {
    contentType = 'application/json';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 500;
      res.end(`Error al cargar el archivo: ${err.code}`);
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Servidor funcionando en http://${hostname}:${port}/`);
});