import React from 'react';
import './App.css';
import Login from './Components/Login/login';



function App() {
  
  return (
      <div className="App">
      <header className="App-header">
        <p className='titulo'>
          Faça seu login 
        </p>
        <Login />
      </header>
    </div>
  );
}

export default App;
