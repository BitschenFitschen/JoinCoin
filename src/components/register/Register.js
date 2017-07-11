import React, { Component } from 'react';
// import {Col} from 'react-bootstrap';
import './register.css';

class Register extends Component {
  render () {
    return (
      <div className='register container'>
        <h1>Register</h1>
        <form method='post' action='/users/register'>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' className='form-control' placeholder='Name' name='name' />
          </div>
          <div className='form-group'>
            <label>Username</label>
            <input type='text' className='form-control' placeholder='Username' name='username' />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' className='form-control' placeholder='Email' name='email' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' placeholder='Password' name='password' />
          </div>
          <div className='form-group'>
            <label>Confirm Password</label>
            <input type='password' className='form-control' placeholder='Password' name='password2' />
          </div>
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
