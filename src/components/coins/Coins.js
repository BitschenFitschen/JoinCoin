import React, { Component } from 'react';
import './coins.css';
import Coin from './Coin';
import axios from 'axios';
import Infinite from 'react-infinite';;
import PulseLoader from 'halogen/PulseLoader';
import BounceLoader from 'halogen/BounceLoader';
import { Button, Modal } from 'react-bootstrap';


class Coins extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.parseNum = this.parseNum.bind(this);
    this.handleCoinClick = this.handleCoinClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  state = {
    coins: [],
    global: {},
    selectedCoin: {},
    searchTerm: '',
    loading: true,
    show: false
  };

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleCoinClick (coin, e) {
    this.setState({ selectedCoin: coin });

    this.showModal();
  }

  showModal () {
    this.setState({show: true});
  }

  hideModal () {
    this.setState({show: false});
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
    },2000)
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

    return (
      <div className="coins-pg container-fluid">
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              {`${this.state.selectedCoin.name}`}
              <span>{` (${this.state.selectedCoin.symbol})`}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <div className="single-coin-container">
              <h3>Price</h3>
              <p>{`$${parseFloat(this.state.selectedCoin.price_usd)} per 1 ${this.state.selectedCoin.symbol}`}</p>
              <p>{`Change in 1 Hour: ${this.state.selectedCoin.percent_change_1h}%`}</p>
              <p>{`Change in 1 Day: ${this.state.selectedCoin.percent_change_24h}%`}</p>
              <p>{`Change in 1 Week: ${this.state.selectedCoin.percent_change_7d}%`}</p>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        <h1 id="coins-title">Coins</h1>
        <div className="col-md-5">
        <div className="search-panel">
          
          <input className="form-control" id="coin-search" onChange={this.handleSearchTermChange} type="text" value={this.state.searchTerm} placeholder="Search for coin" />
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
            <Infinite className="infinite" containerHeight={window.innerHeight-114} elementHeight={80}>
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
        <div className="col-md-7 text-center p-l-lg p-r-lg">
          <div className="info-panel">
            <h2>Classifying Cryptocurrencies</h2>
            <h6>How coins differ from each other</h6>
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-danger-outline explain-btn">Ticker Symbol</button>
                <p>Like stocks, each cryptocurrency has a set of abbreviated letters that acts as a unique identifier</p>
              </div>
              <div className="col-md-6">
                <button type="button" className="btn btn-warning-outline explain-btn">Total Coin Supply</button>
                <p>Maximum number of coins that a particular cryptocurrency has available (usually set before launch)</p>
              </div>
            </div>
            <hr />
            <h2>Cryptocurrency Market</h2>
            <h6 className="m-b-2">How the entire cryptocurrency market is doing</h6>
            <div className="row">
              <div className="col-md-3">
                <div className="statcard statcard-primary p-a-md">
                  <h3 className="statcard-number">
                    {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : `$${this.parseNum(parseInt(this.state.global.total_market_cap_usd, 10))}`}
                  </h3>
                  <span className="statcard-desc">Total Market Cap</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="statcard statcard-primary p-a-md">
                  <h3 className="statcard-number">
                    {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : `$${this.parseNum(this.state.global.total_24h_volume_usd)}`}
                  </h3>
                  <span className="statcard-desc">24h Trading Vol</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="statcard statcard-primary p-a-md">
                  <h3 className="statcard-number">
                    {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : this.state.global.active_currencies}
                  </h3>
                  <span className="statcard-desc">Cryptocurrencies</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="statcard statcard-primary p-a-md">
                  <h3 className="statcard-number">
                    {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : `${this.parseNum(this.state.global.bitcoin_percentage_of_market_cap)}%`}
                  </h3>
                  <span className="statcard-desc">BTC % of Mkt Cap</span>
                </div>
              </div>
            </div>
            <div className="row m-t-md">
              <div className="col-md-12">
                <div className="statcard statcard-success p-a-md">
                  <h3 className="statcard-number">
                    <span className="icon icon-star"></span> Featured Exchange
                  </h3>
                  <span className="statcard-desc">JoinCoin's pick for the best cryptocurrency exchange is Gemini!<br />Please contact us to for advertisement opportunities.</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <h3>Exchanges</h3>
                <ol className="text-left">
                  <li>Gemini</li>
                  <li>Coinbase</li>
                  <li>GDAX</li>
                  <li>Kraken</li>
                  <li>Coinmama</li>
                </ol>
              </div>
              <div className="col-md-3">
                <h3>Wallets</h3>
                <ol className="text-left">
                  <li>Blockchain.info</li>
                  <li>MyCelium</li>
                  <li>Trezor</li>
                  <li>Electrum</li>
                  <li>Paper Wallet</li>
                </ol>
              </div>
              <div className="col-md-6">
                <h3>Resources</h3>
                <ul className="text-left">
                  <li><a href="#">imdb to Bitcoin documentary</a></li>
                  <li><a href="#">Good explanation video</a></li>
                  <li><a href="#">Wallet comparison</a></li>
                  <li><a href="#">Awesome bitcoin article</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coins;
