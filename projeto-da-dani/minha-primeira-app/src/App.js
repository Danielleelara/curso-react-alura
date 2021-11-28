import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import PaginaInicial from './Components/PaginaInicial';


function App() {
    return (
      <div className="App">
      <header className="App-header">
       <PaginaInicial/>
        <p className='titulo'>
          Faça seu login 
        </p>
        <Login />  
      </header>
    </div>
  );
}

export default App;
