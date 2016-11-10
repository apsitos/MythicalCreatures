function Wizard (obj = {}) {
  this.name = obj.name;
  this.bearded = obj.bearded === undefined ? true : obj.bearded;
}

Wizard.prototype.incantation = function (spell) {
    return spell.toUpperCase();
}

Wizard.prototype.isRested = function() {
  
}

module.exports = Wizard;
