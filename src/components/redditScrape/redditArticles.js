import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
var results = require ("./redditScrape");

// console.log(results);

class RedditArticles extends Component {
	render() {
		return (
			<div className="redditArticles">
				<Col xs={12} sm={12} md={12} lg={12}>
					<h1>Reddit Articles</h1>
						<h3>{results.title}</h3>
						<a href={results.link}></a>
				</Col>
			</div>
		);
		
	}
}

export default RedditArticles;

