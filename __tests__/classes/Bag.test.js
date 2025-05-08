const Bag = require("../../classes/Bag.js");
const Person = require("../../classes/Person.js");
const { describe, it, test, expect } = require("@jest/globals");

describe("Bag class", () => {
  it("should create an insatnce of Bag", () => {
    const bag = new Bag(10, 2);
    expect(bag).toBeInstanceOf(Bag);
  });

  it("should set properties correctly", () => {
    const bag = new Bag(10, 2);
    expect(bag.weight).toBe(10);
    expect(bag.id).toBe(2);
    expect(bag.getOwner()).toBeNull();
  });

  it("should return Person assigned to the bag", () => {
    const bag = new Bag(12, 3);
    const person = new Person("John", "JFK");
    bag.assignOwner(person);
    expect(bag.getOwner()).toEqual(person);
  });
});
