import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import axios from 'axios';

class Dashboard extends Component {
  
  ////// Debug Code here
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
    let _this = this
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(function (response) {
      	for (var i = 0; i < 10; i++) {
        renderArr1.push(<p key={i}>{response.data[i].name}</p>);
        renderArr2.push(<p key={i}>{response.data[i].price_usd}</p>);
    }

    _this.setState({
      fillerData1: renderArr1,
      fillerData2: renderArr2
    })
      })
      .catch(function (errorMsg) {
        console.log(errorMsg);
      });
  }

  render() {
// Place for setStates later 
  let fillerData1 = this.state.fillerData1
  let fillerData2 = this.state.fillerData2
    return (
      <div className="dashboard">
        <Col xs={6} sm={6} md={3} lg={3} xl={3}>
        {
          <div>
            <ul>
            <h1>Filler Data 01</h1>
            {fillerData1}
            </ul>
          </div>
        }
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} xl={3}>
        {
          <div>
            <ul>
            <h1>Filler Data 02</h1>
            {fillerData2}
            </ul>
          </div>
        }
        </Col>
      </div>
    );
  }
}
  // Testing Mapping to pull data from array of objects
  // render1.map((objMap, index) => {
  //  return <p key={index}>{objMap}</p>
  // })


export default Dashboard;