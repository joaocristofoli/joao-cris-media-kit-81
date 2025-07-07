
console.log('TestComponent loaded'); // Debug log

const TestComponent = () => {
  console.log('TestComponent rendering...'); // Debug log
  
  return (
    <div style={{ 
      backgroundColor: 'red', 
      color: 'white', 
      padding: '20px', 
      margin: '20px',
      fontSize: '24px',
      border: '5px solid blue'
    }}>
      TESTE - Se você vê isso, o React está funcionando!
    </div>
  );
};

export default TestComponent;
