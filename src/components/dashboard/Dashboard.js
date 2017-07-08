import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Dashboard extends Component {
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