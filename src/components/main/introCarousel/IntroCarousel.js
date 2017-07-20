import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';
// import Image from 'react-image-resizer';
import '../../../css/style.css';

class IntroCarousel extends Component {
	state = {
  	result: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get(`/redditResult`).then(function (response) {
  		that.setState({result:response.data});
  	});
  }
  goToEducation(event) {
    event.preventDefault();
    this.context.router.transitionTo(`/education`);
  }
  goToEducation2(event) {
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
			      <div onClick={this.goToCoins.bind(this)}><img alt="" id="animated-example" src={require('./JC-logo-final-lincoln.png')}/></div>
			      <Carousel.Caption className="innerCaptionWelcome">
			        <h3 id="innerCaptionWelcome">Welcome to Join<span id="welcomeC">¢</span>oin!</h3>
			      </Carousel.Caption>
			      <Carousel.Caption className="introCaptionWelcomeSubText">
			      		<p onClick={this.goToEducation.bind(this)}>Answers for Beginners</p>
			      		<p onClick={this.goToCoins.bind(this)}>Advanced Users -- Search Any Coin!</p>
			      		<p onClick={this.goToDashboard.bind(this)}>Dashboard for all Users</p>
			      </Carousel.Caption>
			    </Carousel.Item>
				<Carousel.Item onClick={this.goToEducation2.bind(this)}>
			      <div><img alt="" id="animated-example" src="https://themerkle.com/wp-content/uploads/2017/02/crypto-questions-part-1.jpg"/>
			      </div>
			      <Carousel.Caption className="innerCaptionBeginner">
			        <h3>JoinCoin for Beginners</h3>
			      </Carousel.Caption>
			      <Carousel.Caption className="introCaptionBeginnerSubText">
			      	<p>Simply explained answers to all of your questions about cryptocurrency</p>
			      </Carousel.Caption>
			    </Carousel.Item>
				<Carousel.Item onClick={this.goToEducation.bind(this)}>
			      <div><img alt="" id="animated-example" src="https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/3/35/Bitcoin_euro.png"/>
			      </div>
			      <Carousel.Caption className="innerCaption">
			        <h3>JoinCoin for beginners -- education</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div><img alt="" id="animated-example" src="https://crushthestreet.com/wp-content/uploads/2017/06/What-Does-The-Future-Hold-Where-Will-Cryptocurrencies-Be-in-Five-Years-750x331.jpg"/>
			      </div>
			      <Carousel.Caption>
			        <a href={this.state.result[0] ? this.state.result[0].link.indexOf('/r/') !== -1 ? `https://www.reddit.com${this.state.result[0].link}`: this.state.result[0].link : 'https://www.reddit.com/r/CryptoCurrency/'}><h3 id="redditText">Cryptocurrency on Reddit</h3><h6 id="redditText">{this.state.result[0] ? this.state.result[0].title : ''}</h6></a>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img id="animated-example"  alt="" src="https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/c54/98/36de34d29ae0c1bf5fdc8ff0cbbf7610.jpg"/>
			      <Carousel.Caption>
			        <h3 id="redditText">Cryptocurrency on Reddit</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item onClick={this.goToDashboard.bind(this)}>
			      <div><img alt="" id="animated-example" src="http://cryptocurrencybitcoinnews.com/wp-content/uploads/2016/06/Cryptocurrency-The-Truth-about-It.jpg"/>
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
			      <img id="animated-example"  alt="" src="https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/c54/98/36de34d29ae0c1bf5fdc8ff0cbbf7610.jpg"/>
			      <Carousel.Caption>
			        <h3 id="carouselSubHeader">JoinCoin Dashboard</h3>
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