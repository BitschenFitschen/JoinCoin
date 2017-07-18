import React, { Component } from 'react';
import request from 'request';
import cheerio from 'cheerio';

class RedditScrape extends Component {
  constructor(props) {
    super(props);
    this.handleCheerioObject = this.handleCheerioObject.bind(this);
  }
  state = {
    result: []
  };

   handleCheerioObject () {
    this.setState({ result: result });
  }
  componentWillMount() {
    // First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");
// Making a request call for reddit's "CryptoCurrency" board. The page's HTML is saved as the callback's third argument
request("https://www.reddit.com/r/CryptoCurrency", function(error, response, html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var result = [];
  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("p.title").each(function(i, element) {
    // Save the text of the element (this) in a "title" variable
    var title = $(this).text();
    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    var link = $(this).children('a').attr("href");
    console.log("console logging this" , $(this).children('a').attr("href"));

    // Save these results in an object that we'll push into the result array we defined earlier
    result.push({
      title: title,
      link: link
    });
    this.handleCheerioObject
  });

  // Log the result once cheerio analyzes each of its selected elements
  console.log("***************************************result zero title and html", result[0].title, result[0].link);
});
  }
  render () {
    return (
      <div className="redditScrape">
        <h1>{this.handleCheerioObject}</h1>
      </div>)
  }
}

export default RedditScrape