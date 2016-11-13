function Vampire(title, familiar) {
  this.name = title;
  this.pet = familiar || 'bat';
  this.thirsty = true;
}

Vampire.prototype.drink = function() {
  this.thirsty = false;
}

module.exports = Vampire;
