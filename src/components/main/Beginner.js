import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import { Link } from 'react-router';
import './main.css';
import BeginnerImg from './img/CC-beginner.jpg';

class Beginner extends Component {
  goToEducation(event) {
    event.preventDefault();
    this.context.router.transitionTo(`/education`);
  }
  render() {
    return (
        <div className="Row sideSection">
            <Col classname="col-xs-pull-12" xs={12} sm={3} md={3} lg={3}>
              <div className="upperSideBarFringe">
              </div>
              <div className="middleSideBarFringe">

                  <div onClick={this.goToEducation.bind(this)}><h3 className="sideHeader Row">Beginner</h3></div>
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
