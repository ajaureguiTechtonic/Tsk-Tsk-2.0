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

  handleLogout() {
    axios.get(`${authURL}/logout`).then((response) => {
      this.props.checkLogout(); // Handle loggin out of a user, dumping token
    });
  }

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
        <nav className="navbar navbar-expand navbar-light">
          <a className="navbar-brand" href="/"><img className="nav-logo" src={Logo} alt="tsk-tsk logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            { this.headerButton() }
          </div>
        </nav>
        <SignUpModal checkLogin={this.props.checkLogin} isOpen={this.state.modal} onClick={this.toggle} />
      </div>
    );
  }
};

export default NavBar;
