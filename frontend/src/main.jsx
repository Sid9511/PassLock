import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV ===  'production') disableReactDevTools();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/passlock">
      <App />
    </Router>
  </React.StrictMode>
);
