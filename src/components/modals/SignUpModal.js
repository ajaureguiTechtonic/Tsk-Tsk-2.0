import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class SignUpModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = { modal: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (

      <div>
        <Button color="danger" onClick={this.toggle}>CLICK ME</Button>
        <Modal className={this.props.className} id="modal-signup" tabindex="-1" isOpen={this.state.modal} toggle={this.toggle}  role="dialog" aria-labelledby="modal-label-signup" aria-hidden="true">
          <ModalHeader>
            <h5 className="modal-title" id="modal-label-signup">Welcome !</h5>
          </ModalHeader>

          <ModalBody>
            {/* <!-- Modal sign up form --> */}
            <form>
              <div className="form-group">
                <label for="InputUserName">Sign in</label>
                <input type="UserName" className="form-control" id="InputUser" placeholder="Username"/>
              </div>
              <div className="form-group">
                <label for="InputEmail1">Email address</label>
                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="InputPassword1">Password</label>
                <input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
              </div>

            {/* <!-- This is the password conformation field --> */}
              <div className="form-group">
                <label for="InputPasswordconfirm">Password Confirm</label>
                <input type="password" className="form-control" id="InputPassword2" placeholder="Re-enter Password"/>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle} className="btn modal-buttons">Cancel</Button>
            <a href="/tasks"><Button type="submit" className="btn modal-buttons">Create</Button></a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
