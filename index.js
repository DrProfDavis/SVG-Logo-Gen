// Import Inquirer, fs, and shapes
const inquirer = require('inquirer');
const fs = require('fs');

// writeToFile function that takes the input from questions to generate svg file
function writeToFile(answers) {
    // Text

    // Text Color

    // Shape

    // Shape Color
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