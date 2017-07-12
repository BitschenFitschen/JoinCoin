import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

class Beginner extends Component {
  render() {
    return (
        <div className="Row sideSection">
            <Col xs={12} sm={3} md={3} lg={3}>
              <div className="upperLowerSideBarFringe">
              </div>
              <div className="middleSideBarFringe">
      				  <p>Beginner  
      				  </p>
              </div>
              <div className="upperLowerSideBarFringe">
              </div>
            </Col>
        </div>
    );
  }
}

export default Beginner;
