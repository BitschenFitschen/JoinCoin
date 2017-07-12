import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import Image from 'react-image-resizer';

class Beginner extends Component {
  render() {
    return (
        <div className="Row sideSection">
            <Col xs={12} sm={3} md={3} lg={3}>
              <div className="upperSideBarFringe">
              </div>
              <div className="middleSideBarFringe">
      				  <Image 
                src='http://wrapious.com/news/02_03_2017/img/2.jpg'
                height={190}
                width={275}
                />
              </div>
              <div className="lowerSideBarFringe">
              </div>
            </Col>
        </div>
    );
  }
}

export default Beginner;
