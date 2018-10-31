import React, { Component } from 'react';
import LowerLevelTask from './tasks/LowerLevelTask';
import HigherLevelTask from './tasks/HigherLevelTask';
import AddTaskButton from './AddTaskButton';
import AddTaskModal from '../components/modals/AddTaskModal';
import EditTaskModal from '../components/modals/EditTaskModal';
import DeleteTaskModal from '../components/modals/DeleteTaskModal';
import storedTasks from './taskList';
const store = require('store');

class TaskContainer extends Component{
  constructor (props) {
    super(props);
    this.state = {
      addModal: false,
      tasks: [],
    };

    store.set('storedTasks', storedTasks);

    this.toggle = this.toggle.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  createTask(aTasks) {
    let newTask = aTasks.map((task, i) => {
      return <LowerLevelTask key={i} taskName={task.taskName} description={task.description}/>;
    });
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  toggle() {
    this.setState({
      addModal: !this.state.addModal,
    });
  };

  componentDidMount() {
    this.createTask(storedTasks);
  };

  render() {
    return (
      <div>
        Welcome to TSK-TSK, coolest Task Management App ever!
        {store.get('storedTasks')[0].taskName}
        <AddTaskButton handleOnClick={this.toggle} />
        <div>
          {this.state.tasks}
        </div>
        <AddTaskModal isOpen={this.state.addModal} handleOnClick={this.toggle} createTask={this.createTask}/>
        <EditTaskModal />
        <DeleteTaskModal/>
      </div>
    );
  }
};

export default TaskContainer;
