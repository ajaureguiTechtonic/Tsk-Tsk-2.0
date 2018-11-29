import React, { Component } from 'react';
import editButton from '../../assets/edit.png';
import './alltasks.css';
import './higherlevel.css';
import { Collapse } from 'reactstrap';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker'; //for date picker
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';

class HigherLevelTask extends Component{
  constructor (props) {
    super(props);

    this.state = {
      isCollapsed: false,
      editing: false,
    };

    this.tempEditHolder = {};

    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.editTaskLLT = this.editTaskLLT.bind(this);
    this.handleChange = this.handleChange.bind(this);

  };

  editTaskHLT(taskedits) {
    if (this.state.editing) {
      if (taskedits.taskTitle) {
        this.tempEditHolder.taskTitle = taskedits.taskTitle;
      }
      if (taskedits.taskDescription) {
        this.tempEditHolder.taskDescription = taskedits.taskDescription;
      }
      if (taskedits.dateDue) {
        this.tempEditHolder.dateDue = taskedits.dateDue;
      }
    }
    console.log(this.tempEditHolder);
  };

  toggleCollapse() {
    if (this.state.isCollapsed) {
      this.toggleEditLLT();
    }

    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  //edit forwarding here
  forwardEdits(editsToFWD) {
    //sent up the line to tasklist then back to task container
    if (this.state.editing) { // this cuts down on the erroneous put req's when spaming the dropdown toggle, but not completely.
      this.props.handleEditfn(editsToFWD, this.props.id);
    }
  }

  toggleEditHLT() {
    if (!this.state.editing) {
      this.refs.editBtn.innerHTML = 'Done';
    } else {
      this.refs.editBtn.innerHTML = 'Edit';
      this.forwardEdits(this.tempEditHolder);
      this.tempEditHolder = {};
    }
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleChange (date) {
    this.editTaskHLT({ dateDue: date._d });
    this.toggleCalendar();
  }

  toggleCalendar (e) {
    if (this.state.editing) {
      e && e.preventDefault();
      this.setState({isOpen: !this.state.isOpen});
    }
  }
//NOTE check if date picker is workin righ in HigherLevelTasks
  render () {
    if (this.props.dueDate === undefined) {
      var month = this.props.daysOld;
      var day = 'Days Old';
    } else {
      month = this.props.daysPastDue;
      day = 'DAYS OVERDUE';
    };

    return (
      <div>
        <div id= { this.props.id } className="container task">
          <div className="row">
            <div className={`col-12 col-md-10 offset-1 task-content level-${this.props.level}`}>
              <div className="row">
                <div className="col-1 justify-content-center complete-box my-auto">
                  <input type="checkbox" onClick={() => this.props.archiveCompletedTask(this.props.id)}/>
                  <span className="checkmark"></span>
                </div>
                <div className="col-10 my-auto" onTouchStart={this.toggleCollapse}>
                  <p className="counter" onClick={(e) => {
                    this.toggleCalendar();
                  }}>
                    {month} {day}
                  </p>
                  {
                    this.state.isOpen && (
                      <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          minDate={moment().subtract(10, 'days')}
                          maxDate={moment().add(45, 'days')}
                          withPortal
                          inline />
                    )
                  }
                  {/* <p className="task-name">{this.props.taskName}</p> */}
                  <RIEInput
                    value={this.props.taskName}
                    className="m-0 align-self-center"
                    change={this.editTaskHLT}
                    propName='taskName'
                    validate={_.isString}
                    isDisabled= {!this.state.editing}/>
                </div>
                <Collapse className="col-12" isOpen={this.state.isCollapsed} >
                  <div className="row">
                    <div className={`col-10 offset-1 col-sm-8 offset-1 task-description edit-this-task-${this.props.taskID}`}>
                      <RIEInput
                        value={this.props.description}
                        className="m-0 align-self-center"
                        change={this.editTaskHLT}
                        propName='description'
                        validate={_.isString}
                        isDisabled= {!this.state.editing}/>
                    </div>
                    <div className={`col-2 col-sm-3 edit-buttons edit-this-task-${this.props.taskID}`}>
                      <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                        <button type="button" className="btn edit-button listen-for-me-edit-task" ref="editBtn" onClick={(e) => {
                          // this.props.handleOnEdit(this.props.id)
                          this.toggleEditHLT();
                        }}>Edit</button>
                        <button type="button" className="btn edit-button listen-for-me-delete-task" onClick={(e) => {
                          this.props.handleOnDelete(this.props.id);
                        }}> Delete </button>

                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
            <div className="col-1 edit-container edit-icon d-none d-sm-none d-md-block">
              <img src={editButton} alt='' onClick={this.toggleCollapse} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HigherLevelTask;
