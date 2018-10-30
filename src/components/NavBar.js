import React, { Component } from 'react';
import '../main.css';
import Logo from '../assets/first_logo.png';
import '../BootstrapCSS/bootstrap.min.css';

class NavBar extends Component{
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand navbar-light fixed-top">
          <a class="navbar-brand" href="/"><img class="nav-logo" src={Logo} alt="tsk-tsk logo" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* navBtn */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <button type="button" class="btn edit-button ml-auto float-right" data-toggle="modal" data-target="#modal-signup">
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
