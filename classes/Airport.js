class Airport {
    #planes
    constructor(name, code) {
        this.name = name;

        if(typeof code !== "string") {
            throw new Error("Airport code must be a string");
        }
        if(code.length !== 3) {
            throw new Error("Airport code must be 3 characters long");
        }
        if(!/^[A-Z]{3}$/.test(code)) {
            throw new Error("Airport code must be in uppercase letters");
        }
        this.code = code;
        this.#planes = [];
    }

    getPlanes() {
        return this.#planes;
    }

    addPlane(plane) {
        this.#planes.push(plane);
    }


}


module.exports = Airport;