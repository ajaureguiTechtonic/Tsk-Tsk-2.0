import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.css';
import '../src/BootstrapCSS/bootstrap.min.css';
import TaskContainer from './components/taskContainer/TaskContainer';
import LandingPage from './components/landingPage/LandingPage';
import NavBar from './components/navBar/NavBar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { isLoggedIn: false };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }

  _login(jwt) {
    if (jwt.data.auth === true) {
      this.setState({ isLoggedIn: true });
      sessionStorage.setItem('jwt-token', jwt.data.token);
      sessionStorage.setItem('user', jwt.data.name);
      console.log('Hello ' + jwt.data.name);
    } else {
      this.setState({ isLoggedIn: false });
      sessionStorage.setItem('jwt-token', null);
      sessionStorage.setItem('user', null);
      console.log('Invalid authorization');
    }
  }

  _logout () {
    console.log("woerking");
    this.setState({ isLoggedIn: false });
    sessionStorage.removeItem('jwt-token');
    sessionStorage.removeItem('user');
    console.log('You are logged out');
  }

  render () {
    return (
      <Router>
        <div className='main-container'>
          <Route exact path='/' render={(props) => <div>
            <NavBar checkLogin = { this._login} checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } {...props}/>
            <LandingPage checkLogin = { this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } />
          </div>}/>

          <Route exact path='/tasks' render={(props) => <div>
            <NavBar checkLogin={ this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } {...props}/>
            <TaskContainer checkLogin = { this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } />
          </div>}/>
        </div>
      </Router>
    );
  }
};

export default App;
