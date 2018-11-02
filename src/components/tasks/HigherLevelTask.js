import React,  { Component } from 'react';
import editButton from '../../assets/edit.png';
import { Collapse } from 'reactstrap';

class HigherLevelTask extends Component{
  constructor (props) {
    super(props);
    this.state = {
      isCollapsed: false,
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  render () {
    if (this.props.dueDate === undefined) {
      var month = this.props.daysOld;
      var day = 'Days Old';
    } else {
      var month = this.props.daysPastDue;
      var day = 'DAYS OVERDUE';
    };

    return (
      <div>
        <div className="container task">
          <div className="row">
            <div className={`col-12 col-md-10 offset-1 task-content level-${this.props.level}`}>
              <div className="row">
                <div className="col-1 justify-content-center complete-box my-auto">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </div>
                <div className="col-10 my-auto">
                  <p className="counter">{ month } { day }</p>
                  <p className="task-name">{ this.props.taskName }</p>
                </div>
                {/* This is the collapseable section of the task */}
                <Collapse isOpen = {this.state.isCollapsed} >
                  <div className="row">
                    <div className="col-10 offset-1 col-sm-7 collapse task-description edit-this-task-${task.taskID}">
                      <p>{ this.props.description }</p>
                    </div>
                    <div className="col-12 col-sm-4 collapse edit-this-task-${task.taskID}">
                      <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                        <button type="button" className="btn edit-button listen-for-me-edit-task" onClick={this.props.handleOnEdit}>Edit</button>
                        <button type="button" className="btn edit-button listen-for-me-delete-task" onClick={(e) => {this.props.handleOnDelete(this.props.id);}}>Delete</button>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
            <div className="col-1 edit-container edit-icon d-none d-sm-none d-md-block">
              <img src={ editButton } onClick={this.toggleCollapse} />
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default HigherLevelTask;
