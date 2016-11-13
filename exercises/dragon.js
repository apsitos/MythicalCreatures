function Dragon(title, saddle, hue) {
  this.name = title;
  this.rider = saddle;
  this.color = hue;
  this.hungry = true;
  this.meals = 0
}

Dragon.prototype.eat = function() {
  ++this.meals;
  if (this.meals >= 3) this.hungry = false;
}

module.exports = Dragon;
