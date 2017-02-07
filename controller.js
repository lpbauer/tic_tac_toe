var x = 1;
var o = -1;
var player = x;
var game1 = newGame();

function drawBoard(){
  // go through board array, update images
  game1.getBoard().forEach(function(element, index){
    if(element == x){
      //show eastwood
      $("td.cell[data-index=" + index +"]").html('<img src="http://cp91279.biography.com/1000509261001/1000509261001_1822734097001_Biography-24-Hollywood-Directors-Clint-Eastwood-SF.jpg" alt="">')
    } else if(element == o) {
      $("td.cell[data-index=" + index +"]").html('<img src="http://media3.s-nbcnews.com/j/newscms/2015_20/533536/tdy-150512-tom-brady-tz_2ce90c8bae07f85ae7efefa0c4a3dded.today-inline-large.jpg" alt="">')
    } else {
      $("td.cell[data-index=" + index +"]").html('');
    }
  });
  // if there is a winner, display winner
  var winner = game1.whoWon()
  if(winner){
    $('h2').append(winner);
  }
}

$(document).ready(function() {
  $(".cell").on("click", function(){
    if (player == x){
      var index = $(this).data("index");
      game1.play(x, index );
      player = o;
    } else {
      var index = $(this).data("index");
      game1.play(o, index );
      player = x;
    }
    drawBoard()
  });

  // draw the board

});
