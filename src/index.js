import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';

import App from './components/App';

// const data = axios.get('/data');

ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);
