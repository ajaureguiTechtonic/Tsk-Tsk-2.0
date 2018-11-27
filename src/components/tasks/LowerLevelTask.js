import React, { Component } from 'react';
import editButton from '../../assets/edit.png';
import './alltasks.css';
import './lowerlevel.css';
import { Collapse } from 'reactstrap';

class LowerLevelTask extends Component {
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

    return (
        <div>
          <div id={this.props.id} className="container task">
            <div className="row">
              <div className={`col-12 col-md-10 offset-1 task-content level-${this.props.level}`}>
                <div className="row">
                  <div className="col-1 justify-content-center complete-box my-auto ">
                    <input type="checkbox" onClick={(e) => this.props.archiveCompletedTask(this.props.id)}/>
                    <span className="checkmark"></span>
                  </div>
                  <div className="col-8 col-sm-9 d-flex" onTouchStart={this.toggleCollapse}>
                    <p className="m-0 align-self-center">{this.props.taskName}</p>
                  </div>
                  <div className="col-2 d-flex justify-content-center">
                    <div className="align-self-center text-center days-old-count">
                      <p className="m-0">{month}</p>
                      <p className="m-0 days-old">{day}</p>
                    </div>
                  </div>
                  <Collapse className="col-12" isOpen={this.state.isCollapsed} >
                    <div className="row">
                      <div className={`col-10 offset-1 col-sm-8 offset-1 task-description edit-this-task-${this.props.taskID}`}>
                        <p>{this.props.description}</p>
                      </div>
                      <div className={`col-2 col-sm-3 edit-buttons edit-this-task-${this.props.taskID}`}>
                        <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                          <button type="button" className="btn edit-button listen-for-me-edit-task" onClick={(e) => this.props.handleOnEdit(this.props.id)}>Edit</button>
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
