import React, { Component } from 'react';
import { Link } from 'react-router';
import {Col} from 'react-bootstrap';
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
              <div className="middleSideBarFringe">
                    <h3 id="sideHeader" className="sideHeader Row">Beginner</h3>      
                    <div className="innerCaptionBeginner" onClick={this.goToEducation.bind(this)}>                      
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKpCx_BihU1tDXqIqOkxMqDCFn9h0rgtbZ0-vPfNJ9mwSNd_LKA" id="beginner-banner" className=""/>
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
