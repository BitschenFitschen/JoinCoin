import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class IntroCarousel extends Component {
	render(){
		return (
			<Carousel>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src="http://lorempixel.com/400/200/sports/"/>
			      <Carousel.Caption>
			        <h3>JoinCoin for beginners</h3>
			        <p>Simply explained, find answers to all of your questions relating to cryptocurrency including the ones you didn't know you had.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={require('./JC-logo-final-lincoln.png')}/>
			      <Carousel.Caption>
			        <h3>JoinCoin for Advanced Users</h3>
			        <p>Use our investement simulator for cryptocurrencies</p>
			        <p>Find the latest articles</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src="http://lorempixel.com/400/200/sports/"/>
			      <Carousel.Caption>
			        <h3>JoinCoin Dashboard</h3>
			        <p>Monitor all of your preferred cryptocurrencies</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			</Carousel>
		)
	}
}
  

export default IntroCarousel;