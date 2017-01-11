var GAME = GAME || {}

GAME.BlockFactory = function() {
  "use strict";

  var _Block = function Block(options) {
    this.x = options.x;
    this.y = options.y;
    this.color = options.color;
  };

  return {
    create: function(options) {
      return new _Block(options);
    }
  }
};
// block
  // x and y
  // color