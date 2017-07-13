import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Image from 'react-image-resizer';

class Advanced extends Component {
  render() {
    return (
      <div className="advanced sideSection">
         <Col xs={12} sm={3} md={3} lg={3}>
            <div className="upperSideBarFringe">
            </div>
            <div className="middleSideBarFringe">
  				    <div className="Row"><h3 className="sideHeader">You already know?</h3><h4>Here you will find advanced user tools for monitoring and forecasting all major coins</h4></div>
            </div>
            <div className="lowerSideBarFringe">
            </div>
		      </Col>
      </div>
    );
  }
}

export default Advanced;