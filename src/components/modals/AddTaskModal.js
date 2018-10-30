import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddTaskModal extends Component {
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
        <Modal id="add-task-modal" isOpen={this.props.isOpen} className={this.props.className} toggle={this.props.onClick}>
          <form>
            <ModalHeader>
              <div className="form-row">
                <div className="col-md-4">
                  <input type="text" id="newTaskName" placeholder="Task Name" required></input>
                  <span className="modal-title modal-date">Date Added</span>
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="form-group-input-1">Task Description</label>
                <input type="text" className="form-control" id="newTaskDescription" placeholder="Task Description"></input>
              </div>
              <div className="form-group">
                <label htmlFor="form-group-input-2">Due Date</label>
                <input type="text" className="form-control newDueDate"  readOnly placeholder="Due Date - Leave blank if no due date"></input>
              </div>
            </ModalBody>
            <ModalFooter>
              <button type="button" className="btn modal-buttons" onClick={this.props.onClick}>Cancel</button>
              <button type="submit" className="btn modal-buttons">Add Task</button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddTaskModal;
