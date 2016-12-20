function Werewolf(name, location) {
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
}

Werewolf.prototype.change = function() {
  this.human = !this.human;
  this.wolf = !this.wolf;
  if(this.wolf) {
    this.hungry = true;
  }
}

Werewolf.prototype.eat = function(victim) {
  return this.hungry;
}

function Victim(name) {
  this.name = name
  this.alive = true;
}

module.exports = Werewolf
