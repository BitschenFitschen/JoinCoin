import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
         <Col xs={12} sm={12} md={12} lg={12} xl={12}>
				  <h1>Header</h1>
				  <h3>sub-Header</h3>
		    </Col>
      </div>
    );
  }
}

export default Header;