// Board (model)
var GAME = GAME || {}

GAME.Board = function() {
  "use strict";

  var _width = GAME.CONFIG.board.width;
  var _height = GAME.CONFIG.board.height;
  var _TetrominoFactory = GAME.TetrominoFactory;
  var _currentTetromino;
  var blockFactory = GAME.BlockFactory;
  var _rows;
  var _newPlacedBlocks = true;
  var _boardState = {};
  var _placedBlocks = [];


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
    return 4;
  }

  var _createCurrentTetromino = function() {
    var currentTetromino = _TetrominoFactory.createRandom(_randomOriginX());
    _currentTetromino = currentTetromino;
  };

  var _getBoardState = function() {
    console.log(_boardState.lastTetromino);
    _boardState.currentTetromino = _currentTetromino;
    _boardState.placedBlocks = _placedBlocks;
    _boardState.newPlacedBlocks = _newPlacedBlocks;
    return _boardState;
  };

  var _ticCurrentTetromino = function() {
    _currentTetromino.tic()
  };

  var _saveCurrentTetromino = function() {
    if (_currentTetromino) {
      _dupTetrominoTetromino();
    }
  };

  var _checkCollision = function() {
    for (var i = 0; i < _currentTetromino.blocks.length; i++) {
      var tetrominoBlock = _currentTetromino.blocks[i];
      if (_atBottom(tetrominoBlock)) {return true;}
      for (var j = 0; j < _placedBlocks.length; j++) {
        var block = _placedBlocks[j]
        if (_blockCollision(tetrominoBlock, block)) {
          return true;
        }
      };
    };
  };

  var _processCollision = function() {
    _currentTetromino.blocks.forEach(function(block) {
      _placedBlocks.push(block);
    })
    _currentTetromino = null;
    _newPlacedBlocks = true;
  };

  var _blockCollision = function(tetrominoBlock, block) {
    return tetrominoBlock.y + 1 === block.y && tetrominoBlock.x === block.x
  };

  var _atBottom = function(tetrominoBlock) {
    return tetrominoBlock.y === _height - 1;
  };

  var _dupTetrominoTetromino = function() {

    _boardState.lastTetromino = [];

    _currentTetromino.blocks.forEach(function(block){
      var newBlock = blockFactory.create(block);
      _boardState.lastTetromino.push(newBlock);
    });

  };

  var _outOfBounds = function() {
    _currentTetromino.blocks.forEach(function(block){
      console.log(block.x - 1)
      if (block.x - 1 < 0 || block.x + 1 > 9) {
        return true;
      }
    });
    return false;
  };

  return {
    init: function() {
      return _setRows();
    },

    tic: function() {
      _newPlacedBlocks = true;
      _saveCurrentTetromino();
      if (!_currentTetromino) {
        _createCurrentTetromino();
      }
      _ticCurrentTetromino();
      if (_checkCollision()) {
        _processCollision();
      };
      return _getBoardState();
    },

    moveTetromino: function(pressedKey) {
      // set last tetromino
      // _dupTetrominoTetromino();

      switch (pressedKey) {

      case 'ArrowRight':
        if (!_outOfBounds()) {
          _dupTetrominoTetromino();
          _currentTetromino.blocks.forEach(function(block) {
            block.x++;
          });
        }
        break;

      case 'ArrowLeft':
      if (!_outOfBounds()) {
        _dupTetrominoTetromino();
        _currentTetromino.blocks.forEach(function(block) {
          block.x--
        });
      }
        break;
      default:
        return;

      }

      return _getBoardState();

    }
  }

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
