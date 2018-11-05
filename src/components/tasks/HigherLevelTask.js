import React, { Component } from 'react';
import editButton from '../../assets/edit.png';
import './alltasks.css';
import './higherlevel.css';
import { Collapse } from 'reactstrap';

class HigherLevelTask extends Component{
  constructor (props) {
    super(props);

    this.state = {
      isCollapsed: false,
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  };

  toggleCollapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

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
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </div>
                <div className="col-10 my-auto" onTouchStart={this.toggleCollapse}>
                  <p className="counter">{month} {day}</p>
                  <p className="task-name">{this.props.taskName}</p>
                </div>
                <Collapse className="col-12 col-md-10 offset-1" isOpen={this.state.isCollapsed} >
                  <div className="row">
                    <div className={`col-10 col-sm-7 task-description edit-this-task-${this.props.taskID}`}>
                      <p>{this.props.description}</p>
                    </div>
                    <div className={`col-12 col-sm-4 offset-1 edit-this-task-${this.props.taskID}`}>
                      <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                        <button type="button" className="btn edit-button listen-for-me-edit-task" onClick={(e) => this.props.handleOnEdit(this.props.id)}>Edit</button>
                        <button type="button" className="btn edit-button listen-for-me-delete-task" onClick={(e) => {
                          this.props.handleOnDelete(this.props.id);
                        }}>Delete</button>

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
