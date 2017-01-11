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
