import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Dashboard() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function loadTeams() {
            const response = await api.get('/dashboard');
            
            setTeams(response.data.teams);
        }

        loadTeams();
    }, []);

    function goToTeamPage(teamId) {
        localStorage.setItem('team_id', teamId);
    }

    return (<>
        <img className="logo" src={ logo } alt='TeamUP' width='200px' height='200px'/>

        <div className='team-table'>
            <ul className="team-list">
                {teams.map(team => (
                    <Link style={{textDecoration: 'none'}} to='/team' key={team._id} onClick={event => goToTeamPage(team._id)}>
                        <li className=''>
                            <strong>{team.name}</strong>
                            <div>{team.game}</div>
                            <span>{team.location}</span>
                        </li>
                    </Link>
                ))}
            </ul>
            <Link style={{textDecoration: 'none'}} to='/create_team'><button className='btn-red alignRight' style={{width: 330}}>Create a Team</button></Link>
        </div>
    </>)
};