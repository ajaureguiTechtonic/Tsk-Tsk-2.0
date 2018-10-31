import React, { Component } from 'react';
import '../main.css';
import Logo from '../assets/first_logo.png';
import SignUpModal from '../components/modals/SignUpModal';

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

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light fixed-top">
          <a className="navbar-brand" href="/"><img className="nav-logo" src={Logo} alt="tsk-tsk logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {
              this.props.match.path === '/' &&
              <button type="button" onClick={this.toggle} className="btn edit-button ml-auto">
                Sign Up
              </button>
            }
          </div>
        </nav>
        <SignUpModal isOpen={this.state.modal} onClick={this.toggle} />
      </div>
    );
  }
}

export default NavBar;

// TODO:
//
// NOTE: href now redirects to root: "/"
// nav button is hard coded in, will need to make it conditional to the respective page.
// still targets #modal-signup
