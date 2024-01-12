const fs = require("fs");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'README Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description for README',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions for README',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage Instructions for README',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contributions for README',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Tests for README',
        name: 'tests',
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



