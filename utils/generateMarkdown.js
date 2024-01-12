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
Github username: ${data.gitname}\ 
[GitHub](github.com/${data.gitname})\
Reach out to me for additional instructions at: [${data.email}](${data.email})
`;
}

function lisence(lisence){
  if (lisence == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (lisence == 'Mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } 
  else if (lisence == 'GNU GPL V3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (lisence == 'BSD 3-Clause Lisence') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

module.exports = generateMarkdown;
