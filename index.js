const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// const writeFileAsync = util.promisify(writeToFile);


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
        message: "What is your email?",
        name: 'email',
        default: 'liam.bambery23@gmail.com',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required");
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
        choices: ['MIT', 'ISC', 'Apache', 'Unlicense'],
        name: 'license',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Hooray! Your README.md file has been generated successfully!")
    });
}


// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function(answers){
            console.log(answers);
            //once I get my data, what do I do next
            //call the data 
            console.log(generateMarkdown(answers));
            //write into the file
            writeToFile("./utils/README.md",generateMarkdown(answers));
        })

}

// function call to initialize program
init();
