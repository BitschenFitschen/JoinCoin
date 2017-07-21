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
            <Col className="col-xs-offset" xs={12} sm={3} md={3} lg={3}>
              <div className="upperSideBarFringe">
              </div>
              <div className="middleSideBarFringe" onClick={this.goToEducation.bind(this)}>
                    <h3 id="sideHeader" className="sideHeader Row">Beginner</h3>      
                    <div className="innerCaptionBeginner">                      
                      <div>
                        <img src="https://cdn.pixabay.com/photo/2014/06/14/10/02/road-368719_1280.jpg" id="beginner-banner" className=""/>
                      </div>
                    </div>                                     
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
