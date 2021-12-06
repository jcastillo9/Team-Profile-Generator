const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, school) { 
    super (name, 1, 'janette.castillo91@yahoo.com') 
    this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }

    getRole() {
        console.log('Intern')
    }
}

const intern = new Intern('Cristian', 'Northwestern');

console.log('---Intern---');
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();