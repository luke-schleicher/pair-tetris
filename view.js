// Render(boardstate)
var GAME = GAME || {}

GAME.View = function() {
  "use strict";

  var _$board;

  var _setRows = function(rows) {
    rows.forEach(function(row, rowIndex) {
      var $row = $("<div>").addClass("row");
      row.forEach(function(cell, cellIndex) {
        var $cell = $("<div>").addClass("cell").attr("id", cellIndex + "-" + rowIndex);
        $row.append($cell);
      })
      _$board.append($row);
    });
  };

  var _render = function(boardState) {
    _clearTetromino(boardstate.lastTetromino);
    _renderTetronimo(boardState.currentTetromino);
  };

  var _clearTetromino = function(tetronimo) {
    tetronimo.blocks.forEach(function(block) {
      _clearBlock(block);
    }); 
  };

  var _renderTetronimo = function(tetronimo) {
    tetronimo.blocks.forEach(function(block) {
      _renderBlock(block);
    }); 
  };

  var _clearBlock = function(block) {
    var $cell = _findCell(block.x, block.y);
    $cell.className("");
  };

  var _renderBlock = function(block) {
    var $cell = _findCell(block.x, block.y);
    $cell.className(block.color);
  };

  var _findCell = function(x, y) {
    return $("#" + x + "-" + y);
  }

  return {
    init: function(rows) {
      _$board = $("#board");
      _setRows(rows);
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
