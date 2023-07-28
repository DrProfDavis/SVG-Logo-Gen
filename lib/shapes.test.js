const { Triangle, Square, Circle } = require("./shapes.js");

// Square Test
describe("Square test", () => {
    test("should make code snippet for a square with a red background", () => {
        const shape = new Square("red");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="red" />'
        );
    });
});

// Circle Test
describe("Circle test", () => {
    test("should make code snippet for a circle with a pink background", () => {
        const shape = new Circle("pink");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="pink" />'
        );
    });
});

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