import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Team() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/teams');
            
            setTeams(response.data);
        }

        loadSpots();
    }, []);

    return (<>
        <ul className="team-list">
            {teams.map(team => (
                <li key={team._id}>
                    <strong>{team.name}</strong>
                    <div>{team.game}</div>
                    <span>{team.location}</span>

                    <Link to="/team">
                        <button>PARTICIPATE</button>
                    </Link>

                </li>
            ))}
        </ul>
    </>)

};