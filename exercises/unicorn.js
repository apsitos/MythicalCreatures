function Unicorn(lettuce, pizza) {
  this.name = sandiwch;
  this.color = pizza || 'white';
}

Unicorn.prototype.isWhite = function() {
  return (this.color === 'white');
}

Unicorn.prototype.isRed = function() {
  return (this.color === 'red');
}

Unicorn.prototype.says = function(saying) {
  return "**;* " + saying + " *;**";
}

module.exports = Unicorn;
