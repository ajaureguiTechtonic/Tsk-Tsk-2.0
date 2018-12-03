const authURL = 'http://127.0.0.1:4000/auth';
const axios = require('axios');

//Handle the loggin in of a user
export function _handleLogIn(props, email, password) {
  let postData = {
    email: email.toLowerCase(),
    password: password,
  };
  axios.post(`${authURL}/login`, postData)
  .then((jwt) => {
    sessionStorage.setItem('jwt-token', jwt.data.token);
    sessionStorage.setItem('user', jwt.data.name);
    sessionStorage.setItem('email', jwt.data.email);
    console.log('Logged In', jwt.data.email);
    props.checkLogin(jwt.data.auth);
  })
  .catch((jwt) => {
    console.log(jwt.response.data);
  });
}

//Handle registering a user, goes together with _validateAccount
export function _handleRegister(props, newUser) {
  axios.post(`${authURL}/register`, newUser)
  .then((jwt) => {
    console.log(jwt);
    sessionStorage.setItem('jwt-token', jwt.data.token);
    sessionStorage.setItem('user', jwt.data.name);
    sessionStorage.setItem('email', jwt.data.email);
    props.checkLogin(jwt.data.auth);
    document.getElementById('modal-signup');
  }).catch(() => {
    alert('An account with this email address already exists.');
  });
}

//Simple validation check, can expand to make more robust validation.
//Used before calling _handleRegister.
export function _validateAccount(user) {
  if (user.username === '') {
    console.log('Please enter a valid username');
    return false;
  } else if (user.email === '') {
    console.log('Please enter a valid email');
    return false;
  } else if (user.password === '') {
    console.log('Please enter a valid password');
    return false;
  } else {
    return true; // Good to move forward and register the user.
  }
}

//Verify the users token.
export function _verify() {
  let headers = { 'x-access-token': sessionStorage.getItem('jwt-token') };
  return axios.get(`${authURL}/verify`, { headers: headers });
}

//edit user info
export function _editUser(that, userEdits) {//// WARNING: there is no verification that the email being edited belongs to the user. XXX

  // let headers = {
  //   'x-access-token': sessionStorage.getItem('jwt-token'), //XXX may not need.
  // };

  //NOTE //may not need headers...
  // axios.put(`${authURL}/edituser`, userEdits, { headers: headers })

  // other end req.body.oldemail/newemail/username
  //userEdits format:
  // {
  // 	"oldemail": "u12@u12.com",
  // 	"newemail": "newguy@newguy.com",
  // 	"username": "u123"
  // }

  axios.put(`${authURL}/edituser`, userEdits)
  .then((response) => {
    console.log(response);
  }).catch((res) => {
    console.log('edit user fail res:', res);
  });
}
