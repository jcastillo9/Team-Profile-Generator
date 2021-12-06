const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super (name, 2, "janettecastillo4@gmail.com")
        this.officeNumber = officeNumber;
    }
    
    getofficeNumber() {
        console.log(this.officeNumber);
    }
}

const manager = new Manager('Janette', 3)

console.log('---MANAGER---');
manager.getName();
manager.getId();
manager.getEmail();
manager.getofficeNumber()
