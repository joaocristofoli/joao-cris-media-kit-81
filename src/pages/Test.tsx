const Test = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🟢 TESTE - Site Funcionando!</h1>
      <p>Se você consegue ver esta página, o React está funcionando corretamente.</p>
      
      <h2>Links de Navegação:</h2>
      <ul>
        <li><a href="#/">🏠 Página Principal</a></li>
        <li><a href="#/admin">⚙️ Painel Admin</a></li>
        <li><a href="#/test">🧪 Esta Página de Teste</a></li>
      </ul>
      
      <h2>Informações do Site:</h2>
      <p><strong>URL GitHub Pages:</strong> https://joaocristofoli.github.io/joao-cris-media-kit/#/test</p>
      <p><strong>URL Lovable:</strong> https://joao-cris-media-kit.lovable.app/#/test</p>
      <p><strong>URL Admin GitHub:</strong> https://joaocristofoli.github.io/joao-cris-media-kit/#/admin</p>
      <p><strong>URL Admin Lovable:</strong> https://joao-cris-media-kit.lovable.app/#/admin</p>
      
      <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px' }}>
        <h3>✅ Para testar localmente:</h3>
        <ol>
          <li>Baixe o projeto como ZIP</li>
          <li>Extraia os arquivos</li>
          <li>Abra o arquivo: <strong>public/index-static.html</strong></li>
        </ol>
      </div>
    </div>
  );
};

export default Test;