const inquirer = required('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'liambambery23',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'repository',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Github repository is required");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid title is required");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please write a desciption of your project",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid description is required");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps to install your application",
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide information for the Usage section of the ReadMe, inculding examples and instructions',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If applicable, provide instructions and guidelines on how others can contribute to your application',
        name: 'contributing',
    },
    {
        type: 'input',
        message: "Provide information on any applicable tests for the application and how to use them",
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
