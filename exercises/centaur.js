function Centaur (name, breed) {
  this.name = name;
  this.breed = breed;
  this.standing = true;
  this.cranky = false;
  this.standing = true;
  this.shot = 0;
  this.move = 0;
}

Centaur.prototype.shoot = function() {
  this.shot++;
  if (this.shot === 3) {
    this.cranky = true;
    return 'NO!';
  } else if (this.shot < 3){
    return 'Twang!!!';
  }
}

Centaur.prototype.run = function() {
  this.move++;
  if (this.move === 3) {
    this.cranky = true;
  } else if (this.move < 3){
    return 'Clop clop clop clop!!!';
  };
}


module.exports = Centaur
