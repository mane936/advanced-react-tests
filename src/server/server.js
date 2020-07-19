import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import config from './config';

import App from '../components/App';
import { data } from '../testData';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>React Tests</title>
      </head>
      <body>
        <div id='root'>${initialMarkup}</div>
        <script src="main.js"></script>
      </body>
    </html>
  `);
});

server.get('/data', (req, res) => {
  res.send(data);
});

server.listen(config.port, () => console.log(`Server running on port ${config.port}...`));
