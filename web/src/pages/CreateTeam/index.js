import React, { useState } from 'react';
import api from '../../services/api';

export default function CreateTeam({ history }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [language, setLanguage] = useState('');
    const [game, setGame] = useState('');
    const user_id = localStorage.getItem('user');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/create_team', {
            name,
            game,
            location,
            language,
            user_id,
        }, { headers: {user_id: user_id} });

        console.log(response);

        localStorage.setItem('team', response.data._id);
        history.push('/dashboard');
    }

    return (<>

        <div className='content'>
            <strong style={{ fontSize: 22 }}>Create a Team</strong><br/><br/>

            <form> 
                <input placeholder="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <input placeholder="Location"
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                />

                <input placeholder="Language"
                    value={language}
                    onChange={event => setLanguage(event.target.value)}
                />

                <input placeholder="Game"
                    value={game}
                    onChange={event => setGame(event.target.value)}
                />

                <button className='btn-red' onClick={handleSubmit}>Create</button>
            </form>
        </div>

    </>)
};