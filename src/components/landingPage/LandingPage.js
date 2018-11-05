import React, { Component } from 'react';
import '../../main.css';
import MobileView from '../../../src/assets/mobile-view.png';
import MockupImage from '../../../src/assets/mockup-image.png';
import './landingpage.css'

class LandingPage extends Component{
  render() {
    return (
      <div>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <div className='row vertical-align log-in'>
              <form>
                <h4 className='login-text'> Welcome Back</h4>
                <div className='form-row'>
                  <div className='col-12 col-sm-5'>
                    <input type='text' className='form-control' placeholder='Username/E-mail Address' />
                  </div>
                  <div className='col-12 col-sm-5'>
                    <input type='text' className='form-control' placeholder='Password' />
                  </div>
                  <div className='col-12 col-sm-2 login-button'>
                    <a href='tasks'>
                      <button type='button' className='btn edit-button'>
                        Get To Work
                      </button>
                    </a>
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

export default LandingPage;
