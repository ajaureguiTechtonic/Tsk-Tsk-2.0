import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditTaskModal extends Component {
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
        {/* "This button is just to test the modal!"*/}
        <Button color="danger" onClick={this.toggle}>EDIT ME</Button>
        <Modal id="edit-task-modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form>
            <ModalHeader>
              <div className="form-row">
                <div className="col-md-4">
                  <input type="text" id="newTaskName" placeholder="Edit Task Name" required></input>
                  <span className="modal-title modal-date">Date Added</span>
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="form-group-input-1">Task Description</label>
                <input type="text" className="form-control" id="newTaskDescription" placeholder="Edit Task Description"></input>
              </div>
              <div className="form-group">
                <label htmlFor="form-group-input-2">Due Date</label>
                <input type="text" className="form-control newDueDate"  readOnly placeholder="Edit Due Date - Leave blank if no due date"></input>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className="btn modal-buttons" onClick={this.toggle}>Cancel</Button>{' '}
              <Button className="btn modal-buttons">Edit Task</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default EditTaskModal;
