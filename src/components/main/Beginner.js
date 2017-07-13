import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

class Beginner extends Component {
  render() {
    return (
        <div className="Row sideSection">
            <Col xs={12} sm={3} md={3} lg={3}>
              <div className="upperSideBarFringe">
              </div>
              <div className="middleSideBarFringe">

                  <div className="Row"><h3 className="sideHeader">New to Cryptocurrency?</h3><h4>Click here for a simple and complete tutorial on everything you need to know</h4></div>
              </div>
              <div className="lowerSideBarFringe">
              </div>
            </Col>
        </div>
    );
  }
}

export default Beginner;
