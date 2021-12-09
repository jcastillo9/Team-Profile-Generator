const Manager = require('../lib/manager')
const newEmployee = new Manager("John Smith", 123, "johnsmith@johnsmith.com", 123);

describe('Manager', () => {
    it('displays office number as 123', () => {
        expect(newEmployee.officeNumber).toBe(123)
    });

    it('displays role as manager', () => {
        expect(newEmployee.getRole()).toBe("Manager")
    });
})
