import React, { useState } from 'react';
import axios from 'axios';

function UpdateScore({ getdata }) {
    const [name, setName] = useState('');
    const [SatScore, setSatScore] = useState('');

    const updateScore = () => {
        axios.put(`http://localhost:8080/SATResult/${name}?SatScore=${SatScore}` )
            .then(response => {
                console.log(response.data);
                setName('');
                setSatScore('');
                getdata();
            })
            .catch(error => {
                console.error(error);
            });
    };


return (
    <div>
        <h2>Update Score</h2>
        <label>Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <label>New SAT Score:</label>
        <input type="number" value={SatScore} onChange={e => setSatScore(e.target.value)} />
        <button onClick={updateScore}>Update Score</button>
    </div>
);
}
export default UpdateScore;