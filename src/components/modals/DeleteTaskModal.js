import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class DeleteTaskModal extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>delete modal</Button>
        <Modal className={this.props.className} isOpen={this.state.modal} toggle={this.toggle} tabIndex="-1" role="dialog" id="delete-task-modal" aria-labelledby="delete-modal-label" aria-hidden="true">

          <ModalHeader>
            {/* <!-- <h5 className="modal-title" id="delete-modal-label">Delete Task?</h5> --> */}
          </ModalHeader>

          <ModalBody>
            <p>Is this important?</p>
          </ModalBody>

          <ModalFooter>
            <Button type="button" className="btn modal-buttons">No, Delete It. </Button>
            <Button type="button" className="btn modal-buttons" onClick={this.toggle}>Yes, Keep It</Button>
          </ModalFooter>

        </Modal>
      </div>
    );
  }
}

export default DeleteTaskModal;
