import React, { Component } from 'react';
import axios from 'axios';


class RedditArticles extends Component {
  state = {
  	result: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get('http://localhost:3000/redditResult').then(function (response) {
  		that.setState({result:response.data})
  	})
  }
  render () {
    return (
      <div className="redditArticles">
        <h1></h1>
        {
        	this.state.result.map(i => <ol><a href={i.link}><span key={i.title}>{i.title}</span></a><span key={i.link}>    Link: {i.link}</span></ol>) 
        }
      </div>
      )
  }

}

export default RedditArticles;