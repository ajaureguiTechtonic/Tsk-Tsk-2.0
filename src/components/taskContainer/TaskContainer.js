import React, { Component } from 'react';
import AddTaskButton from '../buttons/addTaskButton/AddTaskButton';
import AddTaskModal from '../../components/modals/AddTaskModal';
import EditTaskModal from '../../components/modals/EditTaskModal';
import DeleteTaskModal from '../../components/modals/DeleteTaskModal';
import TaskList from './taskList';
import storedTasks from '../../components/storedTasks';
import MediaQuery from 'react-responsive';
import _ from 'lodash';

const store = require('store');
const taskURL = 'http://127.0.0.1:4000/tsktsk';
const axios = require('axios');


class TaskContainer extends Component{
  constructor (props) {
    super(props);

    this.state = {
      addModal: false,
      editModal: false,
      deleteModal: false,
      taskList: [],
      taskToDelete: '',
      taskIdToEdit: '',
      taskIndex: '',
      taskToEdit: {},
    };

    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.checkStorage();
  };

  checkStorage() {
    if (this.props.isLoggedIn === true) {
      console.log('checking storage');
      let headers = {
        'x-access-token': sessionStorage.getItem('jwt-token'),
      }
      axios.get(taskURL, { headers: headers })
      .then((response) => {
        console.log(response.data);
        this.storageTasks = response.data;
        this.setState({
          taskList: response.data,
        });
      });
    } else {
      console.log("not able to bruh");
      }
    };

  createTask(task) {
    // console.log(task);
    let headers = {
      'x-access-token': sessionStorage.getItem('jwt-token'),
    };
    axios.post(taskURL, task, { headers: headers })
    .then((response) => {
      // console.log(response);
      this.setState({
        taskList: this.state.taskList.concat(task),
      });
    });
  };

  toggleAdd() {
    this.setState({
      addModal: !this.state.addModal,
    });
  };

  toggleEdit(id) { // is fed id. // NOTE: obsolete, remove.
    let taskIndex;
    if (!this.state.editModal) {
      const taskList = this.state.taskList;
      taskIndex = taskList.findIndex(task => task.id === id); // not necessary?
      this.setState({
        taskIdToEdit: id, // XXX: no longer needed remove from state
        taskIndex: taskIndex, // XXX: no longer needed remove from state and componets below, chase down the line. // NOTE: leave edit task alone those are block scoped and are unrelated.
        taskToEdit: this.state.taskList[taskIndex], //XXX: no longer needed remove from state and componets below, chase down the line.
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

  editTask(editedTask, id) {
    let tempList;
    tempList = this.state.taskList.slice();

    let eIndex = tempList.findIndex(task => task._id === id);
    let tTask = _.clone(tempList[eIndex]);

    if (editedTask.taskTitle) {
      tTask.taskTitle = editedTask.taskTitle;
    }
    if (editedTask.taskDescription) {
      tTask.taskDescription = editedTask.taskDescription;
    }
    if (editedTask.dateDue) {
      tTask.dateDue = editedTask.dateDue;
    }

    tempList[eIndex] = tTask;
    this.setState({
      taskList: tempList,
    });
  };

  addTaskToDatabase(oTask) {
    //Axios stuff
  }

  render() {
    return (
      <div>
        <TaskList taskList={this.state.taskList} handleOnEdit={this.toggleEdit} handleOnDelete={this.toggleDelete} handleEditfn={this.editTask}/>
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
