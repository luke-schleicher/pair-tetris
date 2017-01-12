var GAME = GAME || {}

GAME.Controller = function() {
  "use strict";

  var _board = GAME.Board;
  var _view = GAME.View;

  var _loop = function() {
  var interval = setInterval(function(){
    var boardState = _board.tic();
    _view.render(boardState);
    }, 100);
  };

  var _movePiece = function(pressedKey) {
    _board.movePiece(pressedKey);
  };

  return {
    play: function() {
      var initialBoard = _board.init();
      _view.init(initialBoard, _movePiece);
      _loop();
    }
  }
}();
// Play
  // board = Initialize board
  // view.init(board)
  // Start the loop

// Loop
  // Tic the board, then get board state from model (board state includes active tetromino and changes to the settled tetrominos)
  // Send to view to render

// Rotate (callback)
  // Takes in a tetromino
  // Sends to model to update, gets new board state back.
  // Rerenders the board state.
// Moving (callback)
  // if board.move(e or left or right) {
  // view.render(piece)
  //}
// Dropping (callback)
  // Optional
