function Centaur (name, breed) {
  this.name = name;
  this.breed = breed;
  this.standing = true;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.shot = 0;
  this.move = 0;
}

Centaur.prototype.shoot = function() {
  this.shot++;
  if (this.shot < 3){
    return 'Twang!!!';
  } else if (this.shot >= 3) {
    this.cranky = true;
    return 'NO!';
  }
}

Centaur.prototype.run = function() {
  this.move++;
  if (this.move < 3){
  return 'Clop clop clop clop!!!';
  } else   if (this.move === 3) {
      this.cranky = true;
  };
}

Centaur.prototype.sleep = function() {
  return 'NO!';
}

Centaur.prototype.layDown = function() {
  this.standing = false;
  this.layingDown = true;
}

Centaur.prototype.standUp = function() {
  this.standing = true;
  this.layingDown = false;
}

//this.shot === 3 ? this.cranky = true : this.cranky = false;
//this.run === 3 ? this.cranky = true : this.cranky = false;

module.exports = Centaur
