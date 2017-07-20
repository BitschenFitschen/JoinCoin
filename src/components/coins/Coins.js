import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './coins.css';
import Coin from './Coin';
import axios from 'axios';
import Infinite from 'react-infinite';
// import { Column, Table } from 'react-virtualized';
// import 'react-virtualized/styles.css';
import PulseLoader from 'halogen/PulseLoader';
import BounceLoader from 'halogen/BounceLoader';

class Coins extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.preminedOnly = this.preminedOnly.bind(this);
    this.notPreminedOnly = this.notPreminedOnly.bind(this);
    this.nullPremined = this.nullPremined.bind(this);
    this.parseNum = this.parseNum.bind(this);
  }

  state = {
    coins: [],
    global: {},
    selectedCoin: '',
    searchTerm: '',
    filterPremined: null,
    loading: true
  };

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value });
  }

  preminedOnly (event) {
    if(this.state.filterPremined === null) {
      this.setState({ filterPremined: false });
    } else if(this.state.filterPremined === true) {
      this.setState({ filterPremined: false });
    }
  }

  notPreminedOnly (event) {
    if(this.state.filterPremined === null) {
      this.setState({ filterPremined: true });
    } else if(this.state.filterPremined === false) {
      this.setState({ filterPremined: true });
    }
  }

  nullPremined (event) {
    if(this.state.filterPremined === true || this.state.filterPremined === false) {
      this.setState({ filterPremined: null });
    }
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

  componentDidMount(){
    setTimeout(() => { 
      this.setState({ loading: false })
    },2000)
  } // simulate loading

  componentWillMount() {
    let that = this;
    // this runs right before rendered
    axios.get('https://www.cryptocompare.com/api/data/coinlist/')
      .then(function (response) {
        console.log(response.data.Data);
        let arr = [];

        for (var key in response.data.Data) {
          // console.log(response.data.Data[key]);
          if (Object.prototype.hasOwnProperty.call(response.data.Data, key)) {
              arr.push(response.data.Data[key]);
          }
        }

        // console.log(arr);

        that.setState( { coins: arr } );

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
    // console.log(Object.keys(this.state.coins));
    // const list = this.state.coins
    // .sort( (a, b) => {
    //   var idA = a.SortOrder;
    //   var idB = b.SortOrder;

    //   if(idA < idB) {
    //     return -1;
    //   } 

    //   if(idA > idB) {
    //     return 1;
    //   }

    //   return 0;
    // })
    // .filter( coin => `${coin.FullName}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0);

    const divStyle = {
      height: window.innerHeight-114
    };

    return (
      <div className="coins-pg container-fluid">
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
                    var idA = parseInt(a.SortOrder);
                    var idB = parseInt(b.SortOrder);

                    if(idA < idB) {
                      return -1;
                    } 

                    if(idA > idB) {
                      return 1;
                    }

                    return 0;
                  })
                  .filter( coin => `${coin.FullName}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                  .filter( coin =>
                    ( ( coin.FullyPremined === "0" || coin.FullyPremined === "1" ) && this.state.filterPremined === null ) ||
                    ( coin.FullyPremined === "0"  && this.state.filterPremined === true ) ||
                    ( coin.FullyPremined === "1"  && this.state.filterPremined === false )
                  )
                  .map( coin => (
                  <Coin key={coin.Id} coin={coin} />
                ))
              }
            </Infinite>
          }
        </div>
        </div>
        <div className="col-md-7 text-center">
          <div className="floatRight info-panel">
            {/*
              <h1>Popular Coins/Rising Coins</h1>
              <ol>
                <li><a href="#">Bitcoin</a></li>
                <li><a href="#">Ethereum</a></li>
                <li><a href="#">Ripple</a></li>
                <li><a href="#">Litecoin</a></li>
                <li><a href="#">Dogecoin</a></li>
              </ol>
              <hr />
            */}

            <h2>Classifying Cryptocurrencies</h2>
            <h6>How coins differ from each other</h6>
            <div className="row">
              <div className="col-md-3">
                <button type="button" className="btn btn-danger-outline explain-btn">Ticker Symbol</button>
                <p>Like stocks, each cryptocurrency has a set of abbreviated letters that acts as a unique identifier</p>
              </div>
              <div className="col-md-3">
                <button type="button" className="btn btn-warning-outline explain-btn">Total Coin Supply</button>
                <p>Maximum number of coins that a particular cryptocurrency has available (usually set before launch)</p>
              </div>
              <div className="col-md-3">
                <button type="button" className="btn btn-info-outline explain-btn">Premined Coins</button>
                <p>If a coin is fully premined, there are no mining or miners involved, and is all done before launch</p>
              </div>
              <div className="col-md-3">
                <button type="button" className="btn btn-success-outline explain-btn">Algorithms</button>
                <p>Algorithms determine the security protocols and verification of transactions</p>
              </div>
            </div>
            <hr />
            <h2>Cryptocurrency Market</h2>
            <h6 className="m-b-2">How the entire cryptocurrency market is doing</h6>
            <div className="row">
              <div className="col-md-3">
                <div className="statcard statcard-primary p-a-md">
                  <h3 className="statcard-number">
                    {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : `$${this.parseNum(parseInt(this.state.global.total_market_cap_usd))}`}
                  </h3>
                  <span className="statcard-desc">Total Market Cap</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="statcard statcard-primary p-a-md">
                  <h3 className="statcard-number">
                    {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : `$${this.parseNum(this.state.global.total_24h_volume_usd)}`}
                  </h3>
                  <span className="statcard-desc">24h Trading Volume</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="statcard statcard-primary p-a-md">
                  <h3 className="statcard-number">
                    {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : this.state.global.active_currencies}
                  </h3>
                  <span className="statcard-desc">Active Currencies</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="statcard statcard-primary p-a-md">
                  <h3 className="statcard-number">
                    {this.state.loading ? (<PulseLoader color="#fff" size="6px" margin="4px"/>) : `${this.state.global.bitcoin_percentage_of_market_cap}%`}
                  </h3>
                  <span className="statcard-desc">BTC % of Market Cap</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <h2><span className="icon icon-star"></span> Featured Exchange</h2>
                <div className="statcard statcard-success p-a-md">
                  <h3 className="statcard-number">
                    Gemini
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

        {/*
        
        <Table
          width={1000}
          height={800}
          headerHeight={20}
          rowHeight={30}
          rowCount={list.length}
          rowGetter={({ index }) => list[index]}
        >

          <Column
            label='Coin Name'
            dataKey='CoinName'
            width={250}
          />
          <Column
            width={100}
            label='Symbol'
            dataKey='Name'
          />
          <Column
            width={100}
            label='Premined?'
            dataKey='FullyPremined'
          />
          <Column
            width={100}
            label='Algo'
            dataKey='Algorithm'
          />
          <Column
            width={200}
            label='Total Coin Supply'
            dataKey='TotalCoinSupply'
          />
        </Table>
      */}
      {/* 

        <button onClick={(e) => this.preminedOnly(e)}>Premined Coins</button>
        <button onClick={(e) => this.notPreminedOnly(e)}>Mineable Coins</button>
        <button onClick={(e) => this.nullPremined(e)}>All Coins</button>
        <div className="coins-container">
          { 
            this.state.coins
              .sort( (a, b) => {
                var idA = a.SortOrder;
                var idB = b.SortOrder;

                if(idA < idB) {
                  return -1;
                } 

                if(idA > idB) {
                  return 1;
                }

                return 0;
              })
              .filter( coin => `${coin.FullName}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
              .filter( coin =>
                ( ( coin.FullyPremined === "0" || coin.FullyPremined === "1" ) && this.state.filterPremined === null ) ||
                ( coin.FullyPremined === "0"  && this.state.filterPremined === true ) ||
                ( coin.FullyPremined === "1"  && this.state.filterPremined === false )
              )
              .map( coin => (
              <Coin key={coin.Id} coin={coin} />
            ))
          }
        </div>
      */}
      </div>
    );
  }
}

export default Coins;
