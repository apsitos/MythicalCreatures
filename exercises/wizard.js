function Wizard (obj = {}) {
  this.name = obj.name;
  this.bearded = !obj.hasOwnProperty('bearded');
  this.energySpent = 0;
}

Wizard.prototype.incantation = function (spell) {
  return spell.toUpperCase();
}

Wizard.prototype.isRested = function() {
  return !(this.energySpent >= 3);
}

Wizard.prototype.cast = function() {
  ++this.energySpent;
  return this.isRested() ? 'MAGIC BULLET' : 'I SHALL NOT CAST!'
}

module.exports = Wizard;
