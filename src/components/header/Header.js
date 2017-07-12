import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1 id="banner"><span id="j">J</span><span id="o">o</span><span id="y">i</span><span id="n">n</span><span id="c">¢</span><span id="o2">o</span><span id="i">i</span><span id="n2">n</span></h1>
          <h3>..the top resource for new and experienced cryptocurrency users</h3>
        </Col>
      </div>
    );
  }
}

export default Header;
