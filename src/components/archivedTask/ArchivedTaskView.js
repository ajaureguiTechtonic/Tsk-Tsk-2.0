import React, { Component } from 'react';
import TaskList from '../../../src/components/taskContainer/taskList';
import storedTasks from '../../components/storedTasks';
const store = require('store');

class ArchivedTaskView extends Component{
  constructor (props) {
    super(props);

    this.storageTasks = this.checkStorage();
    this.archivedTaskToDatabase = this.archivedTaskToDatabase.bind(this);

    this.state = {
      taskList: this.storageTasks,
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



  archivedTaskToDatabase(oTask) {
    //Axios stuff
  }

  render() {

    store.set('storedTasks', this.state.taskList);
    return (
       <div>
         <nav>
        <TaskList taskList={this.state.taskList}/>
        </nav>
      </div>
    );
  }
};

export default ArchivedTaskView;
