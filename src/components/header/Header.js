import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1 id="banner">JoinCoin</h1>
          <h3>..the best resource for new and experienced cryptocurrency users</h3>
        </Col>
      </div>
    );
  }
}

export default Header;
