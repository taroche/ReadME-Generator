// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your GitHub username? (No @ needed)",
            name: 'username',
            default: 'GitHub UserName',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address",
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid email address is required.");

                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
            default: 'Project Title',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid project title is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Write a description of your project.",
            name: 'description',
            default: 'Project Description',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid project description is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "If applicable, describe the steps required to install your project for the Installation section.",
            name: 'installation'
        },
        {
            type: 'input',
            message: "Provide instructions and examples of your project in use for the Usage section.",
            name: 'usage'
        },
        {
            type: 'input',
            message: "If applicable, provide guidelines on how other developers can contribute to your project.",
            name: 'contributing'
        },
        {
            type: 'input',
            message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
            name: 'tests'
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache-2.0', 'MIT', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        }
    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() { 
    promptUser()
    .then((answers) => fs.writeFileSync('ReadME.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to ReadME.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
