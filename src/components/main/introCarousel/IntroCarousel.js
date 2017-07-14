import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'react-image-resizer';
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
			      <div onClick={this.goToEducation.bind(this)}><Image width={560} height={300} alt="900x500" id="animated-example" className="animated rollIn" src="https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/3/35/Bitcoin_euro.png"/>
			      </div>
			      <Carousel.Caption>
			        <h3>JoinCoin for beginners -- education</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div onClick={this.goToAdvanced.bind(this)}><Image width={560} height={300} alt="900x500" id="animated-example" className="animated rollIn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkdxo4F8vQTDCSTWqa8LYK55ItmoIuSDU-TTvuSMsZX9rwE99"/>
			      </div>
			      <Carousel.Caption>
			        <h3>Advanced User Tools</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div onClick={this.goToDashboard.bind(this)}><Image width={560} height={300} alt="900x500" id="animated-example" className="animated rollIn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYwIFwP2NqhEHx4g8wXR8i0wxL_2CIwdYpjl6zA2iYSmpaobw"/>
			      </div>
			      <Carousel.Caption>
			        <h3>Dashboard</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      	<div onClick={this.goToProfitCalculator.bind(this)}><Image width={560} height={300} alt="900x500" id="animated-example" className="animated rollIn" src="http://1.bp.blogspot.com/-3kJKsoL02h8/Uo-YY2CchVI/AAAAAAAABvw/2AUKiGPMFZs/s1600/altcoins.png"/></div>
			      <Carousel.Caption>
			        <h3>Profit Calculator</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div onClick={this.goToCoins.bind(this)}><Image width={560} height={300} alt="900x500" id="animated-example" className="animated rollIn" src={require('./JC-logo-final-lincoln.png')}/></div>
			      <Carousel.Caption>
			        <h3>Coins</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <div onClick={this.goToDashboard.bind(this)}><Image className="introCarouselImage" width={560} height={300} alt="900x500" src="https://es.panampost.com/wp-content/uploads/featured-inncoin-anthem.png"/></div>
			      <Carousel.Caption>
			        <h3>Register</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <Image className="introCarouselImage" width={560} height={300} alt="900x500" src="https://www.royalvegascasino.com/blog/wp-content/uploads/www_royalvegas_com/2014/07/Header1.jpg"/>
			      <Carousel.Caption>
			        <h3>JoinCoin for Advanced Users</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <Image className="introCarouselImage" width={560} height={300} alt="900x500" src="http://images.huffingtonpost.com/2016-09-14-1473882679-3868833-bitcoin-thumb.jpg"/>
			      <Carousel.Caption>
			        <h3>JoinCoin for Advanced Users</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <Image className="introCarouselImage" width={560} height={300} alt="900x500" src="http://asiainc500.com/wp-content/uploads/2017/05/What-is-Cryptocurrency.png"/>
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