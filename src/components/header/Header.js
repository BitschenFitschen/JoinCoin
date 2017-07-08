import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
         <Col xs={12} sm={12} md={12} lg={12} xl={12}>
				  <h1>JoinCoin</h1>
				  <h3>..the junction for all cryptocurrency</h3>
		    </Col>
      </div>
    );
  }
}

export default Header;