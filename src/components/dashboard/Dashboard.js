import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import axios from 'axios';

class Dashboard extends Component {

   constructor(props) {
   	super(props)
   	this.state = {
   		dashboardData: 9001
   	}
   }

   componentWillMount() {
   	let renderArr = [];
    let _this = this
    axios.get('https://api.cryptonator.com/api/full/btc-usd')
      .then(function (response) {
      	for (var i = 0; i < 10; i++) {
        // console.log(response.data.ticker.markets[i].market);
        // console.log(response.data.ticker.markets[i].price);
        // console.log(response.data.ticker.markets[i].volume);
        renderArr.push(response.data.ticker.markets[i]);
    }
    	// console.log(response.data.ticker.base)
        _this.setState({
    		dBase: response.data.ticker.base,
    		dTarget: response.data.ticker.target,
    		dPrice: response.data.ticker.price,
    		dVolume: response.data.ticker.volume,
    		dChange: response.data.ticker.change,
    		dList1: renderArr[0].market,
    		dList2: renderArr[0].price,
    		dList3: renderArr[0].volume
    	})

      })
      .catch(function (errorMsg) {
        console.log(errorMsg);
      });
  }

  render() {
    let dDash0 = this.state.dBase;
    let dDash1 = this.state.dTarget;
    let dDash2 = this.state.dPrice;
    let dDash3 = this.state.dVolume;
    let dDash4 = this.state.dChange;
    let dDash5 = this.state.dList1;
    let dDash6 = this.state.dList2;
    let dDash7 = this.state.dList3;
    return (
      <div className="dashboard">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
				<div class="mainDashboardQuery">
				<h1>Main Coin Search</h1>
				<p>{dDash0}</p>
				<p>{dDash1}</p>
				<p>{dDash2}</p>
				<p>{dDash3}</p>
				<p>{dDash4}</p>
				</div>
				<div class="compareDashboardQuery">
				<h1>Comparison</h1>
				<p>{dDash5}</p>
				<p>{dDash6}</p>
				<p>{dDash7}</p>
				</div>
		</Col>
      </div>
    );
  }
}

	// componentDidMount () {
	// 	fetch('https://api.cryptonator.com/api/full/btc-usd')
 //    	.then(function(response) { return response.json(); })
 //    	.then(function(json) {
 //    	console.log(json);
	// 	});
	// }

export default Dashboard;