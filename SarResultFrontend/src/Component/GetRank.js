import React, { useState } from 'react';
import axios from 'axios';

function GetRank({getRank}){
    const[name,setName]=useState('');
    

    const handleGetRank=()=>{
        axios.get(`http://localhost:8080/SATResult/${name}/rank`)
        .then(response=>{
            setName(response.data);
        })
        .catch(error =>{
            console.error(error);
        });
        
    };
    return (
        <div>
            <h2>Rank</h2>
            <label>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={handleGetRank}>Get Your Rank</button>
            {<p>Rank for {name}</p>}
        </div>
    );
}
export default GetRank;