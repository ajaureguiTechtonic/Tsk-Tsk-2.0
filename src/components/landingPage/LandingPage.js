import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../main.css';
import MobileView from '../../../src/assets/mobile-view.png';
import MockupImage from '../../../src/assets/mockup-image.png';
import './landingpage.css';
const authURL = 'http://127.0.0.1:4000/auth';
const axios = require('axios');

class LandingPage extends Component {
  constructor (props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn (email, password) {
    // console.log(email, password);
    let postData = {
      email: email,
      password: password,
    };

    axios.post(`${authURL}/login`, postData)
    .then((jwt) => {
      console.log('Logged In');
      this.props.checkLogin(jwt);
    })
    .catch((jwt) => {
      console.log(jwt.response.data);
    });
  }

  render () {
    if (this.props.isLoggedIn === true) {
      return <Redirect to='tasks' />
    } else {
      return (
        <div>
          <div className='jumbotron jumbotron-fluid'>
            <div className='container'>
              <div className='row vertical-align log-in'>
                <form>
                  <h4 className='login-text'> Welcome Back</h4>
                  <div className='form-row'>
                    <div className='col-12 col-sm-5'>
                      <input id="email" type='text' className='form-control' placeholder='Username/E-mail Address' />
                    </div>
                    <div className='col-12 col-sm-5'>
                      <input  id="password" type='password' className='form-control' placeholder='Password' />
                    </div>
                    <div className='col-12 col-sm-2 login-button'>
                      <button type='button' onClick={(e) => this.handleLogIn(document.getElementById('email').value, document.getElementById('password').value)} className='btn edit-button'>
                        Get To Work
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='container landing-page'>
            <div className='row'>
              <div className='col-12 col-sm-10 offset-sm-1 content'>
                <div className='row'>
                  <div className='col-12 col-sm-6'>
                    <h1>This is TskTsk</h1>
                    <p> TskTsk is a beautiful, intuitive to-do app meant to keep you accountable over time. </p>
                  </div>
                  <div className='col-12 col-sm-6'>
                    <img src={MockupImage} alt='' className='img-fluid rounded mx-auto d-block' />
                  </div>
                  <div className='col-12 col-sm-6'>
                    <img src={MobileView} alt='' className='img-fluid rounded mx-auto d-block' />
                  </div>
                  <div className='col-12 col-sm-6'>
                    <h1>This is TskTsk</h1>
                    <p> TskTsk is a beautiful, intuitive to-do app meant to keep you accountable over time. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default LandingPage;
