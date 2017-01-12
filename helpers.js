var GAME = GAME || {};

GAME.helpers = {
  randArrayElement: function(array) {
    var randIndex = Math.floor(Math.random() * array.length)
    return array[randIndex];
  },

  randBetween: function(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
}
