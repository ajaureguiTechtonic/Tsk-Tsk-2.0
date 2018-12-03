import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { _verify } from './login.js';
import './main.css';
import '../src/BootstrapCSS/bootstrap.min.css';
import TaskContainer from './components/taskContainer/TaskContainer';
import LandingPage from './components/landingPage/LandingPage';
import ArchivedTaskView from './components/archivedTask/ArchivedTaskView';
import UserSidebar from './components/userSidebar/UserSidebar';
import NavBar from './components/navBar/NavBar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { isLoggedIn: false };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
  }

  componentWillMount() {
    _verify().then((jwt) => {
      if (jwt.data.auth === true) {
        this.setState({ isLoggedIn: true });
      } else {
        this._logout();
      }
    });
  }

  componentDidMount() {
    setInterval(this.verifyUser, 1800000);
  }

  verifyUser() {
    _verify().then((jwt) => {
      console.log(jwt.data.auth);
      if (jwt.data.auth === true) {
        this.setState({ isLoggedIn: true });
      } else if (jwt.data.auth === false) {
        this._logout();
      }
    });
  }

  _login(auth) {
    if (auth === true) {
      this.setState({ isLoggedIn: true });
      console.log('Hello ' + sessionStorage.getItem('user'));
    } else {
      this._logout();
      console.log('Invalid authorization');
    }
  }

  _logout () {
    sessionStorage.removeItem('jwt-token');
    sessionStorage.removeItem('user');
    this.setState({ isLoggedIn: false });
    console.log('You are logged out, invalid token');
  }

  render () {
    if (this.state.isLoggedIn === true) {
      return (
          <Router>
            <div>
              <UserSidebar />
              <div id="blurMe" className='main-container'>
                <Route exact path='/' render={(props) => <div>
                  <NavBar checkLogin={ this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } {...props}/>
                  <TaskContainer checkLogin = { this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } {...props}/>
                </div>}/>
                <Route exact path='/archived' render={(props) => <div>
                  <NavBar checkLogin = { this._login} isLoggedIn = { this.state.isLoggedIn } {...props}/>
                  <ArchivedTaskView isLoggedIn = { this.state.isLoggedIn } checkLogout = { this._logout } {...props}/>
                </div>}/>
              </div>
              <div id='myOverlay'></div>
            </div>
          </Router>
          );
    } else {
      return (
        <Router>
          <div className='main-container'>
            <Route exact path='/' render={(props) => <div>
              <NavBar checkLogin = { this._login} checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } {...props}/>
              <LandingPage checkLogin = { this._login } checkLogout = { this._logout } isLoggedIn = { this.state.isLoggedIn } {...props} />
            </div>}/>
          </div>
        </Router>
      );
    }
  }
};

export default App;
