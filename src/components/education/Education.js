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
        <Col xs={12} sm={12} md={12} lg={12}>
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
                  <Panel header='What is a Cryptocurrency?' eventKey='1'>
                    A cryptocurrency is a digital or virtual currency that uses cryptography for security. Transactions are made with no middle men – meaning, no banks. A defining feature of a cryptocurrency, and arguably its most endearing allure, is its organic nature; it is not issued by any central authority, rendering it theoretically immune to government interference or manipulation. There are no transaction fees and no need to give your real name. The anonymous nature of cryptocurrency transactions makes them well-suited for a host of nefarious activities, such as money laundering and tax evasion.
                  </Panel>
                  <Panel header='Which coin is the first Cryptocurrency?' eventKey='2'>
                    The first cryptocurrency to capture the public imagination was Bitcoin, which was launched in 2009 by an individual or group known under the pseudonym Satoshi Nakamoto. As of September 2015, there were over 14.6 million bitcoins in circulation with a total market value of $3.4 billion. Bitcoin's success has spawned a number of competing cryptocurrencies, such as Litecoin, Namecoin and PPCoin.
                  </Panel>
                  <Panel header='What are the benefits of Cryptocurrency?' eventKey='3'>
                    Cryptocurrencies make it easier to transfer funds between two parties in a transaction; these transfers are facilitated through the use of public and private keys for security purposes. These fund transfers are done with minimal processing fees, allowing users to avoid the steep fees charged by most banks and financial institutions for wire transfers.
                  </Panel>
                   <Panel header='What are the drawbacks of Cryptocurrency?' eventKey='4'>
                    Cryptocurrencies are virtual and do not have a central repository, a digital cryptocurrency balance can be wiped out by a computer crash if a backup copy of the holdings does not exist. Since prices are based on supply and demand, the rate at which a cryptocurrency can be exchanged for another currency can fluctuate widely. Cryptocurrencies are not immune to the threat of hacking. In Bitcoin's short history, the company has been subject to over 40 thefts, including a few that exceeded $1 million in value.
                  </Panel>
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
