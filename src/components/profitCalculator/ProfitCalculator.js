import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './profit.css';
import smith from './img/smith.jpg';
import casares from './img/casares.jpg';
import davies from './img/davies.jpg';
import bullion from './img/bullion.jpg';
import car from './img/car.jpg';
import house from './img/house.jpg';
import plane from './img/jet.jpg';
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
      <div className='container-fluid prof-calc'>
        <div className="calc-container">
          <div className="row text-center">
            <h1 className="prof-title">Profit Calculator</h1>
          </div>
          <div className="row text-left">
            <div className="col-md-6">
              <div className="step-1">
                <h3 className="calc-action-header"><span className="numCircle">1</span>Which cryptocurrency?</h3>
                <p className="explanation-p text-center">Get in the game by choosing one of the following:</p>
                <select className='custom-select' onChange={(e) => this.onChange(e)}>
                  <option value='null'>Top 10 Cryptocurrencies</option>
                  {
                    this.state.top10.map(i => 
                      <option key={i.symbol} value={i.symbol}>{i.name}</option>
                    )
                  }
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="step-2">
                <h3 className="calc-action-header"><span className="numCircle">2</span>Your investment now!</h3>
                <p className="explanation-p text-center">The more you put in, the greater the payoff</p>
                <form className="form-group">
                  <label className="sr-only" htmlFor="buyin-amount">Enter Investment Amount</label>
                  <input type="text" className="form-control" id="buyin-amount" placeholder="Type buy-in amount here ($100.00)" onChange={this.buyIn} />
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {
                this.state.hideConversionAlert
                ?
                null
                :
                ( 
                  <div className="step-25">
                    <h3 className="calc-action-header"><span className="numCircle">i</span>Current price of {this.state.coin}</h3>
                    <div className="prof-progress-text text-center">
                      <strong className="prof-strong">${this.state.currentPrice.toFixed(2)}</strong> <span className='coin-span'> per 1 {this.state.coin}</span>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col-md-6">
              {
                this.state.hideConversionAlert
                ?
                null
                :
                (
                  <div className="step-25">
                    <h3 className="calc-action-header"><span className="numCircle">i</span>So far...</h3>
                    <div className="prof-progress-text text-center">
                      After investing <strong className="prof-strong">${this.state.buyin}</strong>,<br />you have <strong className="prof-strong">{coinCount} <span className='coin-span'>{this.state.coin}</span></strong>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="step-3 text-center">
                <h3 className="calc-action-header"><span className="numCircle">3</span>Predict future prices<br /><span id="prof-slider-instruction">(Drag slider to project prices)</span></h3>
                  {
                      this.state.hideConversionAlert ? null :
                      (
                        <div className="price-scenarios text-center">
                          <p className="prof-progress-text projected-price">Your Projected Price: <strong className="prof-strong">{`$${this.parseNum(this.state.payoff)}`}</strong><span className='coin-span'> per 1 {this.state.coin}</span></p>
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
              </div>
            </div>
          </div>

          {
            this.state.hideProfits ? null : (
              <div className="profit-container text-center">
                <h3 className="calc-action-header"><span className="numCircle">4</span>PROFIT</h3>
                <div className="row">
                    <div className="col-md-6">
                      <span className="prof-progress-text coin-span"><strong className="prof-strong profits">{`$${this.parseNum(profit)} `}</strong><br />Pre-Tax Profit</span>
                    </div>
                    <div className="col-md-6">
                      <span className="prof-progress-text coin-span"><strong className="prof-strong profits">{`${roi}% `}</strong><br />Return on Investment</span>
                    </div>
                </div>
                <div className="row buy-row">
                  <p className="prof-progress-text you-can">You can buy</p>
                  <div className="col-md-3">
                    <div className="buy-container"
                      style={{backgroundImage: `url(${bullion})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
                      <p className="buy-quant">{`${Math.floor(profit/this.state.goldPrice)} `}</p>
                    </div>
                    <p className="buy-desc">Ounce(s) of Gold</p>
                  </div>
                  <div className="col-md-3">
                    <div className="buy-container"
                    style={{backgroundImage: `url(${car})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
                      <p className="buy-quant">{`${Math.floor(profit/porsche)} `}</p>
                    </div>
                    <p className="buy-desc">Porsche 911 Carrera(s)</p>
                  </div>
                  <div className="col-md-3">
                    <div className="buy-container"
                    style={{backgroundImage: `url(${house})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
                      <p className="buy-quant">{`${Math.floor(profit/hamptons)} `}</p>
                    </div>
                    <p className="buy-desc">House(s) in the Hamptons</p>
                  </div>
                  <div className="col-md-3">
                    <div className="buy-container"
                    style={{backgroundImage: `url(${plane})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
                      <p className="buy-quant">{`${Math.floor(profit/jet)} `}</p>
                    </div>
                    <p className="buy-desc">Private Jet(s)</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        
        <div className="quote-container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="prof-title pred-title">Bitcoin Predictions</h1>
              <blockquote className="pull-quote">
                <img className="img-circle" alt="prediction" src={davies} />
                <p className="actual-quote">
                  “In terms of price this year [2017], I think it will go up to $3,000. As it becomes more pervasive and more generally accepted, I think you’ll see rapid growth in adoption.”
                </p>
                <cite className="quote-cite">Adam Davies, Altus Consulting</cite>
              </blockquote>
              <hr className="quote-hr" />
              <blockquote className="pull-quote">
                <img className="img-circle" alt="prediction" src={smith} />
                <p className="actual-quote">
                  “Bitcoin's 2030 price and user count total $500,000 and 400 million, respectively. The price is found by taking the $10 trillion market cap and dividing it by the fixed supply of 20 million bitcoin.”
                </p>
                <cite className="quote-cite">Peter Smith, Blockchain</cite>
              </blockquote>
              <hr className="quote-hr" />
              <blockquote className="pull-quote">
                <img className="img-circle" alt="prediction" src={casares} />
                <p className="actual-quote">
                  "If it succeeds, in five to seven years it [one bitcoin] will be worth more than a million dollars."
                </p>
                <cite className="quote-cite">Wences Casares, PayPal &amp; Xapo</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfitCalculator;
