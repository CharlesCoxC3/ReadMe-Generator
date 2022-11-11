// TODO: Include packages needed for this application
const inquirer = require('inquirer')
//const markdown = require('generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your Project?'
    },

    {
        type: 'input',
        name: 'Description',
        message: 'What is a description for your Project?'
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'What is the installation instructions for your Project?'
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage of your Project?'
    },

    {
        type: 'input',
        name: 'Contributing',
        message: 'What are the contribution guidelines for this Project?'
    },

    {
        type: 'input',
        name: 'Tests',
        message: 'What are the instructions for testing this Project?'
    },

    {
        type: 'list',
        name: 'License',
        message: 'What is the license for your Project?',
        choices:['Apache License 2.0','GNU General Public License', 'MIT License', 'BSD 2-Clause "Simplifed" License',
                 'BSD 3-Clause "NEW" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 
                 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 
                 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'None'
                ]
    }, 

    {
        type: 'input',
        name: 'Username',
        message: 'What is your Github Username?'
    },

    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email?'
    },
    
]).then((responses)=>{
    console.log(responses)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
