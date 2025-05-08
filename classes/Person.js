class Person {
  constructor(name, destination, bags) {
    this.name = name;
    this.destination = destination;
    this.bags = [];
  }

  addBag(bag) {
    this.bags.push(bag);
  }

  getBags() {
    return this.bags;
  }
}

module.exports = Person;
