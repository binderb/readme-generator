// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: `\x1b[31m(1 of 9)\x1b[0m What is your project title?`,
    name: 'title'
  },
  {
    type: 'input',
    message: '\x1b[31m(2 of 9)\x1b[0m Enter a description for your project:',
    name: 'description'
  },
  {
    type: 'input',
    message: '\x1b[31m(3 of 9)\x1b[0m Enter some installation instructions for your project:',
    name: 'installation'
  },
  {
    type: 'input',
    message: '\x1b[31m(4 of 9)\x1b[0m Enter some usage information for your project:',
    name: 'usage'
  },
  {
    type: 'input',
    message: '\x1b[31m(5 of 9)\x1b[0m Enter contribution guidelines your project:',
    name: 'contribution'
  },
  {
    type: 'input',
    message: '\x1b[31m(6 of 9)\x1b[0m Enter the tests for your project:',
    name: 'tests'
  },
  {
    type: 'list',
    message: '\x1b[31m(7 of 9)\x1b[0m What license should your project have?',
    choices: ['MIT','GNU GPLv3','CC0'],
    name: 'license'
  },
  {
    type: 'input',
    message: '\x1b[31m(8 of 9)\x1b[0m Enter your GitHub username:',
    name: 'github'
  },
  {
    type: 'input',
    message: '\x1b[31m(9 of 9)\x1b[0m Enter your email:',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data, (err) => {
    console.log( err ? err : "success!");
  })
}

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions)
  .then(response => {
    let badge;
    let license_description;
    switch (response.license) {
      case "MIT":
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        license_description = 'The MIT license gives users express permission to reuse code for any purpose, sometimes even if code is part of proprietary software. As long as users include the original copy of the MIT license in their distribution, they can make any changes or modifications to the code to suit their own needs.';
        break;
      case "GNU GPLv3":
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        license_description = 'Like the GPL v2, GPL 3 is a strong copyleft license, meaning that any copy or modification of the original code must also be released under the GPL v3. In other words, you can take the GPL 3\'d code, add to it or make major changes, then distribute your version.'
        break;
      case "CC0":
        badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
        license_description = 'CC0 (aka CC Zero) is a public dedication tool, which allows creators to give up their copyright and put their works into the worldwide public domain. CC0 allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, with no conditions.';
        break;
      default:
        break;
    }
    const readme = `
# ${response.title.trim() == '' ? 'Untitled Project' : response.title}

${badge}

## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}
## Usage
${response.usage}
## License
${license_description}
## Contributing
${response.contribution}
## Tests
${response.tests}
## Questions
To contact the developer, please check out [${response.github}](https://github.com/${response.github}) on GitHub, or contact them at [${response.email}](mailto:${response.email}).
`;
    writeToFile('SAMPLE.md',readme);
  });
}

// Function call to initialize app
init();
