// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
//const markdown = require('generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { type } = require('os');
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync("new.README.md", contents)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([

        {
            type: 'confirm',
            name: 'Begin',
            message: 'Do you want to make a README.md?'
        }
    ]).then((start) =>{
        console.log(start)
        if(start === true){

            inquirer.prompt([

                {
                    type: 'input',
                    name: 'Title',
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
            
                let contents = fs.readFileSync("template.README.md", "utf8")
                console.log(contents)
            
                console.log(Object.entries(responses))
                for (const[key, value] of Object.entries(responses)){
                    contents = contents.replace(`{${key}}`, value)
                }
                writeToFile()
            })

        } else {
            return
        }
    //    return 'Yes' ? writeToFile()
    //    : console.log("not working")
    })
}

// Function call to initialize app
init();
