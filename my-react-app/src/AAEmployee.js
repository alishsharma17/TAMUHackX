// src/components/AAEmployee.js
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import TaskList from './TaskList'
import UpdateTask from './UpdateTask'
import Guardian from './Guardian'
import PassView from './PassView'
import TaskDeets from './TaskDeets'
import QR from './QR'
const AAEmployee = ()=> {
  const [inputValue, setInputValue] = useState('');
  const history = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRedirect = () => {
    // Redirect to the 'result' page with the input value as a query parameter
    history(`/tasks?inputValue=${inputValue}`);
  };
  return (
    
    <div>
              <h1>Welcome! Please Log In With Your AA UserName!</h1>
    <label for="textInput">Enter UserName:</label>
      <input type="text" id="textInput" value={inputValue} onChange={handleInputChange} required></input>
    <button  onClick={handleRedirect}>Submit</button>
    </div>

    
  );
  
};

export default AAEmployee;