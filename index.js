// Import Inquirer, fs, and shapes
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./lib/shapes");
var width = 300;
var height = 200;

// writeToFile function that takes the input from questions and calls shapes.js
function writeToFile(answers) {
    // Size snippet
    let snippet = `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><g>`

    // Shape and Shape Color logic
    // if (response.shape === 'Circle') {
    //     let userShape = new shape (response.shapeColor)
    //     return userShape.render()
    // }

    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        snippet += `${answers.shape}<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        snippet += `${answers.shape}<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
        shapeChoice = new Circle();
        snippet += `${answers.shape}<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    }

    console.log(snippet)
}

// questions function that asks for input from the user
function questions() {
    inquirer
        .prompt([
            // Text
            {
                type: "input",
                message: "Enter up to three characters for the logo",
                name: "text",
            },
            // Text Color
            {
                type: "input",
                message: "Choose text color for the logo (color keyword OR a hexadecimal number)",
                name: "textColor",
            },
            // Shape
            {
                type: "list",
                message: "Choose a shape for the logo",
                choices: ["Square", "Circle", "Triangle"],
                name: "shape",
            },
            // Shape Color
            {
                type: "input",
                message: "Choose shape color for the logo (color keyword OR a hexadecimal number)",
                name: "shapeColor",
            },
        ])
        .then((answers) => {
            // Error handling for text
            if (answers.text.length > 3) {
                console.log("Please have no more than 3 characters");
                questions();
                // TODO Add Another error handling for colors
            } else {
                writeToFile(answers);
            }
        });
}

questions();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered