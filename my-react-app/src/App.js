
import './App.css';
import AAEmployee from './AAEmployee'
import TaskList from './TaskList'
import UpdateTask from './UpdateTask'
import Guardian from './Guardian'
import PassView from './PassView'
import TaskDeets from './TaskDeets'
import QR from './QR'
import React, { useState } from 'react';
const App = () => {
  const [currentView, setCurrentView] = useState('aaemp');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation('aaemp')}>AAEmployee</button>
          </li>
          <li>
          <button onClick={() => handleNavigation('tasks')}>TaskList</button>
          </li>
          <li>
          <button onClick={() => handleNavigation('updatetask')}>UpdateTask</button>
          </li>
          <li>
          <button onClick={() => handleNavigation('Guardian')}>Guardian</button>
          </li>
          <li>
          <button onClick={() => handleNavigation('passview')}>PassView</button>
          </li>
          <li>
          <button onClick={() => handleNavigation('taskdeets')}>TaskDeets</button>
          </li>
          <li>
          <button onClick={() => handleNavigation('qr')}>QR</button>
          </li>
        </ul>
      </nav>

      {currentView === 'aaemp' && <AAEmployee />}
      {currentView === 'tasks' && <TaskList />}
      {currentView === 'updatetask' && <UpdateTask />}
      {currentView === 'Guardian' && <Guardian />}
      {currentView === 'passview' && <PassView />}
      {currentView === 'taskdeets' && <TaskDeets />}
      {currentView === 'qr' && <QR />}
    </div>
  );
};


export default App;
