var GAME = GAME || {}

var TetrominoFactory = function() {
  "use strict";

  var BlockFactory = GAME.BlockFactory;

  var _shapes = [
    {
      name: "I",
      starting: [{ x: 0, y: 0 }],
      color: "#cdcdcd"
    }
  ];

  var _randomShape = function() {
    return GAME.helpers.randArrayElement(_shapes);
  };

  var _Tetromino = function Tetromino(shape, originX) {
    var that = this;

    this.blocks = new Array(shape.starting.length) // always 4

    shape.starting.forEach(function(block, index) {
      that.blocks[index] = BlockFactory.create({
        x: block.x + originX,
        y: block.y,
        color: shape.color
      })
    });

    this.tic = function() {
      this.blocks.forEach(function(block) {
      block.y--;
    });
  };

  return {
    createRandom: function(originX) {
      var shape = _randomShape();
      return new _Tetromino(shape, originX);
    }
  };
};
