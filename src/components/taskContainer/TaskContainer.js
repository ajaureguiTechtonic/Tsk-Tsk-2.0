import React, { Component } from 'react';
import { _editTask, _archiveCompletedTask, _deleteTask, _getTasks, _createTask } from '../../tasks.js';
import AddTaskButton from '../buttons/addTaskButton/AddTaskButton';
import AddTaskModal from '../../components/modals/AddTaskModal';
import EditTaskModal from '../../components/modals/EditTaskModal';
import DeleteTaskModal from '../../components/modals/DeleteTaskModal';
import TaskList from './taskList';
import MediaQuery from 'react-responsive';

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
    this.archiveCompletedTask = this.archiveCompletedTask.bind(this);
  };

  componentDidMount() {
    this.checkStorage();
  }

  checkStorage() {
    if (this.props.isLoggedIn === true) {
      _getTasks(this, this.props.location.pathname);
    } else {
      console.log('not able to bruh');
    }
  };

  createTask(task) {
    this.props.verify();
    _createTask(this, task);
  };

  deleteTask() {
    this.props.verify();
    _deleteTask(this);
  };

  archiveCompletedTask(id) {
    this.props.verify();
    _archiveCompletedTask(this, id);
  }

  editTask(taskEdits, id) {
    this.props.verify();
    _editTask(this, taskEdits, id);
  };

  toggleAdd() {
    this.props.verify();
    this.setState({ addModal: !this.state.addModal });
  };

  toggleDelete(id) {
    this.setState({ deleteModal: !this.state.deleteModal, taskToDelete: id });
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

    this.setState({ editModal: !this.state.editModal });
  };

  render() {
    return (
      <div>
        <TaskList taskList={this.state.taskList} handleOnEdit={this.toggleEdit} handleOnDelete={this.toggleDelete} handleEditfn={this.editTask} archiveCompletedTask={this.archiveCompletedTask}/>
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
