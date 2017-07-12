import React, { Component } from 'react';
import { Link } from 'react-router';
import {Col} from 'react-bootstrap';
import './main.css';
import BeginnerImg from './img/CC-beginner.jpg';

class Beginner extends Component {
  render() {
    return (
        <div className="Row">
          <Col xs={12} sm={3} md={3} lg={3}>
            <div className="fluff Row">
            </div>
            <Link to="/education">
              <div className="beginner Row">
                <img src={BeginnerImg} alt="" className="img-beginner"/>	    
              </div>
            </Link>
            <div className="fluff Row">
            </div>
          </Col>
        </div>
    );
  }
}

export default Beginner;
