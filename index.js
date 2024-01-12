const fs = require("fs");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    
];

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What title?',
                name: 'title',
            },
        ])
        .then(function (response) {
            fs.writeFile('README.md', generateMarkdown(response), (err) =>
            err ? console.error(err) : console.log('Success!')
            );
        });


// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    writeToFile('README.md', prompt());
}

// function call to initialize program

