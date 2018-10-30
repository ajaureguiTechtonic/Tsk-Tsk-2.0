import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class AddTaskModal extends Component {
  constructor (props) {
    super(props);
    this.state = { startDate: moment() };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  render() {
    return (
      <div>
        <Modal id="add-task-modal" isOpen={this.props.isOpen} className={this.props.className} toggle={this.props.handleOnClick}>
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
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
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
