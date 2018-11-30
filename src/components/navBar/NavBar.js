import React, { Component } from 'react';
import '../../main.css';
import './navbar.css';
import Logo from '../../assets/first_logo.png';
import SignUpModal from '../../components/modals/SignUpModal';

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
        <ul className='navbar-nav'>
          <li>
            <a href="/" onClick={this.taskView} className="nav-link">Active Tasks </a>
          </li>
          <li>
            <a href="/" onClick={(e) => this.props.checkLogout()} className="nav-link">Log out</a>
          </li>
        </ul>
      )
    } else if (this.props.isLoggedIn === true && this.props.location.pathname === '/')
      return (
        <ul className='navbar-nav'>
          <li>
            <a href="/archived" onClick={this.taskView} className="nav-link">Archived Tasks </a>
          </li>
          <li>
            <a href="/" onClick={(e) => this.props.checkLogout()} className="nav-link">Log Out</a>
          </li>
        </ul>
      )
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <a className="navbar-brand" href="/"><img className="nav-logo" src={Logo} alt="tsk-tsk logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
              { this.headerButton() }
          </div>
        </nav>
        <SignUpModal checkLogin={this.props.checkLogin} isOpen={this.state.modal} onClick={this.toggle} />
      </div>
    );
  }
};

export default NavBar;
