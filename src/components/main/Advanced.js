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
            <div className="middleSideBarFringe" onClick={this.goToCoins.bind(this)}>
  				    <h3 id="sideHeader" className="sideHeader Row">Advanced</h3>      
                    <div className="innerCaptionBeginner">                      
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYeJi2wUYEizTM0hMV7QjVaiKY3sGo4VRaSL-JyXveZIb2LH33g" id="beginner-banner" className=""/>
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