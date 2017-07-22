import React, { Component } from 'react';
import './coins.css';
import Coin from './Coin';
import axios from 'axios';
import Infinite from 'react-infinite';;
import PulseLoader from 'halogen/PulseLoader';
import BounceLoader from 'halogen/BounceLoader';
import { Button, Modal } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import bg1 from './assets/img/jc-2.jpg';
import magGlass from './assets/img/magGlass.png';

class Coins extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.parseNum = this.parseNum.bind(this);
    this.handleCoinClick = this.handleCoinClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.setImageUrl = this.setImageUrl.bind(this);
  }

  state = {
    coins: [],
    global: {},
    selectedCoin: {},
    searchTerm: '',
    loading: true,
    show: false,
    cryptocompare: null,
    ccSelectedCoin: {},
    imageUrl: null
  };

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleCoinClick (coin, e) {
    this.setState({ selectedCoin: coin });
    this.setState({ ccSelectedCoin: this.state.cryptocompare[coin.symbol] });
    this.setImageUrl(coin.symbol);
    this.showModal();
  }

  setImageUrl (symbol) {
    if(this.state.cryptocompare[symbol] !== undefined) {
      this.setState({ imageUrl: `https://www.cryptocompare.com${this.state.cryptocompare[symbol].ImageUrl}` });
    } else {
      this.setState({ imageUrl: null });
    }
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  parseNum (number) {
    var SI_POSTFIXES = ["", "k", "M", "B", "T", "P", "E"];
    var tier = Math.log10(Math.abs(number)) / 3 | 0;
    if(tier === 0) return number;
    var postfix = SI_POSTFIXES[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;
    var formatted = scaled.toFixed(1) + '';
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2);
    return formatted + postfix;
  }

  componentDidMount(){
    setTimeout(() => { 
      this.setState({ loading: false })
    }, 2000)

    let that = this;

    axios.get('https://www.cryptocompare.com/api/data/coinlist/')
      .then(function (response) {
        that.setState( { cryptocompare: response.data.Data } );

        // const ccid = response.data.Data[coin.symbol].Id;

        // axios.get(`https://www.cryptocompare.com/api/data/socialstats/?id=${ccid}`)
        //   .then(function (response) {
        //     console.log(response);
        //     // that.setState( {  } );
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      })
      .catch(function (error) {
        console.log(error);
      });
  } // simulate loading

  componentWillMount() {
    let that = this;

    // this runs right before rendered
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(function (response) {
        console.log(response.data);

        that.setState( { coins: response.data } );

        axios.get('https://api.coinmarketcap.com/v1/global/')
          .then(function (response) {
            console.log(response.data);

            that.setState( { global: response.data } );
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    const divStyle = {
      height: window.innerHeight-114
    };

    const bgStyle = {
      backgroundImage: `url(${bg1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    let modalStyle = null;

    if(this.state.imageUrl !== null) {
      modalStyle = {
        background: `url(${this.state.imageUrl})`
      };
    }

    const inputStyle = {
      backgroundImage: `url(${magGlass})`,
      backgroundSize: '4%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '94% 50%',
      paddingRight: '1.35em'
    };

    let hour, day, week = null;

    if(this.state.selectedCoin.percent_change_1h !== null) {
      if(parseFloat(this.state.selectedCoin.percent_change_1h) >= 0.00) {
        hour = <span key="hour-pos" className="delta-indicator delta-positive">{`${this.state.selectedCoin.percent_change_1h}%`}</span>
      } else {
        hour = <span key="hour-neg" className="delta-indicator delta-negative">{`${this.state.selectedCoin.percent_change_1h}%`}</span>
      }
    }

    if(this.state.selectedCoin.percent_change_24h !== null) {
      if(parseFloat(this.state.selectedCoin.percent_change_24h) >= 0.00) {
        day = <span className="delta-indicator delta-positive">{`${this.state.selectedCoin.percent_change_24h}%`}</span>
      } else {
        day = <span className="delta-indicator delta-negative">{`${this.state.selectedCoin.percent_change_24h}%`}</span>
      }
    }

    if(this.state.selectedCoin.percent_change_7d !== null) {
      if(parseFloat(this.state.selectedCoin.percent_change_7d) >= 0.00) {
        week = <span className="delta-indicator delta-positive">{`${this.state.selectedCoin.percent_change_7d}%`}</span>
      } else {
        week = <span className="delta-indicator delta-negative">{`${this.state.selectedCoin.percent_change_7d}%`}</span>
      }
    }

    let premined = null;
    let maxCoinSupply = null;
    let availCoinSupply = null;

    if(this.state.ccSelectedCoin !== null && this.state.ccSelectedCoin !== undefined) {
      if(this.state.ccSelectedCoin.FullyPremined !== "0") {
        premined = <div className="stats-container"><span className="coin-stat-headers">Fully Premined?</span><span className="coin-stats">Premined</span></div>
      } else {
        premined = <div className="stats-container"><span className="coin-stat-headers">Fully Premined?</span><span className="coin-stats">Mineable</span></div>
      }

      if(this.state.ccSelectedCoin.TotalCoinSupply === "0" || this.state.ccSelectedCoin.TotalCoinSupply === "N/A") {
        maxCoinSupply = 'N/A'
      } else {
        maxCoinSupply = this.parseNum(parseFloat(this.state.ccSelectedCoin.TotalCoinSupply))
      }
      
      // totalCoinSupply = this.parseNum(parseFloat(this.state.ccSelectedCoin.TotalCoinSupply.trim().replace(/,/g ,'')));
    }

    if(this.state.selectedCoin !== null && this.state.selectedCoin !== undefined) {
      if(this.state.selectedCoin.available_supply === "0" || this.state.selectedCoin.available_supply === "N/A" || this.state.selectedCoin.available_supply === null) {
        availCoinSupply = 'N/A'
      } else {
        availCoinSupply = this.parseNum(parseFloat(this.state.selectedCoin.available_supply).toFixed(0))
      }
    }

    return (
      <div
        className="coins-pg container-fluid"
        style={bgStyle}>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
          style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              {
                this.state.imageUrl === null
                ?
                (null)
                :
                (<img className="coin-pic" src={`${this.state.imageUrl}`} alt="coin-pic" />)
              }
              {`${this.state.selectedCoin.name}`}
              <span className="symbol-header">{` ${this.state.selectedCoin.symbol}`}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <div className="single-coin-container">
              <div className="row">
                <div className="col-md-6">
                  
                  <h2 className="modal-price">{`$${parseFloat(this.state.selectedCoin.price_usd)}`}<span className="per-symbol">{`/ 1 ${this.state.selectedCoin.symbol}`}</span>
                  </h2>

                  <div className="statcard statcard-change">
                    <span className="statcard-desc">1 Hour Change</span>
                    <ReactCSSTransitionGroup
                      transitionName="example"
                      transitionAppear={true}
                      transitionAppearTimeout={500}
                      transitionEnter={false}
                      transitionLeave={false}>
                      {
                        hour
                      }
                    </ReactCSSTransitionGroup>
                  </div>

                  <div className="statcard statcard-change">
                    <span className="statcard-desc">1 Day Change</span>
                    <ReactCSSTransitionGroup
                      transitionName="example"
                      transitionAppear={true}
                      transitionAppearTimeout={500}
                      transitionEnter={false}
                      transitionLeave={false}>
                    {
                      day
                    }
                    </ReactCSSTransitionGroup>
                  </div>

                  <div className="statcard statcard-change">
                    <span className="statcard-desc">1 Week Change</span>
                    <ReactCSSTransitionGroup
                      transitionName="example"
                      transitionAppear={true}
                      transitionAppearTimeout={500}
                      transitionEnter={false}
                      transitionLeave={false}>
                    {
                      week
                    }
                    </ReactCSSTransitionGroup>
                  </div>

                  {
                    this.state.ccSelectedCoin !== undefined
                    ?
                    (<div className="other-coin-stats">
                      <div className="stats-container"><span className="coin-stat-headers">Algorithm</span><span className="coin-stats">{` ${this.state.ccSelectedCoin.Algorithm}`}</span></div>
                      {premined}
                      <div className="stats-container"><span className="coin-stat-headers">Available Coin Supply</span><span className="coin-stats">{` ${availCoinSupply}`}</span></div>
                      <div className="stats-container"><span className="coin-stat-headers">Max Coin Supply</span><span className="coin-stats">{` ${maxCoinSupply}`}</span></div>
                    </div>)
                    :
                    (<div className="other-coin-stats">
                      <div className="stats-container"><span className="coin-stat-headers">Available Coin Supply</span><span className="coin-stats">{` ${availCoinSupply}`}</span></div>
                    </div>)
                  }
                </div>

                <div className="col-md-6">

                </div>
              </div>
              
            </div>

          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-info' onClick={this.hideModal}>Close</button>
          </Modal.Footer>
        </Modal>

        <div className="col-md-8 left-col">
          <div className="topbar">
            <a href="/"><span className="icon icon-chevron-with-circle-left back-arrow"></span></a>
            <h1 id="coins-title">JoinCoin</h1>
          </div>
          <div className="info-panel">
            <div className="stat-panel">
              <h1 className="text-center cmarket-title"><span id="the">The </span>Cryptocurrency Market</h1>
              <div className="row">
                <div className="col-md-4">
                  <div className="statcard text-center">
                    <h3 className="statcard-number">
                      {this.state.loading ? (<PulseLoader color="#ccc" size="6px" margin="4px"/>) : this.state.global.active_currencies}
                    </h3>
                    <span className="statcard-desc">Cryptocurrencies</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="statcard text-center">
                    <h3 className="statcard-number">
                      {this.state.loading ? (<PulseLoader color="#ccc" size="6px" margin="4px"/>) : `$${this.parseNum(parseInt(this.state.global.total_market_cap_usd, 10))}`}
                    </h3>
                    <span className="statcard-desc">Total Market Cap</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="statcard text-center">
                    <h3 className="statcard-number">
                      {this.state.loading ? (<PulseLoader color="#ccc" size="6px" margin="4px"/>) : `$${this.parseNum(this.state.global.total_24h_volume_usd)}`}
                    </h3>
                    <span className="statcard-desc">24-Hour Trade Volume</span>
                  </div>
                </div>
                {/*
                  <div className="col-md-3">
                    <div className="statcard statcard-primary p-a-md">
                      <h3 className="statcard-number">
                        {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : `${parseFloat(this.state.global.bitcoin_percentage_of_market_cap).toFixed(1)}%`}
                      </h3>
                      <span className="statcard-desc">BTC Share<br /> of Mkt Cap</span>
                    </div>
                  </div>
                */}
              </div>
            </div>

              {/*  
                <div className="row">
                  <div className="col-md-12">
                    <div className="statcard statcard-success p-a-md">
                      <h3 className="statcard-number">
                        <span className="icon icon-star"></span> Featured Exchange
                      </h3>
                      <span className="statcard-desc">JoinCoin's pick for the best cryptocurrency exchange is Gemini!<br />Please contact us to for advertisement opportunities.</span>
                    </div>
                  </div>
                </div>
              */}
            <div className="row text-center">
              <div className="col-md-6">
                <div className="exchange-panel">
                  <h3 className="action-title"><span className="ctaction">Buy</span> at Exchanges</h3>
                  <ol className="coin-list">
                    <li><a href="https://gemini.com/">Gemini</a></li>
                    <li><a href="https://localbitcoins.com/">LocalBitcoins</a></li>
                    <li><a href="https://www.coinbase.com/">Coinbase</a></li>
                    <li><a href="https://www.kraken.com/">Kraken</a></li>
                    <li><a href="https://cex.io/">CEX.IO</a></li>
                  </ol>
                </div>
              </div>
              <div className="col-md-6">
                <div className="wallet-panel">
                  <h3 className="action-title"><span className="ctaction">Store</span> in Wallets</h3>
                  <ol className="coin-list">
                    <li><a href="https://trezor.io/">Trezor (Hardware)</a></li>
                    <li><a href="https://blockchain.info/wallet/">Blockchain.info</a></li>
                    <li><a href="https://jaxx.io/">Jaxx</a></li>
                    <li><a href="https://wallet.mycelium.com/">MyCelium (Mobile)</a></li>
                    <li><a href="https://electrum.org/">Electrum (Mobile)</a></li>
                  </ol>
                </div>
              </div>
            {/*
              <div className="col-md-6">
                <h3>Resources</h3>
                  <ul>
                  <li><a href="#">imdb to Bitcoin documentary</a></li>
                  <li><a href="#">Good explanation video</a></li>
                  <li><a href="#">Wallet comparison</a></li>
                  <li><a href="#">Awesome bitcoin article</a></li>
                </ul>
              </div>
            */}

            </div>
          </div>{/* end info-panel */}
        </div>

        <div className="col-md-4 right-col">
          <div className="search-panel">
            <div className="topbar topbar-right">
              <h1 id="list-title">List of Cryptocurrencies</h1>
            </div>
            <input className="form-control" id="coin-search" onChange={this.handleSearchTermChange} type="text" value={this.state.searchTerm} placeholder="Search coins" style={inputStyle} />
            {/*
              <div className="row headers">
                <div className="header-rank">Rank</div>
                <div className="header-coin">Coin</div>
                <div className="header-ticker">Ticker Symbol</div>
                <div className="header-supply">Total Supply</div>
                <div className="header-algo">Algorithm</div>
              </div>
            */}
            {
              this.state.loading
              ?
              (
                <div style={divStyle} className="loader-container">
                  <BounceLoader color="#2595FF" size="100px" margin="4px"/>
                </div>
              )
              :
              <Infinite className="infinite" containerHeight={window.innerHeight-140} elementHeight={70}>
                {
                  this.state.coins
                    .sort( (a, b) => {
                      var rankA = parseInt(a.rank, 10);
                      var rankB = parseInt(b.rank, 10);

                      if(rankA < rankB) {
                        return -1;
                      } 

                      if(rankA > rankB) {
                        return 1;
                      }

                      return 0;
                    })
                    .filter( coin => `${coin.name} ${coin.symbol}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                    .map( coin => (
                    <Coin key={coin.id} coin={coin} handleCoinClick={this.handleCoinClick} parseNum={this.parseNum} />
                  ))
                }
              </Infinite>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Coins;
