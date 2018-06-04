$(function(){
  var cards = [];
  var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suits = ["C", "D", "S", "H"];
  suits.forEach(function(suit){
    var suitName = suit;
    ranks.forEach(function(rank){
      $("ul").append("<li id='" + rank + suitName + "'><img src='img/" + rank + suitName + ".png'></li>");
      $("li#" + rank + suitName + " img").click(function(){
        alert("assign original click");
        $("li#" + rank + suitName).html("<img src='img/backOfCard.png' id='" + rank + suitName + "b'>");
        $("img#" + rank + suitName + "b").click(function(){
          alert("assign return click");
          $("li#" + rank + suitName).html("<img src='img/" + rank + suitName + ".png' id='" + rank + suitName + "'>");
        });
      });

    });
  });
});
