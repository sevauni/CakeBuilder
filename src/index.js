import { HashRouter, Route } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);