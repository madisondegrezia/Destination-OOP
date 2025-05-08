const Plane = require("../../classes/Plane.js");
const Person = require("../../classes/Person.js");
const { expect, it, describe } = require("@jest/globals");

describe("Test Plane", () => {

    it("should have company, origin, and destination properties", () => {
        let plane = new Plane("Airline", "Dallas", "New York");
        expect(plane.company).toEqual("Airline");
        expect(plane.origin).toEqual("Dallas");
        expect(plane.destination).toEqual("New York");
    })

    it("should initialize passengers as an empty array", () => {
        let plane = new Plane("Airline", "Dallas", "New York");
        expect(plane.getPassengers()).toEqual([]);
    })

    it("should add a passenger to the passengers array", () => {
        let plane = new Plane("Airline", "Dallas", "New York");
        plane.addPassenger("Joe Bob");
        expect(plane.getPassengers()).toEqual(["Joe Bob"]);
    })

    it("should add another passenger to the passengers array", () => {
        let plane = new Plane("Airline", "Dallas", "New York");
        plane.addPassenger("Joe Bob");
        plane.addPassenger("Jill Bob");
        expect(plane.getPassengers()).toEqual(["Joe Bob", "Jill Bob"]);
    })

})