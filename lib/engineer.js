const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, github) {
        super(name, 3, 'castillonicho@yahoo.ocom')
        this. github = github
    }

    getGithub() {
        console.log(this.github)
    }
}
const engineer = new Engineer('Monse', 'jcastillo9')

console.log('---ENGINEER---');
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();