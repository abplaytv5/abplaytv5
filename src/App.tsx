const App = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'red', 
      minHeight: '100vh',
      fontSize: '24px',
      color: 'white'
    }}>
      <h1>ABPLAY TV WORKS!</h1>
      <p>React is loading successfully!</p>
      <p>Current time: {new Date().toString()}</p>
    </div>
  );
};

export default App;
