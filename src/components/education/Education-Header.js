import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
// import Slider from 'react-slick';
import './education.css';
import './assets/css/author.css';
import './assets/css/toolkit-startup.css';
import './assets/css/application-startup.css';
import bgIMG from './assets/img/startup-0.svg';
import bgIMG02 from './assets/img/jc-1.jpg';

import preload from './educationdata.json';




// import CCAnimate from './img/CC-Intro.gif';

class EducationHeader extends Component {
  render () {
    // var settings ={
    //   dots: true
    // };

    return (
      <div className='education container-fluid'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="block block-inverse block-fill-height app-header">
           <img src={bgIMG02} alt="" className="app-graph"/>      

            <nav className="navbar navbar-transparent navbar-fixed-top navbar-padded app-navbar p-t-md">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                    JoinCoin
                    <strong className="text-uppercase">
                      Education
                    </strong>
                </a>
              </div>
              <div className="navbar-collapse collapse text-uppercase">
                <ul className="nav navbar-nav navbar-right">
                  <li >
                    <a href="">Bitcoin<small className="delta-indicator delta-positive">10.3%</small></a>

                  </li>
                  <li >
                    <a href="">Ethereum<small className="delta-indicator delta-negative">1.3%</small></a>
                  </li>
                  <li >
                    <a href="">Litecoin<small className="delta-indicator delta-positive">5.3%</small></a>
                  </li>
                  <li >
                    <a href="">Abe Lincoin<small className="delta-indicator delta-positive">1000.2%</small></a>
                  </li>
                   <nav>
                   {
                        preload.slides.map(
                          (slide) =>
                          <div className="nested">
                            <a href={`#section${slide.index + 1}`}>{`${slide.title}`}</a>
                          </div>
                        )
                      }
                    {/* <div class="nested" id="sidebar">
                      <a href="#section1" class="chosen">Section 1</a>
                      <a href="#section2">Section 2</a>
                      <a href="#section3">Section 3</a>
                      <a href="#section4">Section 4</a>
                    </div>*/}
                  </nav>
                </ul>
              </div>
            </div>
            </nav>
            <img src={bgIMG} alt="" className="app-graph"/>      
         
            <div className="block-xs-middle p-b-lg">
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 col-md-8">
                    <h6 className="block-title m-b-sm">Cryptocurrency for Beginners</h6>
                    <p className="lead m-b-md text-muted">One-stop shop for learning about Bitcoin and other virtual currencies. Join us in the future of money!</p>
                    <a href="#basics"><button className="btn btn-primary btn-lg">Start Learning</button></a>
                    <a href="https://www.wellsfargo.com"><button className="btn btn-danger btn-lg">Nope Fiat FTW</button></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Col>
      </div>
    );
  }
}

export default EducationHeader;