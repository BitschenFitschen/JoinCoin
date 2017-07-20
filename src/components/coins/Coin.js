import React, { Component } from 'react';
import './coin.css';


class Coin extends Component {
  render () {
    return (
      <a href='#' onClick={(e) => this.props.handleCoinClick(this.props.coin, this.props.coin.name, e)} className="coin-link">
        <div className='coin-container'>
          <div className='ranking text-center'>{`${this.props.coin.rank}`}</div>
          <div className='coin-name'>{this.props.coin.name}</div>
          <div className='coin-sym'>{this.props.coin.symbol}</div>
          <div className='coin-supply'>{this.props.parseNum(this.props.coin.total_supply)}</div>
        </div>
      </a>
    );
  }
}

export default Coin;
