import React, { Component } from 'react';
import LowerLevelTask from './tasks/LowerLevelTask';
import HigherLevelTask from './tasks/HigherLevelTask';
import AddTaskButton from './AddTaskButton';
import AddTaskModal from '../components/modals/AddTaskModal';

class TaskContainer extends Component{
  constructor (props) {
    super(props);
    this.state = { addModal: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ addModal: !this.state.addModal });
  }

  render() {
    return (
      <div>
        Welcome to TSK-TSK, coolest Task Management App ever!
        <AddTaskButton onClick={this.toggle} />
        <AddTaskModal isOpen={this.state.addModal} onClick={this.toggle} />
      </div>
    );
  }
};

export default TaskContainer;
