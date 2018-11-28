import React, { Component } from 'react';
import editButton from '../../assets/edit.png';
import './alltasks.css';
import './lowerlevel.css';
import { Collapse } from 'reactstrap';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';

class LowerLevelTask extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isCollapsed: false,
      editing: false,
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);

    this.editTaskLLT = (taskedits) => {
      this.props.handleEditfn(taskedits, this.props.id);//sent up the line to tasklist then back to task container
    };
  };

  toggleCollapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  toggleEditLLT() {
    if (!this.state.editing) {
      this.refs.editBtn.innerHTML = 'Done';
    } else {
      this.refs.editBtn.innerHTML = 'Edit';
    }
    this.setState({
      editing: !this.state.editing,
    });
  }

  render() {
    if (this.props.dueDate === undefined) {
      var month = this.props.daysOld;
      var day = 'Days Old';
    } else {
      var dueDate = (this.props.dueDate).split(' ');
      month = dueDate[1];
      day = dueDate[2];
    };

    return (
        <div>
          <div id={this.props.id} className="container task">
            <div className="row">
              <div className={`col-12 col-md-10 offset-1 task-content level-${this.props.level}`}>
                <div className="row">
                  <div className="col-2 col-md-1 justify-content-center complete-box my-auto ">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="col-7 col-md-9 d-flex" onTouchStart={this.toggleCollapse}>
                    {/* <p className="m-0 align-self-center" ref="nameP">{this.props.taskName}</p> */}
                    <RIEInput
                      value={this.props.taskName}
                      className="m-0 align-self-center"
                      change={this.editTaskLLT}
                      propName='taskName'
                      validate={_.isString}
                      isDisabled= {!this.state.editing}/>
                  </div>
                  <div className="col-3 col-md-2 d-flex justify-content-center">
                    <div className="align-self-center text-center days-old-count" ref="dateDiv">
                      <p className="m-0">{month}</p>
                      <p className="m-0 days-old">{day}</p>
                      {/* not sure how to implement date... */}
                    </div>
                  </div>
                  <Collapse className="col-12 col-md-10 offset-1" isOpen={this.state.isCollapsed} >
                    <div className="row">
                      <div className={`col-10 col-sm-7 task-description edit-this-task-${this.props.taskID}`}>
                        {/* <p ref="descP">{this.props.description}</p> */}
                        <RIEInput
                          value={this.props.description}
                          className="m-0 align-self-center"
                          change={this.editTaskLLT}
                          propName='description'
                          validate={_.isString}
                          isDisabled= {!this.state.editing}/>
                      </div>
                      <div className={`col-12 col-sm-4 edit-this-task-${this.props.taskID}`}>
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
              <div className="col-1 edit-container edit-icon d-none d-sm-none d-md-block">
                <img src={editButton} alt='' onClick={this.toggleCollapse} />
              </div>
            </div>
          </div>
        </div>
      );
  };
}

export default LowerLevelTask;
