import React, { Component } from 'react';
import TaskList from '../../../src/components/taskContainer/taskList';
import storedTasks from '../../components/storedTasks';
const store = require('store');
const taskURL = 'http://127.0.0.1:4000/tsktsk';
const axios = require('axios');

class ArchivedTaskView extends Component{
  constructor (props) {
    super(props);
    this.state = {
      taskList: [],
    };

    this.storageTasks = this.checkStorage();
    this.archivedTaskToDatabase = this.archivedTaskToDatabase.bind(this);
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
