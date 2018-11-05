import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.css';
import '../src/BootstrapCSS/bootstrap.min.css';
import TaskContainer from './components/taskContainer/TaskContainer';
import LandingPage from './components/landingPage/LandingPage';
import NavBar from './components/navBar/NavBar';

const App = () => {
  return (
    <Router>
      <div className='main-container'>
        <Route exact path='/' render={(props) => <div>
          <NavBar {...props}/>
          <LandingPage />
        </div>}/>

        <Route exact path='/tasks' render={(props) => <div>
          <NavBar {...props}/>
          <TaskContainer />
        </div>}/>
      </div>
    </Router>
  );
};

export default App;
