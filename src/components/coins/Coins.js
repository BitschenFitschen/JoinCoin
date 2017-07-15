import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './reset.css'
import './coins.css';
import Coin from './Coin';
import axios from 'axios';
import Infinite from 'react-infinite';
// import { Column, Table } from 'react-virtualized';
// import 'react-virtualized/styles.css';

class Coins extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.preminedOnly = this.preminedOnly.bind(this);
    this.notPreminedOnly = this.notPreminedOnly.bind(this);
    this.nullPremined = this.nullPremined.bind(this);
  }

  state = {
    coins: [],
    selectedCoin: '',
    searchTerm: '',
    filterPremined: null
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

    return (
      <div className="coins-pg">
      
        <div className="search-panel">
          <h1 id="coins-title">Coins</h1>
          <input id="coin-search" onChange={this.handleSearchTermChange} type="text" value={this.state.searchTerm} placeholder="Search for coin" />
          <Infinite className="infinite" containerHeight={window.innerHeight-48-24} elementHeight={80}>
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
          </Infinite>
        </div>
        <div className="floatRight info-panel">
          <h1>Popular Coins</h1>
          <ol>
            <li><a href="#">Bitcoin</a></li>
            <li><a href="#">Ethereum</a></li>
            <li><a href="#">Ripple</a></li>
            <li><a href="#">Litecoin</a></li>
            <li><a href="#">Dogecoin</a></li>
          </ol>

          <h1>Explanation of Coin Stats</h1>
          <p>Explanation of Coin Stats Like Market Cap, Premined/Mineable Coins, Algorithms, Ticker Symbols,ETC</p>
          <br />
          <h1>Pertinent Info</h1>
          <p>Any other pertinent information that could be useful on the MULTIPLE COINS pg, displaying AGGREGATE DATA FOR ALL CRYPTOCURRENCIES COMBINED as an example, </p>
          <br />
          <h1>List of popular exchanges/wallets/resources</h1>
          <p>List of popular wallets or exchanges, we can leave a FEATURED EXCHANGE placeholder for future AdSpace</p>
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
