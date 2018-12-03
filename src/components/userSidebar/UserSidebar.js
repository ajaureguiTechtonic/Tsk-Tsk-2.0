import React, { Component } from 'react';
import './usersidebar.css';

class UserSidebar extends Component{
  constructor (props) {
    super(props);

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    this.blurThis = document.getElementById('blurMe'); // Main container to be blurred.
    this.coverThis = document.getElementById('myOverlay'); // Set overlay.
  }

  openNav() {
    if (this.disableAdd) { this.disableAdd.setAttribute('disabled', ''); }

    this.blurThis.classList.add('blur-filter');
    this.coverThis.classList.add('overlay');
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('openbtn').style.visibility = 'hidden';
  }

  closeNav() {
    if (this.disableAdd) { this.disableAdd.removeAttribute('disabled'); }

    this.blurThis.classList.remove('blur-filter');
    this.coverThis.classList.remove('overlay');
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('openbtn').style.visibility = 'visible';
  }

  render() {
    return (
  <div >
      <div id='mySidebar' className='sidebar'>
        <a href='javascript:void(0)' className='closebtn' onClick={this.closeNav}>&times;</a>
        <a href='#'></a>
        <a href='#'></a>
        <a href='#'></a>
        <a href='#'>User Profile</a>
      </div>
      <div id='main'>
        <button id='openbtn' className='openbtn' onClick={this.openNav}>&#9776;</button>
      </div>
  </div>
    );
  };
};

export default UserSidebar;
