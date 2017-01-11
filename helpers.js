var GAME = GAME || {};

GAME.helpers = {
  randArrayElement: function(array) {
    var randIndex = Math.floor(Math.random() * array.length - 1)
    return array[randIndex];
  },

  randBetween: function(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
}