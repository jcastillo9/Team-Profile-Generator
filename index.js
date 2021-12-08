const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const generateHTML = require('./generateHTML');
let teamMember = [];

const fs = require('fs');
const inquirer = require('inquirer');

const managerInfo = () => {
    inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (response) => {
            if(response === '') {
                return 'Please enter a name.'
            }
            else return true
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's id number",
        validate: (response) => {
            if(response === '') {
                return 'Please enter an ID number.'
            }
            else return true
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: (response) => {
            if(response === '') {
                return 'Please enter an email address.'
            }
            else if(response.includes('@') !== true) {
                return 'Please enter a valid email address.'
            }
            else return true
        }
    },
    {
        type: "input",
        name: "office number",
        message: "What is the manager's office number?",
        validate: (response) => {
            if(response === '') {
                return 'Please enter an office number.'
            }
            else return true
        }
    }
])
    .then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMember.push(manager);
        console.log("Manager has been added!")
        addEmployee();
    })
    
}

const engineerInfo = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: (response) => {
                if(response === '') {
                    return 'Please enter a name.'
                }
                else return true
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id number",
            validate: (response) => {
                if(response === '') {
                    return 'Please enter an ID number.'
                }
                else return true
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
            validate: (response) => {
                if(response === '') {
                    return 'Please enter an email address.'
                }
                else if(response.includes('@') !== true) {
                    return 'Please enter a valid email address.'
                }
                else return true
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?",
            validate: (response) => {
                if (response === '') {
                    return `Please enter a valid Github username.`
                }
                else return true
            }
        }
    ])
    .then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMember.push(engineer);
        console.log("Engineer has been added!")
        addEmployee();
    })
}

const internInfo = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: (response) => {
                if(response === '') {
                    return 'Please enter a name.'
                }
                else return true
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id number",
            validate: (response) => {
                if(response === '') {
                    return 'Please enter an ID number.'
                }
                else return true
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
            validate: (response) => {
                if(response === '') {
                    return 'Please enter an email address.'
                }
                else if(response.includes('@') !== true) {
                    return 'Please enter a valid email address.'
                }
                else return true
            }
        },
        {
            type: "input",
            name: "school",
            message: "What school is intern attending?",
            validate: (response) => {
                if (response === '') {
                    return `Please enter a valid school name.`
                }
                else return true
            }
        }
    ])
    .then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        teamMember.push(intern);
        console.log("Intern has been added!")
        addEmployee();
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "Add a new employee?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Done with employee list"
            ]
        }
    ]).then(response => {
        switch (response.newEmployee) {
        case "Manager":
        managerInfo();
          break;
          case "Engineer":
            engineerInfo();
          break;
          case "Intern":
            internInfo();
          break;
          case "Done with employee list":
            console.log(teamMember);
            let employeeData = generateHTML(teamMember);
            fs.writeFile('./dist/index.html', employeeData, (err) =>
            err ? console.log(err) : console.log('Successfully created HTML file!'))
          break;
        }
})}

managerInfo();