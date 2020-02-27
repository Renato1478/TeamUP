import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Team() {
    const [team, setTeam] = useState({});
    const [owner, setOwner] = useState({});
    const [members, setMembers] = useState([]);

    async function loadTeam() {
        const id = localStorage.getItem('team_id');
        const response = await api.get(`/team/?id=${id}`);

        setTeam(response.data.team);
        setOwner(response.data.team.owner);
        setMembers(response.data.team.members);
    }

    useEffect(() => {
        loadTeam();
    }, []);

    return (<>

        <div className='content team-content'>
            <strong className='name'>{team.name}</strong>
            <strong className='game'>{team.game}</strong>
            <span className ='location'>{team.location}</span>
            <Owner className ='owner' owner={owner}/>
            <Members members={members}/>
            <button className='btn-red'>Participate</button>
        </div>

    </>)
};

function Members({ members }) {
    if (!members || !members.length) {
      return null;
    }
    return (
        <>
            Members:
            <ul className="list-group list-group-flush">
                {members.map(member => (
                    <li key={member._id} className='list-group-item'>
                        <span>{member.email}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

function Owner ({ owner }) {
    if (!owner) {
        return null;
    }
    return (
        <>
            <span>Owner: {owner._id}</span>
        </>
    )
}