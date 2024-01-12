const fs = require("fs");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
        type: 'input',
                message: 'What title?',
                name: 'title',
    },
    {
        type: 'input',
                message: 'What deets?',
                name: 'deets',
    },
];

    inquirer
        .prompt(questions)
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



