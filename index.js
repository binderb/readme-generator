// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: '(1 of 9) What is your project title?',
    name: 'title'
  },
  {
    type: 'input',
    message: '(2 of 9) Enter a description for your project:',
    name: 'description'
  },
  {
    type: 'input',
    message: '(3 of 9) Enter some installation instructions for your project:',
    name: 'installation'
  },
  {
    type: 'input',
    message: '(4 of 9) Enter some usage information for your project:',
    name: 'usage'
  },
  {
    type: 'input',
    message: '(5 of 9) Enter contribution guidelines your project:',
    name: 'contribution'
  },
  {
    type: 'input',
    message: '(6 of 9) Enter the tests for your project:',
    name: 'tests'
  },
  {
    type: 'list',
    message: '(7 of 9) What license should your project have?',
    choices: ['MIT','GnuPL','(None)'],
    name: 'license'
  },
  {
    type: 'input',
    message: '(8 of 9) Enter your GitHub username:',
    name: 'github'
  },
  {
    type: 'input',
    message: '(9 of 9) Enter your email:',
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
