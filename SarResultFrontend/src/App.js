import './App.css';
// import React, { useState, useEffect } from 'react';
import React,{useState} from 'react';
// import axios from 'axios';
import InsertData from './Component/Insert';
import ViewAllData from './Component/ViewData';
import GetRank from './Component/GetRank';
import UpdateScore from './Component/UpdateScore';
import DeleteRecord from './Component/DeleteRecord';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case 'insert':
        return <InsertData />;
      case 'viewAll':
        return <ViewAllData />;
      case 'getRank':
        return <GetRank />;
      case 'updateScore':
        return <UpdateScore />;
      case 'deleteRecord':
        return <DeleteRecord />;
      default:
        return null;
    }
  };

  return (
    <div >
      <h1>SAT Results</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="insert">Insert data</option>
        <option value="viewAll">View all data</option>
        <option value="getRank">Get rank</option>
        <option value="updateScore">Update score</option>
        <option value="deleteRecord">Delete one record</option>
      </select>
      {renderComponent()}
    </div>
  );
}

export default App;
