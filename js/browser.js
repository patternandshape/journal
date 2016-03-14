// exports.

function Post(title, post) {
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

Post.prototype.letterCount = function(){
  return this.post.length;
}



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
