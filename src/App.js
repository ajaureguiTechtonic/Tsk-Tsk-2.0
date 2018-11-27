import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.css';
import '../src/BootstrapCSS/bootstrap.min.css';
import TaskContainer from './components/taskContainer/TaskContainer';
import LandingPage from './components/landingPage/LandingPage';
import ArchivedTaskView from './components/archivedTask/ArchivedTaskView';
import NavBar from './components/navBar/NavBar';
const authURL = 'http://127.0.0.1:4000/auth';
const axios = require('axios');

class App extends Component {
  constructor (props) {
    super(props);
    this._verify();
    this.state = { isLoggedIn: false };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }

  _verify() {
    let headers = {
      'x-access-token': sessionStorage.getItem('jwt-token'),
    };

    axios.get(`${authURL}/verify`, { headers: headers })
    .then((jwt) => {
      if (jwt.data.auth === true) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  _login(jwt) {
    if (jwt.data.auth === true) {
      sessionStorage.setItem('jwt-token', jwt.data.token);
      sessionStorage.setItem('user', jwt.data.name);
      this.setState({ isLoggedIn: true });
      console.log('Hello ' + jwt.data.name);
    } else {
      sessionStorage.setItem('jwt-token', null);
      sessionStorage.setItem('user', null);
      this.setState({ isLoggedIn: false });
      console.log('Invalid authorization');
    }
  }

  _logout () {
    sessionStorage.removeItem('jwt-token');
    sessionStorage.removeItem('user');
    this.setState({ isLoggedIn: false });
    console.log('You are logged out');
  }

  render () {
    if (this.state.isLoggedIn === true) {
      return (
        <Router>
          <div className='main-container'>
            <Route exact path='/' render={(props) => <div>
              <NavBar checkLogin={ this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn }/>
              <TaskContainer checkLogin = { this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } />
            </div>}/>
          </div>
        </Router>
          );
    } else {
      return (
        <Router>
          <div className='main-container'>
            <Route exact path='/' render={(props) => <div>
              <NavBar checkLogin = { this._login} checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } {...props}/>
              <LandingPage checkLogin = { this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } />
            </div>}/>
          </div>
      
            <Route exact path='/archived' render={(props) => <div>
                <NavBar {...props}/>
                <ArchivedTaskView />
              </div>}/>
        </Router>
      );
    }
  }
};

export default App;
