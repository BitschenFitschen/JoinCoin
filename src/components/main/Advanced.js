import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Advanced extends Component {
  render() {
    return (
      <div className="advanced sideSection">
         <Col xs={12} sm={3} md={3} lg={3}>
            <div className="upperSideBarFringe">
            </div>
            <div className="middleSideBarFringe">
  				    <p>Advanced 
  				    </p>
            </div>
            <div className="lowerSideBarFringe">
            </div>
		      </Col>
      </div>
    );
  }
}

export default Advanced;