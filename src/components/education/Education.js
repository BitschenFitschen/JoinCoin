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

            <div className='education-panel'>
              <Col md={3} />
              <Col md={6}>
                <h3>FAQ</h3>
                {/* Add accordion FAQ questions */}
                <Accordion>
                  <Panel header='Collapsible Group Item #1' eventKey='1'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </Panel>
                  <Panel header='Collapsible Group Item #2' eventKey='2'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </Panel>
                  <Panel header='Collapsible Group Item #3' eventKey='3'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </Panel>
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
