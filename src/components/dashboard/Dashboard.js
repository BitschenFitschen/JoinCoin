import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import axios from 'axios';

class Dashboard extends Component {


  // getInitialState(){
  //   return {
  //     render1: {
  //       renderArr1: []
  //     }
  //   }
  // }
  // getDefaultProps() {
  //   return {
  //     render1: []
  //   }
  // }

   constructor(props) {
    super(props)
    this.state = {
      render1: 9001
    }
   }

   componentWillMount() {
    let renderArr1 = [];
    let renderArr2 = [];
    let renderArrTop10Name = [];
    let renderArrTop10USD = [];
    let renderArrTop10Rank = [];
    let _this = this
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          // console.log(response.data[i].id);
          renderArr1.push(<p key={i}>{response.data[i].name}</p>);
          renderArr2.push(<p key={i}>{response.data[i].price_usd}</p>);
        }
        for (var j = 0; j < 10; j++) {
          renderArrTop10Name.push(<p key={j}>{response.data[j].name}</p>);
          renderArrTop10USD.push(<p key={j}>{response.data[j].price_usd}</p>);
          renderArrTop10Rank.push(<p key={j}>{response.data[j].rank}</p>);
          console.log(response.data[j]);
        }
        console.log(response.data[0])
        
        _this.setState({
          fillerData1: renderArr1,
          fillerData2: renderArr2,
          id: response.data[0].id,
          name: response.data[0].name,
          symbol: response.data[0].symbol,
          priceUS: response.data[0].price_usd,
          perChange1h: response.data[0].percent_change_1h,
          perChange24h: response.data[0].percent_change_24h,
          perChange7d: response.data[0].percent_change_7d,
          top10Name: renderArrTop10Name,
          top10USD: renderArrTop10USD,
          top10Rank: renderArrTop10Rank

        })

      })
      .catch(function (errorMsg) {
        console.log(errorMsg);
      });

  }

  render() {
    let r1 = this.state.id
    let r2 = this.state.name
    let r3 = this.state.symbol
    let r4 = this.state.priceUS
    let r5 = this.state.perChange1h
    let r6 = this.state.perChange24h
    let r7 = this.state.perChange7d
    let fillerData1 = this.state.fillerData1
    let fillerData2 = this.state.fillerData2
    let top10Name = this.state.top10Name
    let top10USD = this.state.top10USD
    let top10Rank = this.state.top10Rank
    // let render2 = this.state.price
    return (
      <div className="dashboard">
        <Col xs={12} sm={12} md={6} lg={6}>
        {
          <div>
          <h1>Search Query Results [BTC as Example]</h1>
          <p>ID: {r1}</p>
          <p>Name: {r2}</p>
          <p>Symbol: {r3}</p>
          <p>Price (USD): {r4}</p>
          <p>Percent Change 1 HR: {r5}</p>
          <p>Percent Change 24 HR: {r6}</p>
          <p>Percent Change 7 D: {r7}</p>
          </div>
        }
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
        {
          <div>
            <ul>
            <h1>Rank</h1>
            {top10Rank}
            </ul>
          </div>
        }
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
        {
          <div>
            <ul>
            <h1>Name</h1>
            {top10Name}
            </ul>
          </div>
        }
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
        {
          <div>
            <ul>
            <h1>USD</h1>
            {top10USD}
            </ul>
          </div>
        }
        </Col>
      </div>
         // Testing Mapping to pull data from array of objects
         // render1.map((objMap, index) => {
         //  return <p key={index}>{objMap}</p>
         // })

    );
  }
}

  // componentDidMount () {
  //  fetch('https://api.cryptonator.com/api/full/btc-usd')
 //     .then(function(response) { return response.json(); })
 //     .then(function(json) {
 //     console.log(json);
  //  });
  // }

export default Dashboard;