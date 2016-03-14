(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Post = require('./../js/journal.js').Post;

$(document).ready(function(){
  $("form#new-post").submit(function(event){

    // var todayDate = $("#new-date").val();
    var postTitle = $("input#new-post-title").val();
    var postEntry = $("#new-post-entry").val();
    var newPost = new Post(postTitle, postEntry);
    var count = newPost.letterCount();

    $("#show-entry").show();
    $(".title").text(postTitle);
    $(".entry").text(postEntry);
    $(".numberLength").text(count);

    event.preventDefault();

  });


});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
exports.Post = function(title, post) {
  // this.date = date;
  this.title = title;
  this.post = post;
}

// function Date(month, day, year){
//   this.month = month;
//   this.day = day;
//   this.year = year;
// }

// Date.prototype.fullDate = function(){
//   return this.month + " " + this.day + ", " + this.year;
// }

exports.Post.prototype.letterCount = function(){
  return this.post.length;
}

},{}]},{},[1]);
