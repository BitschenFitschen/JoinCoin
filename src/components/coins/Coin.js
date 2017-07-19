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
      premined = <span>Premined</span>;
    }

    return (
      <a href='#' onClick={(e) => this.handleCoinClick(e)}>
        <div className='coin-container'>

          <span>{this.props.coin.CoinName} </span>
          <span>({this.props.coin.Name}) </span>
          <span>{"  |  Algorithm: "+ this.props.coin.Algorithm} </span>
          <span>{"  |  Total Coin Supply: "+ this.props.coin.TotalCoinSupply} </span>
          {premined}
          <span>{ `| ${this.props.coin.SortOrder}`}</span>
        </div>
      </a>
    );
  }
}

export default Coin;
