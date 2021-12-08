const Intern = require('../lib/intern')
const newEmployee = new Intern("John Smith", 123, "johnsmith@johnsmith.com", "Northwestern");

describe('Intern', () => {
    it('displays school as Northwestern', () => {
        expect(newEmployee.school).toBe("Northwestern")
    });

    it('displays role as intern', () => {
        expect(newEmployee.getRole()).toBe("Intern")
    });
})
