import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Image from 'react-image-resizer';
import CarouselInstance from './introCarousel/IntroCarousel';

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <Col classname="col-xs-push-12" xs={12} sm={6} md={6} lg={6}>
        <div className="innerIntro">
        	<div className="introFringeUpper">
          </div>
        	<div className="middleIntro">
            <CarouselInstance />
			    </div>
			    <div className="introFringeLower">
          </div>
		    </div>
		    </Col>
      </div>
    );
  }
}

export default Introduction;