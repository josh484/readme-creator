// function to generate markdown for README
function generateMarkdown(data) {
  return  `
    
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
${data.lisenceD}
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

module.exports = generateMarkdown;
