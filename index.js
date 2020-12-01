const inquirer = required('inquirer');
const fs = require('fs');
const util = require('util');

const api = require('./utils/generateMarkdown.js');

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
    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
