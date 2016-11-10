function Pirate (name, job, cursed) {
  this.name = name;
  this.job = job || "Scallywag";
  this.cursed = false;
  this.heinousAct = 0;
  this.booty = 0;
  }

Pirate.prototype.commitHeinousAct = function () {
  ++this.heinousAct;
  if (this.heinousAct === 3) {
    this.cursed = true;
  }
}

Pirate.prototype.robShip = function () {
  this.booty =  100;
  return 'YAARRR!';
}

module.exports = Pirate;
