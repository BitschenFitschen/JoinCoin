import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends Component {
  render () {
    return (

      <div className='header'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1 id="banner">
            <span id="animated-example" className="animated rollIn" src='JC-logo-final-lincoln.png' alt='joinCoinImage'></span>
            <span id="animated-example" className="animated rollIn j">J</span>
            <span id="animated-example" className="animated rollIn o">o</span>
            <span id="animated-example" className="animated rollIn o">i</span>
            <span id="animated-example" className="animated rollIn o">n</span>
            <span id="animated-example" className="animated rollIn c">¢</span>
            <span id="animated-example" className="animated rollIn o">o</span>
            <span id="animated-example" className="animated rollIn o">i</span>
            <span id="animated-example" className="animated rollIn o">n</span>
          </h1>
          <h3 id="animated-example2" className="animated2 pulse">..the top resource for new and experienced cryptocurrency users</h3>
        </Col>
      </div>
    );
  }
}

export default Header;
