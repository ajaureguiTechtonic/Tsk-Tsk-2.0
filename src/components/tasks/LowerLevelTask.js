import React, { Component } from 'react';
import editButton from '../../assets/edit.png';
import { Collapse } from 'reactstrap';

class LowerLevelTask extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isCollapsed: false,
    };
    console.log(this.props.id);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  render() {
    if (this.props.dueDate === undefined) {
      var month = this.props.daysOld;
      var day = 'Days Old';
    } else {
      var dueDate = (this.props.dueDate).split(' ');
      var month = dueDate[1];
      var day = dueDate[2];
    };

    return (
        <div>
          <div id={ this.props.id } className="container task">
            <div className="row">
              <div className={`col-12 col-md-10 offset-1 task-content level-${ this.props.level }`}>
                <div className="row">
                  <div className="col-2 col-md-1 justify-content-center complete-box my-auto ">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="col-7 col-md-9 d-flex">
                    <p className="m-0 align-self-center">{ this.props.taskName }</p>
                  </div>
                  <div className="col-3 col-md-2 d-flex justify-content-center">
                    <div className="align-self-center text-center days-old-count">
                      <p className="m-0">{ month }</p>
                      <p className="m-0 days-old">{ day }</p>
                    </div>
                  </div>
                  {/* This is the collapseable section of the task */}
                  <Collapse isOpen = {this.state.isCollapsed} >
                    <div className="row">
                      <div className="col-10 offset-1 col-sm-7  task-description edit-this-task-${task.taskID}">
                        <p>{ this.props.description }</p>
                      </div>
                      <div className="col-12 col-sm-4  edit-this-task-${task.taskID}">
                        <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                          <button type="button" className="btn edit-button listen-for-me-edit-task" onClick={this.props.handleOnEdit}>Edit</button>
                          <button type="button" className="btn edit-button listen-for-me-delete-task" onClick={(e) => {this.props.handleOnDelete(this.props.id)}}> Delete </button>
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
  };
}

export default LowerLevelTask;
