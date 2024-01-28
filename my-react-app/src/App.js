import {React} from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AAEmployee from './AAEmployee';
import TaskList from './TaskList';
import Navigation from './Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route element={<AAEmployee />}path="/" />
          <Route element={<TaskList />} path="/tasks" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;