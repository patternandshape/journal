var Post = require('./../js/journal.js').Post;

$(document).ready(function(){
  $("form#new-post").submit(function(event){

    // var todayDate = $("#new-date").val();
    var postTitle = $("#new-post-title").val();
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
