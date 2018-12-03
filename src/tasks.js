const taskURL = 'http://127.0.0.1:4000/tsktsk';
const axios = require('axios');

//Query the DataBase and retrive the user's tasks.
export function _getTasks(that, location) {
  console.log('checking storage');
  let headers = {
    'x-access-token': sessionStorage.getItem('jwt-token'),
    'pathname': location,
  };
  axios.get(taskURL, { headers: headers })
  .then((response) => {
    that.storageTasks = response.data;
    that.setState({
      taskList: response.data,
    });
  });
}

// Create a new task.
export function _createTask(that, task) {
  let headers = {
    'x-access-token': sessionStorage.getItem('jwt-token'),
  };
  axios.post(taskURL, task, { headers: headers })
  .then((response) => {
    task._id = response.data._id;
    that.setState({
      taskList: that.state.taskList.concat(task),
    });
  });
}

//Delete a task.
export function _deleteTask(that) {
  let headers = {
    'x-access-token': sessionStorage.getItem('jwt-token'),
  };

  let id = that.state.taskToDelete;
  console.log(that.state.taskToDelete);

  axios({
    method: 'delete',
    url: 'http://127.0.0.1:4000/tsktsk',
    data: {
      _id: that.state.taskToDelete,
    },
    headers,
  })
    .then((response) => {
    const taskList = that.state.taskList;
    const index = taskList.findIndex(task => task._id === id);
    taskList.splice(index, 1);
    that.setState({
      taskList: taskList,
    });
  })
    .catch(error => console.log(error));
}

//Archive a task, mark as completed.
export function _archiveCompletedTask(that, id) {
  console.log('hey you clicked me! Im done!');
  let headers = {
    'x-access-token': sessionStorage.getItem('jwt-token'),
  };
  axios({
    method: 'put',
    url: `http://127.0.0.1:4000/tsktsk/${id}`,
    data: {
      completed: true,
      dateCompleted: new Date(),
    },
    headers,
  })
    .then((response) => {
      const taskList = that.state.taskList;
      const index = taskList.findIndex(task => task._id === id);
      taskList.splice(index, 1);
      that.setState({
        taskList: taskList,
      });
    })
     .catch(error => console.log(error));
}

export function _editTask(that, taskEdits, id) {
  let tempList = that.state.taskList.slice();
  let eIndex = tempList.findIndex(task => task._id === id);

  let headers = {
    'x-access-token': sessionStorage.getItem('jwt-token'),
  };

  axios.put(`${taskURL}/${id}`, taskEdits, { headers: headers })
  .then((response) => {
    tempList[eIndex] = response.data;
    that.setState({
      taskList: tempList,
    });
  }).catch((res) => {
    console.log('edit fail res:', res);
  });
}
