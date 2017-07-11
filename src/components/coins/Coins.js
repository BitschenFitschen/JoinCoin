import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './coins.css';
// import Coin from './Coin';
import axios from 'axios';

class Coins extends Component {
  // constructor() {
  //   super();
  // }

  state = {
    coins: []
  };

  componentWillMount() {
    let that = this;
    // this runs right before rendered
    axios.get('https://www.cryptocompare.com/api/data/coinlist/')
      .then(function (response) {
        // console.log(response.data.Data);
        let arr = [];

        for (var key in response.data.Data) {
          // console.log(response.data.Data[key]);
          arr.push(response.data.Data[key]);
        }

        console.log(arr);

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
        <input type="text" placeholder="Search for coin" />
        <div className="coin-container">
          {
            this.state.coins.map(coin => (
              <div className="coin-card">
                <h6>{this.state.coins[coin].CoinName}</h6>
                <span>{this.state.coins[coin].Algorithm}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Coins;
