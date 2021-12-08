const Employee = require("../lib/employee");
const newEmployee = new Employee("John Smith", 123, "johnsmith@johnsmith.com");

describe('Employee', () => {
    it('displays name as John Smith', () => {
        expect(newEmployee.name).toBe("John Smith")
    });

    it('displays id as 123', () => {
        expect(newEmployee.id).toBe(123)
    });
    
    it('displays email as johnsmith@johnsmith.com', () => {
        expect(newEmployee.email).toBe("johnsmith@johnsmith.com")
    });

    it('displays role as newEmployee', () => {
        expect(newEmployee.getRole()).toBe("Employee")
    });
});