import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './coin.css';

class Coin extends Component {
  render () {
    const tooltipCoinSupply = (
      <Tooltip id="tooltip"><strong>Total Supply of Coins</strong></Tooltip>
    );

    const tooltipSymbol = (
      <Tooltip id="tooltip"><strong>Ticker Symbol</strong></Tooltip>
    );

    const tooltipRank = (
      <Tooltip id="tooltip"><strong>Ranked by Market Share</strong></Tooltip>
    );

    return (
      <div onClick={(e) => this.props.handleCoinClick(this.props.coin, e)} className="coin-link">
        <div className='coin-container'>
          <OverlayTrigger placement="bottom" overlay={tooltipRank}>
            <div className='ranking text-center'>{`${this.props.coin.rank}`}</div>
          </OverlayTrigger>
          <div className='coin-name'>{this.props.coin.name}</div>
          <OverlayTrigger placement="bottom" overlay={tooltipSymbol}>
            <div className='coin-sym'>{this.props.coin.symbol}</div>
          </OverlayTrigger>
          {
            this.props.coin.total_supply === null
              ?
            (null)
              :
            (
              <OverlayTrigger placement="bottom" overlay={tooltipCoinSupply}>
                <div className='coin-supply'>{this.props.parseNum(this.props.coin.total_supply)}</div>
              </OverlayTrigger>
            )
          }
        </div>
      </div>
    );
  }
}

export default Coin;
