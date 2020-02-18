import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';

import api from './services/api';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {

    event.preventDefault();
    
    const response = await api.post('/login', {
      email,
      password
    });

    const {token} = response.data;
    const {_id} = response.data.user;

    localStorage.setItem('user', _id, token);
  }

  return (
    <div className="container">

      <img className="logo" src={ logo } alt='TeamUP' width='200px' height='200px'/>

      <div className="content">

        <form onSubmit={handleSubmit}>

          <p>
            Join to teams to evolve your gameplay
          </p>

          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            id="email" 
            placeholder="Your better e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <button>LOGIN</button>

        </form>

      </div>
    </div>
  );
}

export default App;
