import React, { Component } from 'react';
import '../../main.css';
import Logo from '../../assets/first_logo.png';
import SignUpModal from '../../components/modals/SignUpModal';
import './navbar.css';
const authURL = 'http://127.0.0.1:4000/auth';
const axios = require('axios');

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  };

  headerButton() {
    if (this.props.isLoggedIn === false) {
      return <button type="button" onClick={this.toggle} className="btn edit-button ml-auto">Sign Up</button>
    } else if (this.props.isLoggedIn === true && this.props.location.pathname === '/archived') {
      return (
        <div>
          <a href="/"><button type="Link" onClick={this.taskView} className="btn edit-button ml-auto">Active Tasks </button></a>
          <a href="/"><button type="button" onClick={(e) => this.props.checkLogout()} className="btn edit-button ml-auto">Log out</button></a>
        </div>
      )
    } else if (this.props.isLoggedIn === true && this.props.location.pathname === '/')
      return (
        <div>
          <a href="/archived"><button type="Link" onClick={this.taskView} className="btn edit-button ml-auto">Archived Tasks </button></a>
          <button type="button" onClick={(e) => this.props.checkLogout()} className="btn edit-button ml-auto">Log out</button>
        </div>
      )
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light fixed-top">
          <a className="navbar-brand" href="/"><img className="nav-logo" src={Logo} alt="tsk-tsk logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            { this.headerButton() }
          </div>
        </nav>
        <SignUpModal isOpen={this.state.modal} onClick={this.toggle} />
      </div>
    );
  }
};

export default NavBar;
