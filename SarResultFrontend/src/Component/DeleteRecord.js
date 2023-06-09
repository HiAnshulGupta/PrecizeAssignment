import React, { useState} from 'react';
import axios from 'axios';



function DeleteRecord({ getAllData }) {
  const [name, setName] = useState('');

  const deleteRecord = () => {
    axios.delete(`http://localhost:8080/SATResult/${name}`)
      .then(() => {
        console.log(`Deleted record for ${name}`);
        setName('');
        getAllData();
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div>
      <h2>Delete Record</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={deleteRecord}>Delete Record</button>
    </div>
  );
}
export default DeleteRecord;