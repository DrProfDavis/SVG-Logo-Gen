// Import Inquirer, fs, and shapes
const inquirer = require('inquirer');
const fs = require('fs');
var width = 300;
var height = 200;

// writeToFile function that takes the input from questions and calls shapes.js
function writeToFile(answers) {
    // Size snippet
    let snippet = `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><g>`
    // Shape snippet
    if (answers.shape === "Triangle") {
        snippet += `${answers.shape}<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "Square") {
        snippet += `${answers.shape}<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
        snippet += `${answers.shape}<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    }
    // Text snippet
    snippet += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text></g></svg>`;

    // Name the logo
    let logoName = `${answers.shapeColor}_${answers.shape}_${answers.text}_logo`
    console.log(logoName);

    // Create SVG file
    fs.writeFile(`./examples/${logoName}.svg`, snippet, (err) => {
        err ? console.log(err) : console.log(`Generated ${logoName}.svg`);
    });
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
            } else {
                writeToFile(answers);
            }
        });
}

// Initiate
questions();