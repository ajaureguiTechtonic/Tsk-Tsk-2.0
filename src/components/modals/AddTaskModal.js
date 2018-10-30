import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class AddTaskModal extends React.Component {
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
        {/* "This button is just to text the modal!" */}
        <Button color="danger" onClick={this.toggle}>CLICK ME</Button>
        <Modal id="add-task-modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form>
            <ModalHeader>
              <div class="form-row">
                <div class="col-md-4">
                  <input type="text" id="newTaskName" placeholder="Task Name" required></input>
                </div>
              </div>
              <span><h6 class="modal-title modal-date">Date Added</h6></span>
            </ModalHeader>
            <ModalBody>
              <div class="form-group">
                <label for="form-group-input-1">Task Description</label>
                <input type="text" class="form-control" id="newTaskDescription" placeholder="Task Description"></input>
              </div>
              <div class="form-group">
                <label for="form-group-input-2">Due Date</label>
                <input type="text" class="form-control newDueDate"  readonly placeholder="Due Date - Leave blank if no due date"></input>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className="btn modal-buttons" onClick={this.toggle}>Cancel</Button>{' '}
              <Button className="btn modal-buttons">Add Task</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddTaskModal;
