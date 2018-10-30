import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import './main.css';
import TaskContainer from './components/TaskContainer';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-container'>


          <Route exact path='/' render={() => <div><LandingPage /></div>}/>
          <Route exact path='/tasks' render={() => <div><TaskContainer /></div>}/>

        </div>
      </Router>
    );
  }
}

export default App;

//Our App.js will be housing "Router which will then render LandingPage or TaskContainer and the appropriate NavBar view based on our route"
