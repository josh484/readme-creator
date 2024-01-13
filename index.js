const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// function for email validation
const checkEmail = async (input) => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(input)
}

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
    {
        type: 'list',
        message: 'Which Lisence would you like to use?',
        name: 'lisence',
        choices: ['MIT', 'Mozilla', 'GNU GPL V3', 'BSD 3-Clause Lisence']
    },
    {
        type: 'input',
        message: 'What is your GitHub name?',
        name: 'gitname',
    },
    {
        type: 'input',
        message: 'What is your E-mail?',
        name: 'email',
        validate: checkEmail
    },
];

    inquirer
        .prompt(questions)
        .then(function (response) {
            fs.writeFile('README_Sample.md', generateMarkdown(response), (err) =>
            err ? console.error(err) : console.log('Congrats your README file was created at: '+ path.basename('./README_Sample.md'))
            );
        });





