const Manager = require('../lib/manager')
const newEmployee = new Manager("John Smith", 123, "johnsmith@johnsmith.com", 2323);

describe('Manager', () => {
    it('displays office number as 2323', () => {
        expect(newEmployee.officeNumber).toBe(2323)
    });

    it('displays role as manager', () => {
        expect(newEmployee.getRole()).toBe("Manager")
    });
})
