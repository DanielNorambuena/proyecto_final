import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextoGlobalProvider } from './Context/ContextoGlobal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextoGlobalProvider>
      <App />
    </ContextoGlobalProvider>
  </React.StrictMode>
);
