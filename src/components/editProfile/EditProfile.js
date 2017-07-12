import React, { Component } from 'react';
// import {Col} from 'react-bootstrap';
import './editprofile.css';

class EditProfile extends Component {
  render () {
    return (
      <div className='edit-profile container'>
        <h1>Edit Profile</h1>
        <form method='post' action='/users/profile'>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' className='form-control' placeholder='Name' name='name' value='{{name}}' />
          </div>
          <div className='form-group'>
            <label>Username</label>
            <input type='text' className='form-control' placeholder='Username' name='username' value='{{username}}' />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' className='form-control' placeholder='Email' name='email' value='{{email}}' />
          </div>
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditProfile;
