import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/SATResult`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>View Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>SAT Score</th>
            <th>Passed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>{item.pincode}</td>
              <td>{item.satScore}</td>
              <td>{item.passed ? 'Pass' : 'Fail'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewData;