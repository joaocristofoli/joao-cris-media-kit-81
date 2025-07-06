
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Starting React app...'); // Debug log

const rootElement = document.getElementById('root');
console.log('Root element found:', !!rootElement); // Debug log

if (rootElement) {
  const root = createRoot(rootElement);
  console.log('Creating root...'); // Debug log
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App rendered!'); // Debug log
} else {
  console.error('Elemento #root não encontrado!');
}
