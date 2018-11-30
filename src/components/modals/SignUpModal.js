import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modals.css';
import { _validateAccount, _handleRegister } from '../../login.js';

class SignUpModal extends Component {
  constructor (props) {
    super(props);
  }

  createAccount(e) {
    e.preventDefault();
    let container = document.getElementById('register-form');
    let formData = container.querySelectorAll('input');
    let newAccount = {};
    if (formData[2].value === formData[3].value) { //Make sure passwords match.
      newAccount.username = formData[0].value;
      newAccount.email = formData[1].value;
      newAccount.password = formData[2].value;
      if (_validateAccount(newAccount)) { // Validate values , then send the register request.
        _handleRegister(this.props, newAccount);
      }
    } else {
      console.log('Passwords must match');
    }
  };

  clearModalForm() {
    this.refs.regFormref.reset();
  }

  render() {
    return (
      <div>
        <Modal id="modal-signup" tabIndex="-1" isOpen={this.props.isOpen} toggle={this.props.onClick}  role="dialog" aria-labelledby="modal-label-signup" aria-hidden="true">
          <ModalHeader>
            <div>
              <h5 className="modal-title" id="modal-label-signup">Welcome !</h5>
            </div>
          </ModalHeader>

          <ModalBody>
            {/* <!-- Modal sign up form --> */}
            <form id="register-form" ref="regFormref">
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
            <button onClick={(e) => {
              this.props.onClick(e);
              this.clearModalForm();
            }} className="btn modal-buttons">Cancel</button>
            <button type="submit" onClick={ (e) => {
              this.createAccount(e);
              this.props.onClick(e);
              this.clearModalForm();
            } } className="btn modal-buttons">Create</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
