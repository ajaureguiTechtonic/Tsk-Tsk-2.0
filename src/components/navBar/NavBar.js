import React, { Component } from 'react';
import '../../main.css';
import './navbar.css';
import Logo from '../../assets/first_logo.png';
import SignUpModal from '../../components/modals/SignUpModal';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  loginToggle() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  headerButton() {
    if (this.props.isLoggedIn === false) {
      return (
        <button type="button" onClick={this.loginToggle} className="btn edit-button ml-auto">Sign Up</button>
      )
    } else if (this.props.isLoggedIn === true && this.props.location.pathname === '/archived') {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/" onClick={this.taskView}>Active Tasks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" onClick={(e) => this.props.checkLogout()}>Logout</NavLink>
          </NavItem>
        </Nav>
      )
    } else if (this.props.isLoggedIn === true && this.props.location.pathname === '/')
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/archived" onClick={this.taskView}>Archived Tasks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" onClick={(e) => this.props.checkLogout()}>Logout</NavLink>
          </NavItem>
        </Nav>
      );
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="fixed-top">
          <NavbarBrand href="/">
            <img className="nav-logo" src={Logo} alt="tsk-tsk logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              {this.headerButton()}
          </Collapse>
        </Navbar>
        <SignUpModal checkLogin={this.props.checkLogin} isOpen={this.state.modal} onClick={this.loginToggle} />
      </div>
    );
  }
};

export default NavBar;
