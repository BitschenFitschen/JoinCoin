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
  goToReddit(event) {
  	event.preventDefault();
  	this.context.router.transitionTo(`/redditArticles`);
  }
	render(){
		return (
			<Carousel>
				
				<Carousel.Item>
			      	<div>
			      		<img onClick={this.goToCoins.bind(this)} alt="" id="animated-example" src="https://i.stack.imgur.com/pMAiU.jpg"/>
			      	</div>
			      	<img alt="" id="welcomeLogo" src={require('./JC-logo-final-lincoln.png')}/>
			      	<Carousel.Caption className="innerCaptionWelcome">
			        <h3 id="animated-example" className="innerCaptionWelcomeText">Welcome to Join<span id="welcomeC">¢</span>oin!</h3>
				      </Carousel.Caption>
				      <Carousel.Caption className="introCaptionWelcomeSubText">
				      		<p className="leftIntroCaptionWelcomeSubText" onClick={this.goToEducation.bind(this)}>Beginners</p>
				      		<p className="centerIntroCaptionWelcomeSubText" onClick={this.goToCoins.bind(this)}>Search Any Coin!</p>
				      		
				      		<p className="centerIntroCaptionWelcomeSubText"onClick={this.goToDashboard.bind(this)}>Dashboard</p>
				      		<p className="centerIntroCaptionWelcomeSubText2"onClick={this.goToProfitCalculator.bind(this)}>Profit Calculator</p>
				      		<p className="centerIntroCaptionWelcomeSubText2"onClick={this.goToReddit.bind(this)}>Reddit</p>
				      </Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item onClick={this.goToEducation2.bind(this)}>
			      <div>
			      	<img alt="" id="animated-example" src="https://themerkle.com/wp-content/uploads/2017/02/crypto-questions-part-1.jpg"/>
			      </div>
			      <Carousel.Caption className="innerCaptionBeginner2">
			        <h3 id="innerCaptionBeginner">Join
			        	<span id="welcomeCWhite">¢</span>oin for Beginners
			        </h3>
			      </Carousel.Caption>
			      <Carousel.Caption className="introCaptionBeginnerSubText">
			      	<p>Simple answers for your questions on cryptocurrency</p>
			      </Carousel.Caption>
			    </Carousel.Item>

			    <Carousel.Item onClick={this.goToCoins.bind(this)}>
			      	<div>
			      		<img alt="" id="animated-example" src="http://theartmad.com/wp-content/uploads/Cool-Light-Grey-Background-01.jpg"/>
			      	</div>
			      	<img alt="" id="coinsCarouselBanner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8XbnmLLkEp1Xsak2RJaQwvFIqMWFl82PjskI9oBuZmdedTFG"/>
			      	<Carousel.Caption className="innerCaptionCoins">
			        	<h3 id="innerCaptionCoinsText">Search | Monitor | Forecast</h3>
			        	<h3 id="innerCaptionCoinsText2"> any coin </h3>
			      	</Carousel.Caption>
			      	<img alt="" id="coinsCarouselBanner2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8XbnmLLkEp1Xsak2RJaQwvFIqMWFl82PjskI9oBuZmdedTFG"/>
			    </Carousel.Item>

			    <Carousel.Item>
			      <div>
			      	<img onClick={this.goToReddit.bind(this)} alt="" id="animated-example" src="http://az616578.vo.msecnd.net/files/2016/07/01/636029417935340699-58088307_reddit.jpg"/>
			      </div>
			      <Carousel.Caption className="innerCaptionReddit">
			        <h3 id="animated-example" className="innerCaptionRedditText">Get the latest.. </h3>
				  </Carousel.Caption>
			      <Carousel.Caption className="innerCaptionReddit2">
			      	<a href={this.state.result[1] ? this.state.result[1].link.indexOf('/r/') !== -1 ? `https://www.reddit.com${this.state.result[1].link}`: this.state.result[1].link : 'https://www.reddit.com/r/CryptoCurrency/'}>
			        	<p id="redditText2">{this.state.result[1] ? this.state.result[1].title : 'Cryptocurrency topics on Reddit'}</p>
			        </a>
			        <a href={this.state.result[2] ? this.state.result[2].link.indexOf('/r/') !== -1 ? `https://www.reddit.com${this.state.result[2].link}`: this.state.result[2].link : 'https://www.reddit.com/r/CryptoCurrency/'}>
			        	<p id="redditText2">{this.state.result[2] ? this.state.result[2].title : ''}</p>
			        </a>			  		
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