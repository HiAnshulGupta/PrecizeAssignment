import React, { useState } from 'react';
import axios from 'axios';

const Insert = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [satScore, setSatScore] = useState('');

  const handleInsertData = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/SATResult`, {
        name,
        address,
        city,
        country,
        pincode,
        satScore
      });
      console.log(response.data);
      setName('');
      setAddress('');
      setCity('');
      setCountry('');
      setPincode('');
      setSatScore('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Insert Data</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <input
        type="number"
        placeholder="SAT Score"
        value={satScore}
        onChange={(e) => setSatScore(e.target.value)}
      />
      <button onClick={handleInsertData}>Insert</button>
    </div>
  );
};

export default Insert;