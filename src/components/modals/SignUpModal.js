import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modals.css';
import { _validateAccount, _handleRegister } from '../../login.js';

const SignUpModal = (props) => {

  const createAccount = (e) => {
    e.preventDefault();
    let container = document.getElementById('register-form');
    let formData = container.querySelectorAll('input');
    let newAccount = {};
    if (formData[2].value === formData[3].value) { //Make sure passwords match.
      newAccount.username = formData[0].value;
      newAccount.email = formData[1].value.toLowerCase();
      newAccount.password = formData[2].value;
      if (_validateAccount(newAccount)) { // Validate values , then send the register request.
        _handleRegister(props, newAccount);
        props.handleClick();
      }
    } else {
      console.log('Passwords must match');
    }
  };

  //refs cannot be used in a stateless functional component. We can find another way to target clearing this modal, although the page will always re-render and clear the form when a user is created so I do not think this modal in particular is necessary to clear.

  // const clearModalForm = () => {
  //   this.refs.regFormref.reset();
  // };

  return (
    <div>
      <Modal id="modal-signup" tabIndex="-1" isOpen={props.isOpen} toggle={props.handleClick}  role="dialog" aria-labelledby="modal-label-signup" aria-hidden="true">
        <ModalHeader>
          <div>
            <h5 className="modal-title" id="modal-label-signup">Welcome !</h5>
          </div>
        </ModalHeader>

        <ModalBody>
          {/* <!-- Modal sign up form --> ref="regFormref" */}
          <form id="register-form" >
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
            props.handleClick(e);
            //clearModalForm();
          }} className="btn modal-buttons">Cancel</button>
          <button type="submit" onClick={ (e) => {
            createAccount(e);
            props.handleClick(e);
            //clearModalForm();
          } } className="btn modal-buttons">Create</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignUpModal;
