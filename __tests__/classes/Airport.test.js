const Plane = require("../../classes/Plane")
const Airport = require("../../classes/Airport")
const { expect, describe, it } = require("@jest/globals")

describe("Airport", () => {
    it("should have a name and airport code property value", () => {
        const airport = new Airport("Dallas", "DFW")
        expect(airport.name).toEqual("Dallas")
        expect(airport.code).toEqual("DFW")
        expect(() => new Airport("Dallas", "DF")).toThrow("Airport code must be 3 characters long")
        expect(() => new Airport("Dallas", 131)).toThrow("Airport code must be a string")
        expect(() => new Airport("Dallas", "dfw")).toThrow("Airport code must be in uppercase letters")
    })

    it("should initialize planes as an empty array", () => {
        const airport = new Airport("Dallas", "DFW")
        expect(airport.getPlanes()).toEqual([])
    })

    it("should add a plane to the planes array", () => {
        const airport = new Airport("Dallas", "DFW")
        const plane1 = new Plane("Airline", "Dallas", "New York")
        airport.addPlane(plane1)
        expect(airport.getPlanes()).toEqual([plane1])
    })


})