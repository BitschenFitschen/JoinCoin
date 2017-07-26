import React, { Component } from 'react';
import axios from 'axios';


class RedditArticles extends Component {
  state = {
  	result: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get('/redditResult').then(function (response) {
  		that.setState({result:response.data})
  	})
  }
  render () {
    return (
      <div className="redditArticles">
        <h1>Listing of the latest Cryptocurrency discussions on <a href="https://www.reddit.com/r/CryptoCurrency/">Reddit</a></h1>
        {
        	this.state.result.map(i => <ul><a href={i.link}><li key={i.title}>{i.title}</li></a><span key={i.link}>    Link: {i.link}</span></ul>) 
        }
      </div>
      )
  }

}

export default RedditArticles;