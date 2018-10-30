import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.css';
import '../src/BootstrapCSS/bootstrap.min.css';
import TaskContainer from './components/TaskContainer';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import AddTaskModal from './components/modals/AddTaskModal';

class App extends Component {
  render() {
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
            <AddTaskModal />
          </div>}/>
        </div>
      </Router>
    );
  };
}

export default App;
