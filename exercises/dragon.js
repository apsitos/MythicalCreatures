function Dragon(name, rider, color) {
  this.name = name;
  this.rider = rider || true;
  this.color = color;
  this.hungry = true;
  this.meals = 0
}

Dragon.prototype.eat = function() {
  ++this.meals
  if (this.meals === 3) {
    this.hungry = false;
    this.meals = 0;
  }
}

module.exports = Dragon;
