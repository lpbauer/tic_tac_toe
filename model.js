// var board = [ 0, 0, 0,
//               0, 0, 0,
//               0, 0, 0 ]
// To keep track of whos winning, you could set Xs as 1 and Os as -1, with 0 representing an open space. A game midway might look like this:
//
// [ 1, 0, -1,
//   0, 1, 0,
//   0, 0, 0 ]
// At its core, your functions inputs and return values for keeping track of who won would look something like this:
//
// whoWon([1,1,1,0,0,0,0,0,0])    returns X
// whoWon([0,0,0,0,0,0,-1,-1,-1]) returns O
// whoWon([1,1,-1,1,-1,0,0,0,0])  returns null // indicating that noone has won (yet)


function newGame() {
  var board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];
  // gameOver --> name winner: X, O, empty or Tie
  var gameOver = "";
  return {
    getBoard: function (){
      return board;
    },
    play: function(player, index) {
    // if row, column is 0 then update
      if (board[index] == 0) {
      // update board with a 1 at row, column
        board[index] = player;
        return board;
      } else {
        //send an alert that you can't play here.
        alert("This space is already taken");
      }
    },
    whoWon: function() {
      // determine state of the board
      // 1, 1, 1, 0, 0, 0, 0, 0, 0
      // sum the indexes from zero to two, and see if it equals three.
      if (board[0] + board[1] + board[2] == 3 ||
          board[3] + board[4] + board[5] == 3 ||
          board[6] + board[7] + board[8] == 3 ||
          board[0] + board[3] + board[6] == 3 ||
          board[1] + board[4] + board[7] == 3 ||
          board[2] + board[5] + board[8] == 3 ||
          board[0] + board[4] + board[8] == 3 ||
          board[2] + board[4] + board[6] == 3) {
            // change var gameOver depending on the layout of the board
        return gameOver = "x";
      }
      if (board[0] + board[1] + board[2] == -3 ||
          board[3] + board[4] + board[5] == -3 ||
          board[6] + board[7] + board[8] == -3 ||
          board[0] + board[3] + board[6] == -3 ||
          board[1] + board[4] + board[7] == -3 ||
          board[2] + board[5] + board[8] == -3 ||
          board[0] + board[4] + board[8] == -3 ||
          board[2] + board[4] + board[6] == -3) {
            // change var gameOver depending on the layout of the board
        return gameOver = "o";
      }
      var total=0;
      board.forEach(function(element){
        if (element == 1 || element == -1){
          total++;
        }
      });
      if (total == 9){
        return "Tie";
      } else {
        return null;
      }
      // if there are no 0s in the array it is a tie.
      // board.forEach(function(element) {
      //   if (element == 0) {
      //   return null;
      //   }
      // });
      // return "Tie";
    }
  };
};
