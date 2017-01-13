// Render(boardstate)
var GAME = GAME || {}

GAME.View = function() {
  "use strict";

  var _$board;

  var _setRows = function(rows) {
    rows.forEach(function(row, rowIndex) {
      var $row = $("<div>").addClass("row").attr("id", rowIndex);
      row.forEach(function(cell, cellIndex) {
        var $cell = $("<div>").addClass("cell").attr("id", cellIndex + "-" + rowIndex);
        $row.append($cell);
      })
      _$board.append($row);
    });
  };

  var _clearTetromino = function(tetromino) {
    if (tetromino.blocks) {
      tetromino.blocks.forEach(_clearBlock);
    } else {
      tetromino.forEach(_clearBlock);
    }
  };

  var _renderTetromino = function(tetromino) {
    tetromino.blocks.forEach(_renderBlock);
  };

  var _renderPlacedBlocks = function(placedBlocks) {
    placedBlocks.forEach(_renderBlock);
  };

  var _clearBlock = function(block) {
    var $cell = _findCell(block.x, block.y);
    $cell.attr("class", "cell");
  };

  var _renderBlock = function(block) {
    var $cell = _findCell(block.x, block.y);
    $cell.addClass(block.name);
  };

  var _findCell = function(x, y) {
    return $("#" + x + "-" + y);
  };

  var _addMoveListener = function(movePiece) {
    $(document).on('keydown', function(event) {
      movePiece(event.originalEvent.code);
    });
  };

  return {
    init: function(rows, movePiece) {
      _$board = $("#board");
      _setRows(rows);
      _addMoveListener(movePiece);
    },

    render: function(boardState) {

      console.log("last tetromino");
      console.log(boardState.lastTetromino);
      console.log("current tetromino");
      console.log(boardState.currentTetromino);


      if (boardState.lastTetromino) {
        _clearTetromino(boardState.lastTetromino);
      }
      if (boardState.newPlacedBlocks) {
        _renderPlacedBlocks(boardState.placedBlocks);
      }
      if (boardState.currentTetromino) {
        _renderTetromino(boardState.currentTetromino);
      }
    }

  };

}();
  // this.clear(boardstate)
  // boardstate.draw(boardstate)

// On keydown
  // this.game.rotate(this.current)

// clear (boardstate) {
//  _clearTetromino(boardstate.lastTetromino)
//  _drawTetromino(boardstate.currentTetromino)
//  if boardstate.last.collided {
//    _clearStack(boardstate.lastStack)
//    _drawStack(boardstate.currentStack)
// }
//}
