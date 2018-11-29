import React, { Component } from 'react';
import editButton from '../../assets/transparent.png';
import './alltasks.css';
import './higherlevel.css';
import { Collapse } from 'reactstrap';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';

class HigherLevelTask extends Component{
  constructor (props) {
    super(props);

    this.state = {
      isCollapsed: false,
      editing: false,
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);

    this.editTaskHLT = (taskedits) => {
      this.props.handleEditfn(taskedits, this.props.id);//sent up the line to tasklist then back to task container
    };
  };

  toggleCollapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  toggleEditHLT() {
    if (!this.state.editing) {
      this.refs.editBtn.innerHTML = 'Done';
    } else {
      this.refs.editBtn.innerHTML = 'Edit';
    }
    this.setState({
      editing: !this.state.editing,
    });
  }

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
                  <p className="counter">{month} {day}</p>
                  {/* <p className="task-name">{this.props.taskName}</p> */}
                  <RIEInput
                    value={this.props.taskName}
                    className="m-0 align-self-center"
                    change={this.editTaskHLT}
                    propName='taskName'
                    validate={_.isString}
                    isDisabled= {!this.state.editing}/>
                </div>
                <div className="col-1 d-flex right-content">
                  <div className="col-12 d-inline-flex dropdown" onClick={this.toggleCollapse}>
                    <img src={editButton} alt='v' className='dropdown-image'/>
                  </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default HigherLevelTask;
