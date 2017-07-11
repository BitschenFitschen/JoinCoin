import React, { Component } from 'react';
// import {Col} from 'react-bootstrap';
import './login.css';

class Login extends Component {
  render () {
    return (
      <div className='login container'>
        <h1>Login</h1>
        <form method='post' action='/users/login'>
          <div className='form-group'>
            <label>Username</label>
            <input type='text' className='form-control' name='username' placeholder='Username' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' name='password' placeholder='Password' />
          </div>
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
