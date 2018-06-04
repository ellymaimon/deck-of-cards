$(function(){
  var cards = [];
  var ranks = ["one", "two"];
  var suits = ["clubs", "diamonds"];
  suits.forEach(function(suit){
    var suitName = suit;
    alert(suit);
    ranks.forEach(function(rank){
      $("ul").append("<li>" + rank + " of " + suitName + "</li>");
    });
  });
});
