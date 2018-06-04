$(function(){
  var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suits = ["C", "D", "S", "H"];
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $("ul").append("<li id='" + rank + suit + "'><img src='img/" + rank + suit + ".png'></li>");
      $("ul").append("<li id='" + rank + suit + "b'><img src='img/backOfCard.png'></li>");
      $("li#" + rank + suit + "b").hide();
      $("li#" + rank + suit).click(function(){
        $("li#" + rank + suit).hide();
        $("li#" + rank + suit + "b").show();
      });
      $("li#" + rank + suit + "b").click(function(){
        $("li#" + rank + suit + "b").hide();
        $("li#" + rank + suit).show();
      });
    });
  });
});
