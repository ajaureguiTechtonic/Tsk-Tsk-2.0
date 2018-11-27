import React, { Component } from 'react';
import AddTaskButton from '../buttons/addTaskButton/AddTaskButton';
import AddTaskModal from '../../components/modals/AddTaskModal';
import EditTaskModal from '../../components/modals/EditTaskModal';
import DeleteTaskModal from '../../components/modals/DeleteTaskModal';
import TaskList from './taskList';
import storedTasks from '../../components/storedTasks';
import MediaQuery from 'react-responsive';
const store = require('store');
const taskURL = 'http://127.0.0.1:4000/tsktsk';
const axios = require('axios');

class TaskContainer extends Component {
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

    this.storageTasks = this.checkStorage();
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  };

  checkStorage() {
    console.log('checking storage');
    let headers = {
      'x-access-token': sessionStorage.getItem('jwt-token'),
    };

    axios.get(taskURL, { headers: headers })
    .then((response) => {
      console.log(response.data);
      this.storageTasks = response.data;
      this.setState({
        taskList: this.storageTasks,
      });
      return this.storageTasks;
    });
  }

  createTask(task) {
    let headers = {
      'x-access-token': sessionStorage.getItem('jwt-token'),
    };
    axios.post(taskURL, task, { headers: headers })
    .then((response) => {
      console.log(response);
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
    let headers = {
      'x-access-token': sessionStorage.getItem('jwt-token'),
    };

    let id = this.state.taskToDelete;
    console.log(id);
    axios({
      method: 'delete',
      url: 'http://127.0.0.1:4000/tsktsk',
      data: {
        _id: id,
      },
      headers,
    })
    .then((response) => {
      const taskList = this.state.taskList;
      const index = taskList.findIndex(task => task._id === id);
      taskList.splice(index, 1);
      this.setState({
        taskList: taskList,
      });
    })
    .catch(error => console.log(error));
  };

  editTask(editedTask, index) {
    let tempList;
    tempList = this.state.taskList.slice();
    tempList[index] = editedTask;
    this.setState({
      taskList: tempList,
    });
  };

  render() {
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
