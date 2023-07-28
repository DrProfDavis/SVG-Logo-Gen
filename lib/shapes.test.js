const { Triangle, Square, Circle } = require("./shapes.js");

// Square Test

// Circle Test

// Triangle Test
describe("Triangle test", () => {
    test("should make code snippet for a triangle with a blue background", () => {
        const shape = new Triangle("blue");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        );
    });
});





// FROM README

// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');