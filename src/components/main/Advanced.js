import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Image from 'react-image-resizer';

class Advanced extends Component {
  goToCoins(event) {
    event.preventDefault();
    this.context.router.transitionTo(`/coins`);
  }
  render() {
    return (
      <div className="advanced sideSection">
         <Col xs={12} sm={3} md={3} lg={3}>
            <div className="upperSideBarFringe">
            </div>
            <div className="middleSideBarFringe">
  				    <h3 id="sideHeader" className="sideHeader Row">Coins</h3>      
                    <div className="innerCaptionBeginner" onClick={this.goToCoins.bind(this)}>                      
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKpCx_BihU1tDXqIqOkxMqDCFn9h0rgtbZ0-vPfNJ9mwSNd_LKA" id="beginner-banner" className=""/>
                      </div>
                    </div>   
            </div>
            <div className="lowerSideBarFringe">
            </div>
		      </Col>
      </div>
    );
  }
}

Advanced.contextTypes = {
  router: React.PropTypes.object
}

export default Advanced;