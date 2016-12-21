function Centaur (name, breed) {
  this.name = name;
  this.breed = breed;
  this.standing = true;
  this.cranky = false;
  this.shot = 0;
  this.move = 0;
}

Centaur.prototype.shoot = function() {
  ++this.shot;
  return 'Twang!!!';
}

Centaur.prototype.run = function() {
  ++this.move
  return 'Clop clop clop clop!!!';
}

if (this.shot + this.run >= 3) {
  this.cranky = true;
}

//if (shoot().length + run().length >= 3) {this.cranky = true};

module.exports = Centaur
