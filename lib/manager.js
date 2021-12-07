const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super (name, 2, "janettecastillo4@gmail.com")
        this.officeNumber = officeNumber;
    }
    
    getofficeNumber() {
        return(this.officeNumber);
    }

    getRole() {
        return("Manager")
    }
}

module.exports = Manager