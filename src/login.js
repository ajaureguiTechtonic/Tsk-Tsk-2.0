const axios = require('axios');

class LogIn {
  init() {
    this.authURL = 'http://127.0.0.1:4000/auth/';
    this.taskURL = 'http://127.0.0.1:4000/tsktsk';
    // this.$loginModal = $('#login-modal');
    // this.$registerModal = $('#register-form');
    this._bindEvents();
  }

  _bindEvents() {
    //Check to verify log in status
    // this.$loginModal.on('submit', $.proxy(this._handleLogIn, this));
    // this.$loginHeader.on('click', '.log-out', $.proxy(this.LogOut, this));
    // this.$registerModal.on('submit', $.proxy(this._handleRegister, this));
  }

  // _handleRegister(e) {
  //   // //HANDLE REGISTERING A NEW USER SEND FIRST NAME, LAST NAME, EMAIL, AND PASSWORD TO THE BACKEND TO ADD A USER
  //   e.preventDefault();
  //   let email = $('#register-email').val();
  //
  //   $.ajax({
  //     url: `${this.loginURL}register`,
  //     type: 'POST',
  //     contentType: 'application/x-www-form-urlencoded',
  //     data: $(e.target).serialize(),
  //   }).done((token) => {
  //     this._setToken(token);
  //     this.$registerModal.modal('hide');
  //     $('#login-email').val(email);
  //   }).fail(function () {
  //     console.log('Error registering user.');
  //   });
  // };

  //Polls every so often to check and validate token
  // _setTokenPoll() {
  //   setTimeout(() => {
  //     this.CheckTokenStatus();
  //   }, 45000);
  // }
  //
  // // This
  // _handleLogIn (email, password) {
  //   console.log(email, password);
  //   let loginData = {
  //     email: email,
  //     password: password,
  //   };
  //
  //   axios.post(`${this.authURL}/login`, loginData)
  //   .then((jwt) => {
  //     console.log(jwt.data);
  //     sessionStorage.setItem('jwt-token', jwt.data.token);
  //     this.setState({ toDashboard: true });
  //   });
  // }

  // LogOut() {
  //   //DUMP USER TOKEN FROM LOCALSTORAGE AND MAKE THE LOCK SCREEN MODAL APPEAR BLOCKING USER INTERACTION WITH THE APP.
  //   $.ajax({
  //     url: `${this.loginURL}logout`,
  //     type: 'GET',
  //   }).done((jwt) => {
  //     this._dumpToken();
  //     this._lockScreenModal();
  //     this._switchLogInHeader(false, 'Stranger');
  //     gDataTable.handleEventTrigger('objUpdate', []);
  //     console.log('You are logged out.');
  //   }).fail(()=>{ false });
  // }
  //
  // _switchLogInHeader(bool, data) {
  //   if (bool === false) {
  //     this.$loginModal.modal('show'); // forcing login modal to show
  //     this.$loginHeader.find('span').text(`Hello, ${data}! `);
  //     this.$loginHeader.find('a').text('').addClass('log-in');
  //   } else {
  //     this.$loginModal.modal('hide'); //forcing login modal to close
  //     this.$loginHeader.find('span').text(`Welcome, ${data}!, `);
  //     this.$loginHeader.find('a').text('Log Out').addClass('log-out');
  //   }
  // }
  //
  // _setToken(jwt, name) {
  //   if (jwt.auth) {
  //     sessionStorage.setItem('jwt_token', jwt.token);
  //     sessionStorage.setItem('user', name);
  //     console.log('token granted');
  //   }
  // }
  //
  // _lockScreenModal() {
  //   this.$loginModal.modal({ backdrop: 'static', keyboard: false, show: !this.isLoggedIn });
  // }
  //
  // //Checks Token Status at the server (Am I still logged in?)
  // CheckTokenStatus() {
  //   // VERIFY USERS AUTH TOKEN VIA GET REQUEST
  //   $.ajax({
  //     url: `${this.loginURL}verify`,
  //     type: 'GET',
  //     headers: { 'x-access-token': sessionStorage.getItem('jwt_token') },
  //   }).done((jwt) => {
  //     if (jwt.auth  === false) {
  //       this.LogOut();
  //     } else {
  //       console.log('Token still valid');
  //       gDataTable.init();
  //       this._switchLogInHeader(true, sessionStorage.getItem('user'));
  //     }
  //   }).fail(() => { false });
  // }
  //
  // //Always checked on page load. Token should be wiped when expired or logged out
  // _getToken() {
  //   // console.log(sessionStorage.getItem('jwt_token') || false);
  //   return sessionStorage.getItem('jwt_token') || false;
  // }
  //
  // _dumpToken() {
  //   sessionStorage.removeItem('jwt_token');
  //   sessionStorage.removeItem('user');
  // }
}
