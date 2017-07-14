import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'react-image-resizer';
import '../../../css/style.css';

class IntroCarousel extends Component {
	render(){
		return (
			<Carousel>
			    <Carousel.Item>
			      <Image width={560} height={300} alt="900x500" src={require('./JC-logo-final-lincoln.png')}/>
			      <Carousel.Caption>
			        <h3>JoinCoin for beginners</h3>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <Image className="introCarouselImage" width={560} height={300} alt="900x500" src="https://es.panampost.com/wp-content/uploads/featured-inncoin-anthem.png"/>
			      <Carousel.Caption>
			        <h3>JoinCoin for beginners</h3>
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
  

export default IntroCarousel;