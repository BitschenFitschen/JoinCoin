import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import axios from 'axios';

class Dashboard extends Component {
  componentWillMount() {
    axios.get('https://api.cryptonator.com/api/full/btc-usd')
      .then(function (response) {
    	console.log(response.data.ticker.base)
      })
      .catch(function (errorMsg) {
        console.log(errorMsg);
      });
  }


  render() {
    return (
      <div className="dashboard">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
				<p>Dashboard</p>
		</Col>
      </div>
    );
  }
}

export default Dashboard;