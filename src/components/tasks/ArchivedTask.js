import React, { Component } from 'react';
import editButton from '../../assets/transparent.png';
import './alltasks.css';
import './lowerlevel.css';
import './archivedtask.css';
import { Collapse } from 'reactstrap';

class LowerLevelTask extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isCollapsed: false,
      editing: false,
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);

  };

  toggleCollapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  render() {
    let options = { weekday: 'short', month: 'short', day: '2-digit' };
    let unparsedDate = new Date(this.props.dateCompleted);
    var dueDate = unparsedDate.toLocaleDateString('en-US', options);
    console.log(dueDate);
    let dueDateArray = dueDate.split(' ');
    let month = dueDateArray[1];
    let day = dueDateArray[2];

    return (
        <div>
          <div id={this.props.id} className="container task">
            <div className="row">
              <div className={`col-12 col-md-10 offset-1 task-content level-${this.props.level}`}>
                <div className="row">
                  <div className="col-9 col-sm-10 d-flex" onTouchStart={this.toggleCollapse}>
                    {<p className="m-0 align-self-center" ref="nameP">{this.props.taskName}</p>}
                  </div>
                  <div className="col-2 d-flex right-content">
                    <div className="col-10 days-old-count" ref="dateDiv">
                      <p className="date m-0">{month}</p>
                      <p className="date m-0">{day}</p>
                      {/* not sure how to implement date... */}
                    </div>
                    <div className="col-2 d-inline-flex dropdown" onClick={this.toggleCollapse}>
                      <img src={editButton} alt='v' className='dropdown-image'/>
                    </div>
                  </div>
                  <Collapse className="col-12" isOpen={this.state.isCollapsed} >
                    <div className="row">
                      <div className={`col-11 task-description edit-this-task-${this.props.taskID}`}>
                        { <p ref="descP">{this.props.description}</p> }
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
