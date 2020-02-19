import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css'

export default function Login({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {

        event.preventDefault();
        
        const response = await api.post('/login', {
            email,
            password
        });

        const {_id} = response.data.user;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
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
        </>
    )
};