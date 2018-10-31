import React, { Component } from 'react';
import LowerLevelTask from './tasks/LowerLevelTask';
import HigherLevelTask from './tasks/HigherLevelTask';
import AddTaskButton from './AddTaskButton';
import AddTaskModal from '../components/modals/AddTaskModal';
import EditTaskModal from '../components/modals/EditTaskModal';
import DeleteTaskModal from '../components/modals/DeleteTaskModal';
import tasks from './taskList';
const store = require('store');

class TaskContainer extends Component{
  constructor (props) {
    super(props);
    this.state = {
      addModal: false,
      taskList: tasks,
    };

    store.set('tasks', tasks);

    this.toggle = this.toggle.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  createTask(task) {
    let tasks = this.state.taskList;
    tasks.push(task);
    this.setState({
      taskList: tasks,
    });
  };

  toggle() {
    this.setState({
      addModal: !this.state.addModal,
    });
  };

  componentDidMount() {
    console.log('hello');
    let tasks = this.state.taskList.map((task) => {
      console.log(task);
      if (this.state.taskList) {
        console.log('in here');
        return <div>{<LowerLevelTask taskName={task.taskName} description={task.taskDescription}/>}</div>;
      }
    });
    console.log(tasks);
    return tasks;
  }

  render() {

    return (
      <div>
        Welcome to TSK-TSK, coolest Task Management App ever!
        {store.get('tasks')[0].taskName}
        <AddTaskButton handleOnClick={this.toggle} />
        {tasks[0]}
        <AddTaskModal isOpen={this.state.addModal} handleOnClick={this.toggle} createTask={this.createTask}/>
        <EditTaskModal />
        <DeleteTaskModal/>
      </div>
    );
  }
};

export default TaskContainer;
