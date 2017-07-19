import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './coin.css';
// import axios from 'axios';

class Coin extends Component {
  constructor (props) {
    super(props);
    this.handleCoinClick = this.handleCoinClick.bind(this);
    this.parseNum = this.parseNum.bind(this);
  }

  handleCoinClick (event) {
    console.log(this.props.coin.Name);
  }

  parseNum (value) {
    // Nine Zeroes for Billions
    return Math.abs(Number(value)) >= 1.0e+9

    ? Math.abs(Number(value)) / 1.0e+9 + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(value)) >= 1.0e+6

    ? Math.abs(Number(value)) / 1.0e+6 + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(value)) >= 1.0e+3

    ? Math.abs(Number(value)) / 1.0e+3 + "K"

    : Math.abs(Number(value));
  }

  render () {
    let premined = null;

    if (this.props.coin.FullyPremined === '1') {
      premined = <div className='premined'>Premined</div>;
    }

    let coinSupply = null;

    if (this.props.coin.TotalCoinSupply !== '0' && this.props.coin.TotalCoinSupply !== 'N/A') {
      coinSupply = <div className='coin-supply'>{this.parseNum(this.props.coin.TotalCoinSupply)}</div>
    }

    let algo = null;

    if (this.props.coin.Algorithm !== 'N/A') {
      algo = <div className='algo'>{this.props.coin.Algorithm} </div>
    }

    return (
      <a href='#' onClick={(e) => this.handleCoinClick(e)} className="coin-link">
        <div className='coin-container'>
          <div className='ranking text-center'>{`${this.props.coin.SortOrder}`}</div>
          <div className='coin-name'>{this.props.coin.CoinName}</div>
          <div className='coin-sym'>{this.props.coin.Name}</div>
          {coinSupply}
          {premined}
          {algo}
        </div>
      </a>
    );
  }
}

export default Coin;
