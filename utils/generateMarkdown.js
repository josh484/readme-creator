// function to generate markdown for README
function generateMarkdown(data) {
  return  `
${lisence(data.lisence)}
# ${data.title}
## Description
${data.description}
## Table of Contents
[Installation](#installation) <br />
[Usage](#usage) <br />
[License](#license) <br />
[Contribution](#contribution) <br />
[Tests](#tests) <br />
[Questions](#questions) 
## Installation
${data.installation}
## Usage
${data.usage}
## License
This work is using the license: ${data.lisence}
## Contribution
${data.contribution}
## Tests
${data.tests}
## Questions
Github username: ${data.gitname} <br /> 
[GitHub](https://www.github.com/${data.gitname}) <br />
Reach out to me for additional instructions at: [${data.email}](mailto:${data.email})
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
