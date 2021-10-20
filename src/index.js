import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/Index.js';
import reactDom from 'react-dom';



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

reactDom.createPortal(
  <App />,
  document.getElementById('modal')
);