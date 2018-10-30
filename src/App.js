import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskContainer from './components/TaskContainer';
import AddTaskModal from './components/modals/AddTaskModal';
import './BootstrapCSS/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <TaskContainer />
        <AddTaskModal />
      </div>
    );
  };
}

export default App;

//Our App.js will be housing "Router which will then render LandingPage or TaskContainer and the appropriate NavBar view based on our route"
