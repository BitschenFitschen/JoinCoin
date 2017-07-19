import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './profit.css';
import axios from 'axios';

class ProfitCalculator extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.buyIn = this.buyIn.bind(this);
    // this.makeRequest = this.makeRequest.bind(this);
    // this.countCoins = this.countCoins.bind(this);
    this.payOff = this.payOff.bind(this);
  }

  state = {
    coin: 'null',
    buyin: 0,
    prices: {},
    payoff: null
  };

  componentWillMount() {
    let that = this;
    // this runs right before rendered
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD')
      .then(function (response) {
        console.log(response.data);
        that.setState({ prices: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ coin: e.target.value });

    // if(e.target.value !== 'null' && this.state.buyin !== 0) {
    //   this.makeRequest();
    // }
  }

  buyIn(e) {
    console.log(e.target.value);
    this.setState({ buyin: parseInt(e.target.value, 10) });

    // if(e.target.value > 0 && this.state.coin !== 'null') {
    //   this.makeRequest();
    // }
  }

  // makeRequest() {
  //   console.log('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
  // }

  // countCoins() {
  //   return 'poop'
  // }

  payOff(amount) {
    this.setState({ payoff: parseInt(amount, 10) })
  }

  render () {
    let coinCount = '';
    let profit = 0;
    let roi = 0;
    let currentPrice = 0;

    if(this.state.prices !== null) {
      if(this.state.coin === 'BTC') {
        coinCount = `${(this.state.buyin/this.state.prices.BTC.USD).toFixed(2)} BTC`;

        currentPrice = this.state.prices.BTC.USD;

        if(this.state.payoff !== null) {
          profit = 
          ((this.state.payoff - (this.state.prices.BTC.USD).toFixed(2)) * ((this.state.buyin/this.state.prices.BTC.USD).toFixed(2))).toFixed(2);

          // gain from investment - cost of investment / cost of investment
          roi = (((((this.state.buyin/this.state.prices.BTC.USD) * this.state.payoff) - this.state.buyin)/this.state.buyin) * 100).toFixed(2); 
        }

      } else if(this.state.coin === "ETH") {
        coinCount = `${(this.state.buyin/this.state.prices.ETH.USD).toFixed(2)} ETH`;

        currentPrice = this.state.prices.ETH.USD;

        if(this.state.payoff !== null) {
          profit = 
          ((this.state.payoff - (this.state.prices.ETH.USD).toFixed(2)) * ((this.state.buyin/this.state.prices.ETH.USD).toFixed(2))).toFixed(2);

          roi = (((((this.state.buyin/this.state.prices.ETH.USD) * this.state.payoff) - this.state.buyin)/this.state.buyin) * 100).toFixed(2); 
        }
      }
    }

    return (
      <div className='container-fluid'>
        <h1>Profit Calculator</h1>
        <div className="row text-center">
          <div className="col-md-6">
            <h3>Currency</h3>
            <p>So, you're thinking about getting some </p>
            <select onChange={this.onChange}>
              <option value='null'></option>
              <option value='BTC'>Bitcoin</option>
              <option value='ETH'>Ethereum</option>
            </select>
          </div>
          <div className="col-md-6">
            <h3>Buy-In</h3>
            <p>Today, if you buy $</p>
            <input type='text' onChange={this.buyIn} />
            <p>worth of {this.state.coin}</p>
            {/* <input type='text' value={this.state.coin} disabled /> */}
            <p>or {coinCount}</p>
            {/* <input type='text' value={coinCount} disabled /> */}
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col-md-12">
            <h3>Pay-Off</h3>
            <p>Current Price: {currentPrice}</p>
            <div className="btn-group" role="group">
              <button className='btn btn-default' onClick={() => this.payOff(3000)}>$3,000</button>
              <button className='btn btn-default' onClick={() => this.payOff(5000)}>$5,000</button>
              <button className='btn btn-default' onClick={() => this.payOff(10000)}>$10,000</button>
              <button className='btn btn-default' onClick={() => this.payOff(100000)}>$100,000</button>
              <button className='btn btn-default' onClick={() => this.payOff(1000000)}>$1,000,000</button>
            </div>

            <h2>You will have made a pre-tax profit of ${profit}</h2>
            <h2>That's a {roi}% Return on Investment!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfitCalculator;
