function Hobbit(name, disposition, age) {
  this.name = name;
  this.disposition = "homebody";
  this.age = 0;
  this.adult = false;
  this.isShort = true;
  if (this.name === "Frodo") {
    this.hasRing = true;
  } else {
    this.hasRing = false;
  };
}

Hobbit.prototype.celebrate_birthday = function() {
  ++this.age
  if (this.age >= 33) {
    this.adult = true;
  };
  if (this.age >= 101) {
    this.old = true;
  }
}



// ternary conditionals

module.exports = Hobbit;
