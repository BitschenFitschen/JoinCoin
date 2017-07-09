import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <Col xs={12} sm={6} md={6} lg={6}>
				<p>Introduction Section</p>
		</Col>
      </div>
    );
  }
}

export default Introduction;