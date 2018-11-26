import React, { Component } from 'react';
import AddTaskButton from '../buttons/addTaskButton/AddTaskButton';
import AddTaskModal from '../../components/modals/AddTaskModal';
import EditTaskModal from '../../components/modals/EditTaskModal';
import DeleteTaskModal from '../../components/modals/DeleteTaskModal';
import TaskList from './taskList';
import storedTasks from '../../components/storedTasks';
import MediaQuery from 'react-responsive';
const store = require('store');

class TaskContainer extends Component{
  constructor (props) {
    super(props);

    this.storageTasks = this.checkStorage();
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.addTaskToDatabase = this.addTaskToDatabase.bind(this);

    this.state = {
      addModal: false,
      editModal: false,
      deleteModal: false,
      taskList: this.storageTasks,
      taskToDelete: '',
      taskIdToEdit: '',
      taskIndex: '',
      taskToEdit: {},
    };
  };

  checkStorage() {
    if (store.get('storedTasks')) {
      this.storageTasks = store.get('storedTasks');
    } else {
      this.storageTasks = storedTasks;
    };

    return this.storageTasks;
  };

  createTask(task) {
    this.setState({
      taskList: this.state.taskList.concat(task),
    });
  };

  toggleAdd() {
    this.setState({
      addModal: !this.state.addModal,
    });
  };

  toggleEdit(id) {
    let taskIndex;
    if (!this.state.editModal) {
      const taskList = this.state.taskList;
      taskIndex = taskList.findIndex(task => task.taskID === id);
      this.setState({
        taskIdToEdit: id,
        taskIndex: taskIndex,
        taskToEdit: this.state.taskList[taskIndex],
      });
    }

    this.setState({
      editModal: !this.state.editModal,
    });
  };

  toggleDelete(id) {
    this.setState({
      deleteModal: !this.state.deleteModal,
      taskToDelete: id,
    });
  };

  deleteTask() {
    const idToDelete = this.state.taskToDelete;
    const taskList = this.state.taskList;
    const index = taskList.findIndex(task => task.taskID === idToDelete);
    taskList.splice(index, 1);
  };

  editTask(editedTask, index) {
    let tempList;
    tempList = this.state.taskList.slice();
    tempList[index] = editedTask;
    this.setState({
      taskList: tempList,
    });
  };

  addTaskToDatabase(oTask) {
    //Axios stuff
  }
  
  render() {
    store.set('storedTasks', this.state.taskList);

    return (
      <div>
        <TaskList taskList={this.state.taskList} handleOnEdit={this.toggleEdit} handleOnDelete={this.toggleDelete}/>
        <MediaQuery maxWidth={915}>

          {(matches) => {
            if (matches) {
              let style = 'small-add-task-button';
              return <AddTaskButton handleOnClick={this.toggleAdd} buttonClass={style}/>;
            } else {
              let style = 'normal-add-task-button';
              return <AddTaskButton handleOnClick={this.toggleAdd} buttonClass={style}/>;
            }
          }}

        </MediaQuery>
        <AddTaskModal isOpen={this.state.addModal} handleOnClick={this.toggleAdd} createTask={this.createTask} />
        <EditTaskModal isOpen={this.state.editModal} handleOnClick={this.toggleEdit} handleEditIndex={this.state.taskIndex} forwardTask={this.state.taskToEdit} handleEditfn={this.editTask} />
        <DeleteTaskModal isOpen={this.state.deleteModal} handleOnClick={this.toggleDelete} handleDeleteTask={this.deleteTask}/>
      </div>
    );
  }
};

export default TaskContainer;
