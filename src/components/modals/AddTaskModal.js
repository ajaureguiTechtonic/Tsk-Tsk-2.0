import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const uuidv4 = require('uuid/v4');

class AddTaskModal extends Component {
  constructor (props) {
    super(props);

    this.state = {
      startDate: moment(),
      taskName: '',
      description: '',
      dueDate: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.submitTaskInfo = this.submitTaskInfo.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitTaskInfo() {
    const newTask = {
      taskName: this.state.taskName,
      description: this.state.description,
      dueDate: this.state.dueDate,
      taskID: uuidv4(),
      dateAdded: new Date().toDateString(),
    };

    this.props.createTask(newTask);
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
        <Modal id="add-task-modal" isOpen={ this.props.isOpen } toggle={ this.props.handleOnClick }>
          <form>
            <div className="modal-header">
              <h5 className="modal-title" id="add-task-modal-label">
                <div className="form-row">
                  <div className="col-md-4">
                    <input name="taskName" onChange={ this.handleChange } value={ this.state.taskName } type="text" id="newTaskName" placeholder="Task Name" required />
                  </div>
                </div>
              </h5>
              <h6 className="modal-date">{new Date().toDateString()}</h6>
            </div>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="form-group-input-1">Task Description</label>
                <input id="newTaskDescription" type="text" className="form-control" name="description" value={ this.state.description } onChange={ this.handleChange } placeholder="Task Description"></input>
              </div>
              <div className="form-group">
                <label htmlFor="form-group-input-2">Due Date</label>
                <DatePicker
                  selected={ this.state.startDate }
                  onSelect={ this.handleDateSelect }
                  minDate={ moment() }
                  maxDate={ moment().add(45, 'days') }
                placeholderText="Select a due date" />
              </div>
            </ModalBody>
            <ModalFooter>
              <button type="button" className="btn modal-buttons" onClick={ this.props.handleOnClick} >Cancel</button>
              <button type="button" className="btn modal-buttons" onClick={
                (e) => {
                  this.props.handleOnClick(e);
                  this.submitTaskInfo();
                }}>Add Task</button>

            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
};

export default AddTaskModal;
