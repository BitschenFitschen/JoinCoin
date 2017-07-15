import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
// import Image from 'react-image-resizer';
import '../../../css/style.css';

class IntroCarousel extends Component {
	goToEducation(event) {
    event.preventDefault();
    this.context.router.transitionTo(`/education`);
  }
  goToAdvanced(event) {
    event.preventDefault();
    this.context.router.transitionTo(`/advancedUserTools`);
  }
  goToDashboard(event) {
  	event.preventDefault();
  	this.context.router.transitionTo(`/dashboard`);
  }
  goToCoins(event) {
  	event.preventDefault();
  	this.context.router.transitionTo(`/coins`);
  }
  goToProfitCalculator(event) {
  	event.preventDefault();
  	this.context.router.transitionTo(`/profitCalculator`);
  }
  goToRegister(event) {
  	event.preventDefault();
  	this.context.router.transitionTo(`/register`);
  }
	render(){
		return (
			<Carousel>
				<Carousel.Item>
			      <div onClick={this.goToEducation.bind(this)}><img alt="" id="animated-example" src="https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/3/35/Bitcoin_euro.png"/>
			      </div>
			      <Carousel.Caption>
			        <h3>JoinCoin for beginners -- education</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div onClick={this.goToAdvanced.bind(this)}><img alt="" id="animated-example" src="https://crushthestreet.com/wp-content/uploads/2017/06/What-Does-The-Future-Hold-Where-Will-Cryptocurrencies-Be-in-Five-Years-750x331.jpg"/>
			      </div>
			      <Carousel.Caption>
			        <h3>Advanced User Tools</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div onClick={this.goToDashboard.bind(this)}><img alt="" id="animated-example" src="http://cryptocurrencybitcoinnews.com/wp-content/uploads/2016/06/Cryptocurrency-The-Truth-about-It.jpg"/>
			      </div>
			      <Carousel.Caption>
			        <h3>Dashboard</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      	<div onClick={this.goToProfitCalculator.bind(this)}><img alt="" id="animated-example" src="http://1.bp.blogspot.com/-3kJKsoL02h8/Uo-YY2CchVI/AAAAAAAABvw/2AUKiGPMFZs/s1600/altcoins.png"/></div>
			      <Carousel.Caption>
			        <h3>Profit Calculator</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div onClick={this.goToCoins.bind(this)}><img alt="" id="animated-example" src={require('./JC-logo-final-lincoln.png')}/></div>
			      <Carousel.Caption>
			        <h3>Coins</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div onClick={this.goToDashboard.bind(this)}><img id="animated-example" alt="" src="https://es.panampost.com/wp-content/uploads/featured-inncoin-anthem.png"/></div>
			      <Carousel.Caption>
			        <h3>Register</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img id="animated-example" src="https://www.royalvegascasino.com/blog/wp-content/uploads/www_royalvegas_com/2014/07/Header1.jpg"/>
			      <Carousel.Caption>
			        <h3>JoinCoin for Advanced Users</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img id="animated-example"  alt="" src="http://images.huffingtonpost.com/2016-09-14-1473882679-3868833-bitcoin-thumb.jpg"/>
			      <Carousel.Caption>
			        <h3>JoinCoin for Advanced Users</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img id="animated-example"  alt="" src="http://asiainc500.com/wp-content/uploads/2017/05/What-is-Cryptocurrency.png"/>
			      <Carousel.Caption>
			        <h3>JoinCoin Dashboard</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			</Carousel>
		)
	}
}
  
IntroCarousel.contextTypes = {
  router: React.PropTypes.object
}

export default IntroCarousel;