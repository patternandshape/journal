var Post = require('./../js/journal.js').Post;
var moment = require('moment');

$(document).ready(function(){
  $("form#new-post").submit(function(event){

    var todayDate = $("#new-date").val();
    var postTitle = $("#new-post-title").val();
    var postEntry = $("#new-post-entry").val();
    var newPost = new Post(postTitle, todayDate, postEntry);
    var count = newPost.wordCount();

    $("#show-entry").show();
    $(".title").text(postTitle);
    $(".reformattedDate").text(moment().format('LL'));
    $(".entry").text(postEntry);
    $(".numberWords").text(count);

    event.preventDefault();
  });
});

// hello! i'm concating
