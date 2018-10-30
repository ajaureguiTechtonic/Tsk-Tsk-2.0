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
        <nav class="navbar navbar-expand navbar-light fixed-top">
          <a class="navbar-brand" href="landing-page.html"><img class="nav-logo" src={Logo} alt="tsk-tsk logo" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    );
  }
}

export default NavBar;

// import react, import css, export at bottom to app js, then in app js file import this NavBar.js
// dont make a real add task btn at the moment.
