$(function(){
  var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suits = ["C", "D", "S", "H"];
  suits.forEach(function(suit){
    var suitName = suit;
    ranks.forEach(function(rank){
      $("ul").append("<li id='" + rank + suitName + "'><img src='img/" + rank + suitName + ".png'></li>");
      $("ul").append("<li id='" + rank + suitName + "b'><img src='img/backOfCard.png'></li>");
      $("li#" + rank + suitName + "b").hide();
      $("li#" + rank + suitName).click(function(){
        $("li#" + rank + suitName).hide();
        $("li#" + rank + suitName + "b").show();
      });
      $("li#" + rank + suitName + "b").click(function(){
        $("li#" + rank + suitName + "b").hide();
        $("li#" + rank + suitName).show();
      });
    });
  });
});
