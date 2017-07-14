import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './coin.css';
// import axios from 'axios';

class Coin extends Component {
  constructor (props) {
    super(props);
    this.handleCoinClick = this.handleCoinClick.bind(this);
  }

  handleCoinClick (event) {
    console.log(this.props.coin.Name);
  }

  render () {
    let premined = null;

    if (this.props.coin.FullyPremined === '1') {
      premined = <p>Premined</p>;
    }

    return (
      <a href='#' onClick={(e) => this.handleCoinClick(e)}>
        <div className='coin-container'>

          <h5>{this.props.coin.CoinName}</h5>
          <p>({this.props.coin.Name})</p>
          {premined}
        </div>
      </a>
    );
  }
}

export default Coin;
