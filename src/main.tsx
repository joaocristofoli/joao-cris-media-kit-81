
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Sistema de debug para capturar erros
const DEBUG_ERRORS: any[] = [];

// Função global para mostrar erros no console
(window as any).showErrors = () => {
  console.group('🔍 DEBUG: TODOS OS ERROS CAPTURADOS');
  if (DEBUG_ERRORS.length === 0) {
    console.log('✅ Nenhum erro encontrado!');
  } else {
    DEBUG_ERRORS.forEach((error, index) => {
      console.group(`❌ Erro ${index + 1}:`);
      console.error(error);
      console.groupEnd();
    });
  }
  console.groupEnd();
  return DEBUG_ERRORS;
};

// Função para adicionar erro ao debug
const addDebugError = (error: any) => {
  DEBUG_ERRORS.push({
    timestamp: new Date().toISOString(),
    error: error,
    stack: error.stack || 'No stack trace',
    message: error.message || 'No message'
  });
};

console.log('=== INICIANDO APLICAÇÃO ===');
console.log('React:', React);
console.log('createRoot:', createRoot);
console.log('💡 Digite showErrors() no console para ver todos os erros capturados');

// Adicionar listener para erros globais
window.addEventListener('error', (e) => {
  const errorInfo = {
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno,
    error: e.error
  };
  console.error('ERRO GLOBAL:', errorInfo);
  addDebugError(errorInfo);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('PROMISE REJEITADA:', e.reason);
  addDebugError({ type: 'Promise Rejection', reason: e.reason });
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
    addDebugError({ type: 'Root Creation Error', error });
    // Fallback para mostrar erro na tela
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: Arial; color: red;">
        <h1>Erro ao carregar aplicação</h1>
        <pre>${error.toString()}</pre>
        <p>Digite <code>showErrors()</code> no console para mais detalhes</p>
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
