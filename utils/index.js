const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
const Engineer = require('../lib/engineer');
const generateHtml = require('./generateHTML');
const teamMember = [];

const fs = require('fs');
const inquirer = require('inquirer');

const managerInfo = () => {
    inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's id number"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?"
    },
    {
        type: "input",
        name: "office number",
        message: "What is the manager's office number?"
    }
])
    .then((response) => {
        const manager = new Manager(input.name, input.id, input.email, input.officeNumber);
        teamMember.push(manager);
        console.log("Manager has been added!")
        newEmployee();
    })
    
}

const internInfo = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id number"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school is intern attending?"
        }
    ])
    .then((response) => {
        const intern = new Intern(input.name, input.id, input.email, input.school);
        teamMember.push(intern);
        console.log("Intern has been added!")
        newEmployee();
    })
}

const engineerInfo = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id number"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?"
        }
    ])
    .then((response) => {
        const engineer = new Engineer(input.name, input.id, input.email, input.githun);
        teamMember.push(engineer);
        console.log("Engineer has been added!")
        newEmployee();
    })
}

const newEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "Add a new employee?",
            choices: [
                "Engineer",
                "Intern",
                "Done with employee list"
            ]
        }
    ]).then(input => {
        switch (input.newEmployee) {
          case "Engineer":
            engineerInfo();
          break;
          case "Intern":
            internInfo();
          break;
          case "No employees left to add":
            console.log(teamMember);
            let html = generateHtml(teamMember);
            fs.writeFile("./dist/index.html", html, (err) =>
            err ? console.log(err) : console.log('Successfully created HTML file!'))
          break;
        }
})}

managerInfo();
