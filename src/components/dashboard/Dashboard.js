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
    var _this = this
    axios.get('https://api.cryptonator.com/api/full/btc-usd')
      .then(function (response) {
        _this.setState({
    		dashboardData: response.data.ticker.base
    	})
      	for (var i = 0; i < 10; i++) {
        console.log(response.data.ticker.markets[i]);
    }
    	console.log(response.data.ticker.base)
    	return response.data

      })
      .catch(function (errorMsg) {
        console.log(errorMsg);
      });
  }


  render() {
    let dataDash = this.state.dashboardData;
    return (
      <div className="dashboard">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
				<p>{dataDash}</p>
		</Col>
      </div>
    );
  }
}
}

export default Dashboard;