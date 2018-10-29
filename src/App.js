import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './main.css';
import TaskContainer from './components/TaskContainer';

class App extends Component {
  render() {
    return (
      <TaskContainer />
    );
  }
}

export default App;

//Our App.js will be housing "Router which will then render LandingPage or TaskContainer and the appropriate NavBar view based on our route"
