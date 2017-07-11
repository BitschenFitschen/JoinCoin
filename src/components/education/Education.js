import React, { Component } from 'react';
import {Col, Accordion, Panel} from 'react-bootstrap';
import Slider from 'react-slick';
import './education.css';
import preload from './educationdata.json';

class Education extends Component {
  render () {
    var settings = {
      dots: true
    };

    return (
      <div className='education container-fluid'>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1>Education</h1>
          <Slider {...settings}>
            {
              preload.slides.map(
                (slide) =>
                  <div className='education-panel'>
                    <Col md={3}>
                      <h4>{slide.leftSidePanelTitle}</h4>
                      <small>{slide.leftSidePanelDescription}</small>
                    </Col>
                    <Col md={6}>
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                    </Col>
                    <Col md={3}>
                      <h4>{slide.rightSidePanelTitle}</h4>
                      <small>{slide.rightSidePanelDescription}</small>
                    </Col>
                  </div>
              )
            }

            {/* FAQ */}
            <div className='education-panel'>
              <Col md={3} />
              <Col md={6}>
                <h3>FAQs</h3>
                {/* Add accordion FAQ questions */}
                <Accordion>
                  {
                    preload.questions.map(
                      (q) =>
                        <Panel header={q.question} eventKey={(q.index + 1).toString()}>
                          {q.answer}
                        </Panel>
                    )
                  }
                </Accordion>
              </Col>
              <Col md={3} />
            </div>
          </Slider>
        </Col>
      </div>
    );
  }
}

export default Education;
