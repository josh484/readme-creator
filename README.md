[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# README File Creator
Link to Repository: https://github.com/josh484/readme-creator
Link to Video: 
## Description
A README file generator using inquirer and node.js. The application takes in user inputs for each section of the README file and fills out the section using the information taken from user input. 
This application highlights my understanding of ES6 and Node as it uses them throughout the project for instance through the use of arrow functions.
## Table of Contents
[Installation](#installation) <br />
[Usage](#usage) <br />
[Lisence](#lisence) <br />
[Contribution](#contribution) <br />
[Tests](#tests) <br />
[Questions](#questions) 
## Installation
In order to install the project simply click the green code button and download the file as a zip. Once downloaded simply right click on the file and unzip the folder.
## Usage
Once the file is downloaded simply in a terminal locate the application folder and type ```node index.js``` and you will be given a series of prompts.
[Node example](./assets/images/node_example.png)
Once filled it will then generate a README_Sample File.
## Lisence
This work is using the lisence: MIT
## Features
The application is comepletely javascript using ES6 and Node.js. 
Firstly, The application uses two javascript files.
1. generateMarkdown.js which handles the structure of the README file through the use of template literals and is exported to index.js where inquirer is used.
2. index.js is the main file which holds the inquirer code which takes in questions and then writes the file as ```README_Sample.md``` and takes in the ```generatemarkdowndata``` function using the response from the inquirer to fill out the template form. 
- One other note is that the Licenses used are only the most popular ones as there are a vast amount of licenses to choose from and its quite hard to implement them all as is as the user would have to choose from a large list so only the most used onse are listed in this application.
## Questions
Github username: josh484 <br /> 
[GitHub](https://www.github.com/josh484) <br />
Reach out to me for additional instructions at: [josh.m.mendoza1@gmail.com](mailto:josh.m.mendoza1@gmail.com.com)
