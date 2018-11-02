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
  }

  render() {
    return (
      <div>
        <Modal id="delete-task-modal" isOpen={this.props.isOpen} toggle={this.props.handleOnClick} tabIndex="-1" role="dialog"  aria-labelledby="delete-modal-label" aria-hidden="true">
          <ModalHeader>
            <h5 className="modal-title" id="delete-modal-label">Delete Task?</h5>
          </ModalHeader>
          <ModalBody>
            <p>Is this important?</p>
          </ModalBody>
          <ModalFooter>
            <Button type="button" className="btn modal-buttons">No, Delete It. </Button>
            <Button type="button" className="btn modal-buttons" onClick={this.props.handleOnClick}>Yes, Keep It</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteTaskModal;
