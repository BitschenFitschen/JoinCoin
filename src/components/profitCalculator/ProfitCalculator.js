import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './profit.css';
import smith from './img/smith.jpg';
import casares from './img/casares.jpg';
import davies from './img/davies.jpg';
import axios from 'axios';
import ReactBootstrapSlider from 'react-bootstrap-slider';

class ProfitCalculator extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.buyIn = this.buyIn.bind(this);
    // this.makeRequest = this.makeRequest.bind(this);
    // this.countCoins = this.countCoins.bind(this);
    // this.payOff = this.payOff.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.parseNum = this.parseNum.bind(this);
  }

  state = {
    coin: 'null',
    buyin: 0,
    payoff: null,
    top10: [],
    currentPrice: 0,
    hideConversionAlert: true,
    disableProfitSlider: true,
    hideProfits: true,
    goldPrice: 0
  };

  componentWillMount() {
    let that = this;
    // this runs right before rendered

    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(function (response) {
        console.log(response.data);
        that.setState({ top10: response.data });

        axios.get('http://localhost:3000/goldScrape')
          .then(function (response) {
            that.setState({ goldPrice: parseFloat(response.data.replace(/,/g, '')) });
          })
          .catch(function (error) {
            console.log(error);
          });
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
          this.setState({ payoff: parseFloat(this.state.top10[i].price_usd) });
          break;
        }
      }

      if(parseInt(this.state.buyin, 10) !== 0 && parseFloat(this.state.buyin) !== 0 && this.state.buyin !== '') {
        this.setState({ hideConversionAlert: false });
        this.setState({ disableProfitSlider: false });
        this.setState({ hideProfits: false });
      }
    } else {
      this.setState({ currentPrice: 0 });
      this.setState({ hideConversionAlert: true });
      this.setState({ disableProfitSlider: true });
      this.setState({ hideProfits: true });
    }

    // if(e.target.value !== 'null' && this.state.buyin !== 0) {
    //   this.makeRequest();
    // }
  }

  buyIn(e) {
    console.log(e.target.value);
    this.setState({ buyin: parseFloat(e.target.value) });

    if(parseInt(e.target.value, 10) !== 0 && parseFloat(e.target.value) !== 0 && e.target.value !== '') {
      if(this.state.coin === 'null') {
        this.setState({ hideConversionAlert: true });
        this.setState({ disableProfitSlider: true });
        this.setState({ hideProfits: true });
      } else {
        this.setState({ hideConversionAlert: false });
        this.setState({ disableProfitSlider: false });
        this.setState({ hideProfits: false });
      }
    } else {
      this.setState({ hideConversionAlert: true });
      this.setState({ disableProfitSlider: true });
      this.setState({ hideProfits: true });
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

  // payOff(amount) {
  //   this.setState({ payoff: parseFloat(amount) });
  // }

  changeValue(e) {
    // console.log(e.target.value);
    this.setState({ payoff: parseInt(e.target.value, 10) });
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
    let coinCount = 0;
    let profit = 0;
    let roi = 0;

    const doubledouble = 3.45;
    const fidget = 5;
    const porsche = 95000;
    const hamptons = 1800000;
    const jet = 40000000;

    if(this.state.currentPrice !== 0) {
      coinCount = `${(this.state.buyin/this.state.currentPrice).toFixed(4)}`;
    }

    if(this.state.disableProfitSlider === false) {
      profit = ((this.state.payoff - this.state.currentPrice) * coinCount).toFixed(2);

      roi = ((profit / this.state.buyin) * 100).toFixed(2);
    }

    return (
      <div className='container'>
        <h1>Profit Calculator</h1>
        <div className="row text-left">
          <div className="col-md-6 p-l-md p-r-md">
            <h3><span className="numCircle">1</span>Choose Cryptocurrency</h3>
            <p>So, you're thinking about getting some</p>
            <select className='custom-select' onChange={(e) => this.onChange(e)}>
              <option value='null'>Choose Cryptocurrency</option>
              {
                this.state.top10.map(i => 
                  <option key={i.symbol} value={i.symbol}>{i.name}</option>
                )
              }
            </select>
          </div>
          <div className="hidden-md hidden-lg">
            <hr />
          </div>
          <div className="col-md-6 p-l-md p-r-md">
            <h3><span className="numCircle">2</span>Invest Now</h3>
            <p>Today, if you invest</p>
            <form className="form-group">
              <label className="sr-only" htmlFor="buyin-amount">Enter Investment Amount</label>
              <div className="input-group">
                <div className="input-group-addon">$</div>
                <input type="text" className="form-control" id="buyin-amount" placeholder="0.00" onChange={this.buyIn} />
              </div>
            </form>
          </div>
          <div className="row text-center">
            <div className="col-md-12 p-l-md p-r-md">
              {
                this.state.hideConversionAlert ? null : (<div className="alert alert-info m-t-md conversionAlert" role="alert">
                = {coinCount} <span className='coin-span'>{this.state.coin}</span> / ${this.state.currentPrice.toFixed(2)} <span className='coin-span'> per 1 {this.state.coin}</span>
              </div>)
              }
            </div>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col-md-12 p-l-md p-r-md p-b-sm">
            <h3 className="row text-left"><span className="numCircle">3</span>Profit</h3>
            {
                this.state.hideConversionAlert ? null :
                (
                  <div className="price-scenarios">
                    <p>Current Price: {`$${this.state.currentPrice.toFixed(2)}`}</p>
                    <p>Projected Price: {`$${this.state.payoff} (adjust by dragging slider)`}</p>
                  </div>
                )
            }
            
            {
              this.state.disableProfitSlider
                ? 
                (
                  <ReactBootstrapSlider
                    value={this.state.payoff}
                    change={this.changeValue}
                    slideStop={this.changeValue}
                    step={100}
                    max={1000000}
                    min={parseInt(this.state.currentPrice, 10)}
                    orientation="horizontal"
                    ticks={[this.state.currentPrice, 3000, 10000, 500000, 1000000]}
                    ticks_labels={[`$${this.state.currentPrice}`, "$3000", "$10000", "$500000", "$1000000"]}
                    ticks_snap_bounds={ 30 }
                    ticks_positions={[0, 20, 40, 70, 100]}
                    disabled="disabled" />
                )
                :
                (
                  <ReactBootstrapSlider
                    value={this.state.payoff}
                    change={this.changeValue}
                    slideStop={this.changeValue}
                    step={100}
                    max={1000000}
                    min={parseInt(this.state.currentPrice, 10)}
                    orientation="horizontal"
                    ticks={[this.state.currentPrice, 3000, 10000, 500000, 1000000]}
                    ticks_labels={[`$${this.state.currentPrice}`, "$3000", "$10000", "$500000", "$1000000"]}
                    ticks_snap_bounds={ 30 }
                    ticks_positions={[0, 20, 40, 70, 100]} />
                )
            }
            
              {/*
                <div className="btn-group" role="group">
                  <button className='btn btn-default' onClick={() => this.payOff(3000)}>$3,000</button>
                  <button className='btn btn-default' onClick={() => this.payOff(5000)}>$5,000</button>
                  <button className='btn btn-default' onClick={() => this.payOff(10000)}>$10,000</button>
                  <button className='btn btn-default' onClick={() => this.payOff(100000)}>$100,000</button>
                  <button className='btn btn-default' onClick={() => this.payOff(1000000)}>$1,000,000</button>
                </div>
              */}
          {
            this.state.hideProfits ? null : (
              <div className="profit-container">
                <div className="row">
                  <div className="alert alert-success conversionAlert m-t-md" role="alert">
                    {`$${profit} `}<span className="coin-span">Pre-Tax Profit</span><br />
                    {`${roi}% `}<span className="coin-span">Return on Investment</span>
                  </div>
                </div>
                <div className="row">
                  <p>You can buy {`${Math.floor(profit/doubledouble)} `}Double Double(s) from In-N-Out</p>
                  <p>You can buy {`${Math.floor(profit/fidget)} `}Fidget Spinner(s)</p>
                  <p>You can buy {`${Math.floor(profit/this.state.goldPrice)} `}ounce(s) of gold</p>
                  <p>You can buy {`${Math.floor(profit/porsche)} `}Porsche 911 Carrera(s)</p>
                  <p>You can buy {`${Math.floor(profit/hamptons)} `}house(s) in the Hamptons</p>
                  <p>You can buy {`${Math.floor(profit/jet)} `}Gulfstream private jet(s)</p>
                </div>

              </div>
            )
          }

          </div>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col-md-12 p-b-md">
            <h3>Bitcoin Predictions</h3>
            <blockquote className="pull-quote">
              <img className="img-circle" alt="prediction" src={davies} />
              <p>
                “In terms of price this year, I think it will go up to $3,000. As it becomes more pervasive and more generally accepted, I think you’ll see rapid growth in adoption.”
              </p>
              <cite>Adam Davies, Altus Consulting</cite>
            </blockquote>
            <hr />
            <blockquote className="pull-quote">
              <img className="img-circle" alt="prediction" src={smith} />
              <p>
                “Bitcoin's 2030 price and user count total $500,000 and 400 million, respectively. The price is found by taking the $10 trillion market cap and dividing it by the fixed supply of 20 million bitcoin.”
              </p>
              <cite>Peter Smith, Blockchain</cite>
            </blockquote>
            <hr />
            <blockquote className="pull-quote">
              <img className="img-circle" alt="prediction" src={casares} />
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
