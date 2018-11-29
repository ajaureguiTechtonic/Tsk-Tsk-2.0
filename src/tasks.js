const taskURL = 'http://127.0.0.1:4000/tsktsk';
const axios = require('axios');

//Query the DataBase and retrive the user's tasks.
export function _getTasks(location) {
  console.log('checking storage');
  let headers = {
    'x-access-token': sessionStorage.getItem('jwt-token'),
    'pathname': location,
  };
  return axios.get(taskURL, { headers: headers });
}

export function _createTask(task) {
  let headers = {
    'x-access-token': sessionStorage.getItem('jwt-token'),
  };
  axios.post(taskURL, task, { headers: headers })
  .then((response) => {
    task._id = response.data._id;
    this.setState({
      taskList: this.state.taskList.concat(task),
    });
  });
}
