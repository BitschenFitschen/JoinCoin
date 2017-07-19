import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './profit.css';
import smith from './img/smith.jpg';
import casares from './img/casares.jpg';
import davies from './img/davies.jpg';
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
    payoff: null,
    top10: [],
    currentPrice: 0,
    hideConversionAlert: true
  };

  componentWillMount() {
    let that = this;
    // this runs right before rendered

    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(function (response) {
        console.log(response.data);
        that.setState({ top10: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChange(e) {
    // console.log(e.target.value);
    this.setState({ coin: e.target.value });

    if(e.target.value !== 'null') {
      for(let i = 0; i < this.state.top10.length; i++) {
        // console.log(this.state.top10[i].symbol + e.target.value );
        if(e.target.value === this.state.top10[i].symbol) {
          this.setState({ currentPrice: parseFloat(this.state.top10[i].price_usd) });
          break;
        }
      }

      if(parseInt(this.state.buyin) !== 0 && parseFloat(this.state.buyin) != 0 && this.state.buyin !== '') {
        this.setState({ hideConversionAlert: false });
      }
    } else {
      this.setState({ currentPrice: 0 });
      this.setState({ hideConversionAlert: true });
    }

    // if(e.target.value !== 'null' && this.state.buyin !== 0) {
    //   this.makeRequest();
    // }
  }

  buyIn(e) {
    console.log(e.target.value);
    this.setState({ buyin: parseFloat(e.target.value) });

    if(parseInt(e.target.value) !== 0 && parseFloat(e.target.value) != 0 && e.target.value !== '') {
      if(this.state.coin === 'null') {
        this.setState({ hideConversionAlert: true });
      } else {
        this.setState({ hideConversionAlert: false });
      }
    } else {
      this.setState({ hideConversionAlert: true });
    }



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
    this.setState({ payoff: parseFloat(amount) });
  }

  render () {
    let coinCount = '';
    let profit = 0;
    let roi = 0;

    if(this.state.currentPrice !== 0) {
      coinCount = `${(this.state.buyin/this.state.currentPrice).toFixed(4)}`;
    }

    return (
      <div className='container'>
        <h1>Profit Calculator</h1>
        <div className="row text-center">
          <div className="col-md-6">
            <h3>Cryptocurrency</h3>
            <p>So, you're thinking about getting some </p>
            <select className='custom-select' onChange={(e) => this.onChange(e)}>
              <option value='null'>Select Cryptocurrency</option>
              {
                this.state.top10.map(i => 
                  <option key={i.symbol} value={i.symbol}>{i.name}</option>
                )
              }
            </select>

          </div>
          <div className="col-md-6">
            <h3>Investment</h3>
            <p>Today, if you invest</p>
            <form className="form-inline">
              <label className="sr-only" htmlFor="buyin-amount">Enter Investment Amount</label>
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon">$</div>
                <input type="text" className="form-control" id="buyin-amount" placeholder="0.00" onChange={this.buyIn} />
              </div>
            </form>
            {
              this.state.hideConversionAlert ? null : (<div className="alert alert-info m-t-md conversionAlert" role="alert">
              = {coinCount} <span className='coin-span'>{this.state.coin}</span> / ${this.state.currentPrice.toFixed(2)} <span className='coin-span'> per 1 {this.state.coin}</span>
            </div>)
            }
            
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col-md-6">
            <h3>Profit Scenarios</h3>
            <p>Current Price: {`$${this.state.currentPrice.toFixed(2)}`}</p>
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
          <div className="col-md-6">
            <h3>Bitcoin Predictions</h3>
            <blockquote className="pull-quote">
              <img className="img-circle" src={davies} />
              <p>
                “In terms of price this year, I think it will go up to $3,000. As it becomes more pervasive and more generally accepted, I think you’ll see rapid growth in adoption.”
              </p>
              <cite>Adam Davies, Altus Consulting</cite>
            </blockquote>
            <hr />
            <blockquote className="pull-quote">
              <img className="img-circle" src={smith} />
              <p>
                “Bitcoin's 2030 price and user count total $500,000 and 400 million, respectively. The price is found by taking the $10 trillion market cap and dividing it by the fixed supply of 20 million bitcoin.”
              </p>
              <cite>Peter Smith, Blockchain</cite>
            </blockquote>
            <hr />
            <blockquote className="pull-quote">
              <img className="img-circle" src={casares} />
              <p>
                "If it <em>succeeds</em>, in five to seven years it [one bitcoin] will be worth more than a million dollars."
              </p>
              <cite>Wences Casares, PayPal &amp; Xapo</cite>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfitCalculator;
