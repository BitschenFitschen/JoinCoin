import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './coins.css';
import Coin from './Coin';
import axios from 'axios';

class Coins extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  state = {
    coins: [],
    searchTerm: ''
  };

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value });
  }

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
