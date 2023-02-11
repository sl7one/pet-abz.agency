import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './css/index.css';
import './css/reset.css';
import './css/basic.css';
import { Theme } from 'styled-components/themeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Theme>
    <App />
  </Theme>
  // </React.StrictMode>
);
