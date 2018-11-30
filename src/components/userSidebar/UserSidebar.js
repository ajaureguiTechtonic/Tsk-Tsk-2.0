import React, { Component } from 'react';
import './usersidebar.css';

class UserSidebar extends Component{
  constructor (props) {
    super(props);

  }

    openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("openbtn").style.visibility = "hidden";
  }

    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("openbtn").style.visibility = "visible";
  }


  render(){
    const stylestuff = {
      margin: '75px 0px 0px 0px'
    }

    return (
  <div >
      <div id="mySidebar" className="sidebar" style={stylestuff} >
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#">User Profile</a>
      </div>

      <div id="main">
        <button id='openbtn' className="openbtn" onClick={this.openNav}>&#9776;</button>
      </div>
  </div>
    );
  };
};

export default UserSidebar;
