import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUpModal extends Component {
  render() {
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
            <form>
              <div className="form-group">
                <label htmlFor="InputUserName">Sign in</label>
                <input type="UserName" className="form-control" id="InputUser" placeholder="Username"/>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail1">Email address</label>
                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
              </div>
              {/* <!-- This is the password conformation field --> */}
              <div className="form-group">
                <label htmlFor="InputPasswordconfirm">Password Confirm</label>
                <input type="password" className="form-control" id="InputPassword2" placeholder="Re-enter Password"/>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button onClick={this.props.onClick} className="btn modal-buttons">Cancel</button>
            <a href="/tasks"><button type="submit" className="btn modal-buttons">Create</button></a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
