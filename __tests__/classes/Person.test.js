const Person = require("../../classes/Person.js");
const Bag = require("../../classes/Bag.js");

const { describe, it, test, expect } = require("@jest/globals");

describe("Person class", () => {
  it("should create an instance of Person", () => {
    const person = new Person("Matt", "SFO");
    expect(person).toBeInstanceOf(Person);
  });

  it("should set properties correctly", () => {
    const person = new Person("John", "JFK");
    expect(person.name).toBe("John");
    expect(person.destination).toBe("JFK");
  });

  it("should initialize class with empty bags array", () => {
    const person = new Person("Marco", "CLT");
    expect(person.getBags()).toEqual([]);
  });

  it("should add a Bag instance to bags array", () => {
    const person = new Person("Frank", "CLT");
    const bag = new Bag(80, 24);
    person.addBag(bag);
    expect(person.getBags()).toContain(bag);
  });
});
