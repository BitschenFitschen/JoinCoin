var express = require("express");
var bodyParser = require("body-parser");
var results = require("./redditScrape");
console.log("Articles JS File!!", results);

var result = results.json();
console.log("***************first page result", result[0]);
// console.log(results[0].title);
// console.log(results[1].title);
// var title = results[0].title;
// var link = results[0].link;

// // console.log(results);

// console.log(title, link);

