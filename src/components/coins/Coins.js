import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './reset.css'
import './coins.css';
import Coin from './Coin';
import axios from 'axios';

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

    return (
      <div className="container-fluid">
        <h1>Coins</h1>
        <input onChange={this.handleSearchTermChange} type="text" value={this.state.searchTerm} placeholder="Search for coin" />
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
      </div>
    );
  }
}

export default Coins;
