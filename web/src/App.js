import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className="container">

      <img className="logo" src={ logo } alt='TeamUP' width='200px' height='200px'/>

      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
