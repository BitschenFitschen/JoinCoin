import React, { Component } from 'react';
import {Col, Accordion, Panel} from 'react-bootstrap';
import './coins.css';
import axios from 'axios';

class Coins extends Component {
  constructor() {
    super();
  }

  state = {

  };

  componentWillMount() {

  }

  render () {
    return (
      <div className="fluid-container">
        <h1>Coins</h1>
      </div>
    );
  }
}

export default Coins;
