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
  constructor (props) {
    super(props);
    this.state = {
      addModal: false,
      taskList: [],
      editModal: false,
    };

    store.set('storedTasks', storedTasks);

    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.createTask = this.createTask.bind(this);
  };

  createTask(task) {
    this.setState({
      taskList: this.state.taskList.concat(task),
    });
    // console.log(this.state.taskList);
  };

  toggleAdd() {
    this.setState({
      addModal: !this.state.addModal,
    });
  };

  toggleEdit() {
    this.setState({
      editModal: !this.state.editModal,
    });
  };

  componentDidMount() {
    this.setState({
      taskList: storedTasks,
    });
  };

  render() {
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
