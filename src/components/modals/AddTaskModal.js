import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class AddTaskModal extends React.Component {

  render() {
    return (
      <div>
        <Modal id="add-task-modal" isOpen={this.props.isOpen} className={this.props.className}>
          <form>
            <ModalHeader>
              <div className="form-row">
                <div className="col-md-4">
                  <input type="text" id="newTaskName" placeholder="Task Name" required></input>
                </div>
              </div>
              <span><h6 className="modal-title modal-date">Date Added</h6></span>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label for="form-group-input-1">Task Description</label>
                <input type="text" className="form-control" id="newTaskDescription" placeholder="Task Description"></input>
              </div>
              <div className="form-group">
                <label for="form-group-input-2">Due Date</label>
                <input type="text" className="form-control newDueDate"  readonly placeholder="Due Date - Leave blank if no due date"></input>
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
