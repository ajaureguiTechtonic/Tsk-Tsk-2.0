const authURL = 'http://127.0.0.1:4000/auth';
const axios = require('axios');

//Handle the loggin in of a user
export function _handleLogIn(props, email, password) {
  let postData = {
    email: email,
    password: password,
  };

  axios.post(`${authURL}/login`, postData)
  .then((jwt) => {
    console.log('Logged In');
    console.log(this);
    props.checkLogin(jwt);
  })
  .catch((jwt) => {
    console.log(jwt.response.data);
  });
}
