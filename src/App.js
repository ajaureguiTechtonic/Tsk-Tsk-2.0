import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './main.css';
import '../src/BootstrapCSS/bootstrap.min.css';
import TaskContainer from './components/TaskContainer';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import AddTaskModal from './components/modals/AddTaskModal';
import EditTaskModal from './components/modals/EditTaskModal';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-container'>
          <Route exact path='/' render={() => <div><NavBar/><LandingPage /></div>}/>
          <Route exact path='/tasks' render={() => <div>
             <NavBar/>
             <TaskContainer />
             <AddTaskModal />
             <EditTaskModal />
          </div>}/>
        </div>
      </Router>
    );
  };
}

export default App;

//Our App.js will be housing "Router which will then render LandingPage or TaskContainer and the appropriate NavBar view based on our route"
