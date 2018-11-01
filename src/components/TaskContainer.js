import React, { Component } from 'react';
import LowerLevelTask from './tasks/LowerLevelTask';
import HigherLevelTask from './tasks/HigherLevelTask';
import AddTaskButton from './AddTaskButton';
import AddTaskModal from '../components/modals/AddTaskModal';
import EditTaskModal from '../components/modals/EditTaskModal';
import DeleteTaskModal from '../components/modals/DeleteTaskModal';
import TaskList from './taskList';
import storedTasks from './storedTasks';
const store = require('store');

class TaskContainer extends Component{

  checkStorage() {
    var storageTasks;

    if (store.get('storedTasks').length > 0) {
      storageTasks = store.get('storedTasks');
    } else {
      storageTasks = storedTasks;
    };

    return storageTasks;
  };

  constructor (props) {
    super(props);

    let storageTasks = this.checkStorage();

    this.state = {
      addModal: false,
      taskList: storageTasks,
      editModal: false,
    };

    let currentTasks = store.get('storedTasks');

    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  createTask(task) {
    this.setState({
      taskList: this.state.taskList.concat(task),
    });
  };

  toggleAdd() {
    this.setState({
      addModal: !this.state.addModal,
    });
  }

  toggleEdit() {
    this.setState({
      editModal: !this.state.editModal,
    });
  }

  componentDidMount() {
    let storageTasks = this.checkStorage();

    this.setState({
      taskList: storageTasks,
    });
  };

  render() {
    // let tasks = this.state.taskList.map((task, i) => <LowerLevelTask key={i}  taskName={task.taskName} description={task.description}/>);
    const storageArray = this.state.taskList;
    store.set('storedTasks', storageArray);
    
    return (
      <div>
        <AddTaskButton handleOnClick={this.toggleAdd} />
        <AddTaskModal isOpen={this.state.addModal} handleOnClick={this.toggleAdd} createTask={this.createTask} />
        <TaskList taskList={this.state.taskList} handleOnClick={this.toggleEdit}/>
        <EditTaskModal isOpen={this.state.editModal} handleOnClick={this.toggleEdit} />
        <DeleteTaskModal isOpen={this.state.addModal} handleOnClick={this.toggle}/>
      </div>
    );
  }
};

export default TaskContainer;
