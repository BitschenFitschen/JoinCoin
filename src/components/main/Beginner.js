import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

class Beginner extends Component {
  goToEducation(event) {
    event.preventDefault();
    console.log('You changed the URL');
    //first grab the text from the box
    console.log(`Going to /education`);
    //second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/education`);

  }
  render() {
    return (
        <div className="Row sideSection">
            <Col xs={12} sm={3} md={3} lg={3}>
              <div className="upperSideBarFringe">
              </div>
              <div className="middleSideBarFringe">

                  <div onClick={this.goToEducation.bind(this)}><h3 className="sideHeader Row">New to Cryptocurrency?</h3><h4>Click here for a simple and complete tutorial on everything you need to know</h4></div>
              </div>
              <div className="lowerSideBarFringe">
              </div>
            </Col>
        </div>
    );
  }
}

Beginner.contextTypes = {
  router: React.PropTypes.object
}

export default Beginner;
