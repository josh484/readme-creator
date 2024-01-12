// function to generate markdown for README
function generateMarkdown(data) {
  return  `
${lisence(data.lisence)}
# ${data.title}
## Description
${data.description}
## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Lisence](#lisence)
[Contribution](#contribution)
[Tests](#tests)
[Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Lisence
This work is using the lisence: ${data.lisence}
## Contribution
${data.contribution}
## Tests
${data.tests}
## Questions
Github username: ${data.gitname}
github.com/${data.gitname}
Reach out to me for additional instructions at: ${data.email}
`;
}

function lisence(lisence){
  if (lisence == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

module.exports = generateMarkdown;
