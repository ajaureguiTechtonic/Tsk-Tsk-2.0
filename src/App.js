import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './main.css';
import TaskContainer from './components/TaskContainer';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <TaskContainer />
      </div>
    );
  }
}

export default App;

//Our App.js will be housing "Router which will then render LandingPage or TaskContainer and the appropriate NavBar view based on our route"
