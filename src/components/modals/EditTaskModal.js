import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modals.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class EditTaskModal extends Component {
  constructor (props) {
    super(props);

    this.state = {
      taskName: '',
      description: '',
      dueDate: undefined,
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitEditTask = this.submitEditTask.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
    });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitEditTask() {
    let taskToEdit = this.props.forwardTask;
    console.log('submitEditFN', taskToEdit);
    taskToEdit.taskName = this.state.taskName;
    taskToEdit.description = this.state.description;
    taskToEdit.dueDate = this.state.dueDate;
    console.log('endSubmit', taskToEdit);
    return taskToEdit;
  };

  handleDateSelect(date) {
    if (date) {
      this.setState({
        startDate: date,
        dueDate: (date._d).toDateString(),
      });
    } else {
      this.setState({
        dueDate: undefined,
      });
    }
  };

  render() {
    return (
      <div>
        {/* "This button is just to test the modal!"*/}
        <Modal id="edit-task-modal" isOpen={this.props.isOpen} toggle={this.props.handleOnClick}>
          <form>
          <div className="row modal-header">
            <div className="col-8">
              <input name="taskName" onChange={this.handleChange} value={this.state.taskName} type="text" id="newTaskName" placeholder="Task Name" required />
            </div>
            <div className="col-4">
              <h6 className="modal-date">{new Date().toDateString()}</h6>
            </div>
          </div>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="form-group-input-1">Task Description</label>
                <input type="text" className="form-control" id="newTaskDescription"
                  placeholder="Edit Task Description" name="description"
                  value={this.state.description}
                  onChange={this.handleChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="form-group-input-2">Due Date</label>
                <DatePicker
                  selected={this.state.startDate}
                  onSelect={this.handleDateSelect}
                  minDate={moment().subtract(10, 'days')}
                  maxDate={moment().add(45, 'days')}
                  placeholderText="Select a due date"
                  defaultValue={this.props.forwardTask.dueDate} />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className="btn modal-buttons" onClick={this.props.handleOnClick}>Cancel</Button>
              <Button className="btn modal-buttons" onClick={(e) => {
                this.props.handleOnClick();
                this.props.handleEditfn(this.submitEditTask(), this.props.handleEditIndex);
              }}>Edit Task</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default EditTaskModal;
