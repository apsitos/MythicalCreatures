function Medusa(name) {
  this.name = name;
  this.statues = [];
}

Medusa.prototype.stare = function(victim) {
  this.statues.push(victim);
  victim.stoned = true;
  if (this.statues.length > 3) {
    this.statues.splice(0, 1)[0].stoned = false;
  }
}


function Person(name) {
  this.name = name;
  this.stoned = false;
}


module.exports = Medusa;
