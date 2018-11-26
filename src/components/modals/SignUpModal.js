import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modals.css';
const authURL = 'http://127.0.0.1:4000/auth';
const axios = require('axios');

class SignUpModal extends Component {
  constructor (props) {
    super(props);
    this.state = { toDashboard: false };
  }

  validateRegister(user) {
    if (user.username == '') {
      console.log('Please enter a valid username');
      return false;
    } else if (user.email == '') {
      console.log('Please enter a valid email');
      return false;
    } else if (user.password == '') {
      console.log('Please enter a valid password');
      return false;
    } else {
      return true;
    }
  }

  handleRegister(e) {
    e.preventDefault();
    let container = document.getElementById("register-form");
    let formData = container.querySelectorAll('input');
    let newUser = {};
    if (formData[2].value === formData[3].value) { //Make sure passwords match.
      newUser.username = formData[0].value;
      newUser.email = formData[1].value;
      newUser.password = formData[2].value;
      if (this.validateRegister(newUser)) { // If they do match, make sure the rest of the values are good to go.
        console.log("Do the thing");
        axios.post(`${authURL}/register`, newUser)
        .then((jwt) => {
          console.log(jwt);
          // sessionStorage.setItem('jwt-token', jwt.token);
          this.setState({ toDashboard: true });
        });
      }
    } else {
      console.log("Passwords must match");
    }
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='tasks' />;
    } else {
      return (
        <div>
          <Modal className={this.props.className} id="modal-signup" tabIndex="-1" isOpen={this.props.isOpen} toggle={this.props.onClick}  role="dialog" aria-labelledby="modal-label-signup" aria-hidden="true">
            <ModalHeader>
              <div>
                <h5 className="modal-title" id="modal-label-signup">Welcome !</h5>
              </div>
            </ModalHeader>

            <ModalBody>
              {/* <!-- Modal sign up form --> */}
              <form id="register-form">
                <div className="form-group">
                  <label htmlFor="InputUserName">Sign in</label>
                  <input type="UserName" className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="InputEmail1">Email address</label>
                  <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="InputPassword1">Password</label>
                  <input name="password" type="password" className="form-control" placeholder="Password" required />
                </div>
                {/* <!-- This is the password conformation field --> */}
                <div className="form-group">
                  <label htmlFor="InputPasswordconfirm">Password Confirm</label>
                  <input name="password2" type="password" className="form-control" placeholder="Re-enter Password" required />
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <button onClick={this.props.onClick} className="btn modal-buttons">Cancel</button>
              <button type="submit" onClick={ (e) => this.handleRegister(e) } className="btn modal-buttons">Create</button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
}

export default SignUpModal;
