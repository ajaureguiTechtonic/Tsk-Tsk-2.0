import React, { Component } from 'react';
import './usersidebar.css';

class UserSidebar extends Component{
  constructor (props) {
    super(props);
  }

    openNav() {
      let blurThis = document.getElementById("blurMe");
      blurThis.classList.add('blur-filter');
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("openbtn").style.visibility = "hidden";
  }

    closeNav() {
      let blurThis = document.getElementById("blurMe");
      blurThis.classList.remove('blur-filter');
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("openbtn").style.visibility = "visible";
  }


  render() {
    return (
  <div >
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#">User Profile</a>
      </div>

      <div id="main">
        <button id="openbtn" className="openbtn" onClick={(e) => this.openNav()}>&#9776;</button>
      </div>
  </div>
    );
  };
};

export default UserSidebar;
