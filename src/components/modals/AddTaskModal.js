import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class AddTaskModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment(),
      taskName: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  handleChange(e, date) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleDateSelect(date) {
    this.setState({
      startDate: date,
    });
  };

  render() {
    // console.log(this.state.startDate._d);
    return (
      <div>
        <Modal id="add-task-modal" isOpen={this.props.isOpen} className={this.props.className} toggle={this.props.handleOnClick}>
          <form>
            <ModalHeader>
              <div className="form-row">
                <div className="col-md-4">
                  <input id="newTaskName" type="text" name="taskName" value={this.state.taskName} onChange={this.handleChange} placeholder="Task Name" required></input>
                  <span className="modal-title modal-date">Date Added</span>
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="form-group-input-1">Task Description</label>
                <input id="newTaskDescription" type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Task Description"></input>
              </div>
              <div className="form-group">
                <label htmlFor="form-group-input-2">Due Date</label>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDateSelect}
                  minDate={moment()}
                  maxDate={moment().add(45, 'days')}
                placeholderText="Select a due date" />
              </div>
            </ModalBody>
            <ModalFooter>
              <button type="button" className="btn modal-buttons" onClick={this.props.handleOnClick}>Cancel</button>
              <button type="submit" className="btn modal-buttons">Add Task</button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddTaskModal;
