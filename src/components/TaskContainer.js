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
      taskList: [],
    };

    store.set('storedTasks', storedTasks);

    this.toggle = this.toggle.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  createTask(task) {
    this.setState({
      taskList: this.state.taskList.concat(task),
    });
  };

  toggle() {
    this.setState({
      addModal: !this.state.addModal,
    });
  };

  componentDidMount() {
    this.setState({
      taskList: storedTasks,
    });
  };

  render() {
    let tasks = this.state.taskList.map((task, i) => <LowerLevelTask key={i}  taskName={task.taskName} description={task.description}/>);

    return (
      <div>
        Welcome to TSK-TSK, coolest Task Management App ever!
        {store.get('storedTasks')[0].taskName}
        <AddTaskButton handleOnClick={this.toggle} />
        <div>
          {tasks}
        </div>
        <AddTaskModal isOpen={this.state.addModal} handleOnClick={this.toggle} createTask={this.createTask}/>
        <EditTaskModal />
        <DeleteTaskModal/>
      </div>
    );
  }
};

export default TaskContainer;
