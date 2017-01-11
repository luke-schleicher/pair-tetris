// Board (model)
var GAME = GAME || {}

GAME.Board = function() {
  "use strict";

  var _width = GAME.CONFIG.board.width;
  var _height = GAME.CONFIG.board.height;
  var _TetrominoFactory = GAME.TetrominoFactory;
  var _currentTetromino;
  var _moveCurrentTetromino;
  var _rows;
  var _updateStack;
  var _boardState = {};

  var _setRows = function() {
    _rows = new Array(_height);
    for (var i = 0; i < _height; i++) {
      var row = new Array(_width);
      for (var j = 0; j < _width; j++) {
        row[j] = null;
      };
      _rows[i] = row;
    };
    return _rows;
  };

  var _randomOriginX = function() {
    return GAME.helpers.randBetween(1, _width - 2)
  }

  var _createCurrentTetromino = function() {
    var currentTetromino = _TetrominoFactory.createRandom(_randomOriginX());
    _currentTetromino = currentTetromino;
  };

  var _getBoardState = function() {
    _boardState.currentTetromino = _currentTetromino;
    return _boardState;
  };

  var _ticCurrentTetromino = function() {
    _currentTetromino.tic()
  };

  var _saveCurrentTetromino = function() {
    _boardState.lastTetromino = _currentTetromino;
  }

  return {
    init: function() {
      return _setRows();
    },

    tic: function() {
      _saveCurrentTetromino();
      if (!_currentTetromino) {
        _createCurrentTetromino();
      }
      _ticCurrentTetromino();
      return _getBoardState();
    }
  };

}();
/*
  tic {
    _move current piece
    if current piece.collided()
      _update stack
      _newCurrentPiece
    }

  tic returns:
  Board State = {
    current piece
    stack of rows {
      arrays of full or empty cells
    }
  }
*/

/*
  update stack {
    _add current piece to stack
    _check for complete rows
    _remove complete rows
  }
*/

/*
  update piece {
    _move piece
    _check for collision
  }
*/


// Collission check
  // See if any moving tetrominos bottom bounds <= the top bounds of any settled tetrominos
      // If so, set piece to "collided"
