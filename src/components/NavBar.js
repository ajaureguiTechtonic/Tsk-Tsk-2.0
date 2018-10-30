import React, { Component } from 'react';
import '../main.css';
import Logo from '../assets/first_logo.png';

class NavBar extends Component{
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light fixed-top">
          <a className="navbar-brand" href="/"><img className="nav-logo" src={Logo} alt="tsk-tsk logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* navBtn */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <button type="button" className="btn edit-button ml-auto float-right" data-toggle="modal" data-target="#modal-signup">
              Sign up
            </button>
          </div>
          {/* navBtn */}
        </nav>
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
