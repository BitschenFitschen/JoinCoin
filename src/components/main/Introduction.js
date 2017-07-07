import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
				<p>Intro Section</p>
		</Col>
      </div>
    );
  }
}

export default Introduction;