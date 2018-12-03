import React, { Component } from 'react';
import editButton from '../../assets/transparent.png';
import './alltasks.css';
import './lowerlevel.css';
import { Collapse } from 'reactstrap';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker'; //for date picker
import { RIEInput } from 'riek';
import _ from 'lodash';

class LowerLevelTask extends Component {
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

  editTaskLLT(taskedits) {
    if (this.state.editing) {
      if (taskedits.taskTitle) {
        this.tempEditHolder.taskTitle = taskedits.taskTitle;
      }
      if (taskedits.taskDescription) {
        this.tempEditHolder.taskDescription = taskedits.taskDescription;
      }
      if (taskedits.dueDate) {
        this.tempEditHolder.dueDate = taskedits.dueDate;
      }
    }
    console.log(this.tempEditHolder);
  };

  toggleCollapse() {
    if (this.state.isCollapsed) {// clears edits (by no submission) and resets edit state
      this.refs.editBtn.innerHTML = 'Edit';
      this.onEditChangeClass(false);
      this.setState({
        editing: false,
      });
    }

    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  //edit forwarding here
  forwardEdits(editsToFWD) {
    //sent up the line to tasklist then back to task container
    if (this.state.editing && !_.isEmpty(editsToFWD)) {// this cuts down on the erroneous put req's when spaming the dropdown toggle, but not completely.
      this.props.handleEditfn(editsToFWD, this.props.id);
    }
  }

  onEditChangeClass(bool) {
    if (bool) {
      this.refs.titleRef.classList.add("edit-mode-item");
      this.refs.dateRef.classList.add("edit-mode-item");
      this.refs.descRef.classList.add("edit-mode-item");
      this.refs.checkRef.classList.add("disable-on-edit");
    } else {
      this.refs.titleRef.classList.remove("edit-mode-item");
      this.refs.dateRef.classList.remove("edit-mode-item");
      this.refs.descRef.classList.remove("edit-mode-item");
      this.refs.checkRef.classList.remove("disable-on-edit");
    }
  }

  toggleEditLLT() {
    if (!this.state.editing) {
      this.refs.editBtn.innerHTML = 'Done';
      this.onEditChangeClass(true);
    } else {
      this.refs.editBtn.innerHTML = 'Edit';
      this.onEditChangeClass(false);
      this.forwardEdits(this.tempEditHolder);
      this.tempEditHolder = {};
    }
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleChange (date) {
    this.editTaskLLT({ dueDate: date._d });
    this.toggleCalendar();
  }

  toggleCalendar (e) {
    if (this.state.editing) {
      e && e.preventDefault();
      this.setState({isOpen: !this.state.isOpen});
    }
  }


  render() {
    if (this.props.dueDate === undefined) {
      var month = this.props.daysOld;
      var day = 'Days Old';
    } else {
      let options = { weekday: 'short', month: 'short', day: '2-digit'}
      let unparsedDate = new Date(this.props.dueDate);
      var dueDate = unparsedDate.toLocaleDateString('en-US', options);
      let dueDateArray = dueDate.split(' ');
      month = dueDateArray[1];
      day = dueDateArray[2];
    };

    let taskTitleLLT = this.props.taskName || 'title';
    let taskDescriptionLLT = this.props.description || 'description';

    return (
        <div>
          <div id={this.props.id} className="container task">
            <div className="row">
              <div className={`col-12 col-md-10 offset-1 task-content level-${this.props.level}`}>
                <div className="row">
                  <div ref="checkRef" className="col-1 justify-content-center complete-box my-auto ">
                    <input type="checkbox" onClick={() => this.props.archiveCompletedTask(this.props.id)}/>
                    <span className="checkmark"></span>
                  </div>
                  <div className="col-8 col-sm-9 d-flex" ref="titleRef">
                    {/* <p className="m-0 align-self-center" ref="nameP">{this.props.taskName}</p> */}
                    <RIEInput
                      value={taskTitleLLT}
                      className="m-0 align-self-center"
                      change={this.editTaskLLT}
                      propName='taskTitle'
                      validate={_.isString}
                      isDisabled= {!this.state.editing}/>
                  </div>
                  <div className="col-2 d-flex right-content">
                    <div className="col-10 days-old-count" ref="dateRef" onClick={(e) => {
                      this.toggleCalendar();
                    }}>
                      <p className="date m-0">{month}</p>
                      <p className="date m-0">{day}</p>
                    </div>
                    {
                      this.state.isOpen && (
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            minDate={moment().subtract(10, 'days')}
                            maxDate={moment().add(45, 'days')}
                            withPortal
                            inline >
                              <div style={{color: 'blue', fontSize: '1.5em', textAlign: 'center', cursor: 'pointer' }} onClick={(e) => {
                                this.toggleCalendar();
                              }}>
                              <strong>Close</strong>
                              </div>
                          </DatePicker>
                      )
                    }
                    <div className="col-2 d-inline-flex dropdown" onClick={this.toggleCollapse}>
                      <img src={editButton} alt='v' className='dropdown-image'/>
                    </div>
                  </div>
                  <Collapse className="col-12" isOpen={this.state.isCollapsed} >
                    <div className="row">
                      <div className={`col-10 offset-1 col-sm-8 offset-1 task-description edit-this-task-${this.props.taskID}`} ref="descRef">
                        {/* <p ref="descP">{this.props.description}</p> */}
                        <RIEInput
                          value={taskDescriptionLLT}
                          className="m-0 align-self-center"
                          change={this.editTaskLLT}
                          propName='taskDescription'
                          validate={_.isString}
                          isDisabled= {!this.state.editing}/>
                      </div>
                      <div className={`col-2 col-sm-3 edit-buttons edit-this-task-${this.props.taskID}`}>
                        <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                          <button type="button" className="btn edit-button listen-for-me-edit-task" ref="editBtn" onClick={(e) => {
                            // this.props.handleOnEdit(this.props.id); XXX deleteME
                            this.toggleEditLLT();
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
            </div>
          </div>
        </div>
      );
  };
}

export default LowerLevelTask;
