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
