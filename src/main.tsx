
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('=== INICIANDO APLICAÇÃO ===');
console.log('React:', React);
console.log('createRoot:', createRoot);

// Adicionar listener para erros globais
window.addEventListener('error', (e) => {
  console.error('ERRO GLOBAL:', {
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno,
    error: e.error
  });
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('PROMISE REJEITADA:', e.reason);
});

console.log('Starting React app...'); // Debug log

const rootElement = document.getElementById('root');
console.log('Root element found:', !!rootElement); // Debug log
console.log('Root element:', rootElement);

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    console.log('Creating root...'); // Debug log
    console.log('Root criado:', root);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('App rendered!'); // Debug log
  } catch (error) {
    console.error('ERRO AO CRIAR ROOT:', error);
    // Fallback para mostrar erro na tela
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: Arial; color: red;">
        <h1>Erro ao carregar aplicação</h1>
        <pre>${error.toString()}</pre>
        <p><a href="./index-static.html">Clique aqui para a versão estática</a></p>
      </div>
    `;
  }
} else {
  console.error('Elemento #root não encontrado!');
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: Arial; color: red;">
      <h1>Erro: Elemento #root não encontrado</h1>
      <p><a href="./index-static.html">Clique aqui para a versão estática</a></p>
    </div>
  `;
}
