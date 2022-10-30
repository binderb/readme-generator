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
    choices: ['MIT','GnuPL','(None)'],
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
    writeToFile('sample_readme.md',JSON.stringify(response));
  });
}

// Function call to initialize app
init();
