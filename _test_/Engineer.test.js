const Engineer = require("../lib/engineer");
const newEmployee = new Engineer("John Smith", 123, "johnsmith@johnsmith.com", "jsmith09");

describe('Engineer', () => {
    it('displays github as jsmith09', () => {
        expect(newEmployee.getGithub()).toBe("jsmith09")
    });

    it('displays role as engineer', () => {
        expect(newEmployee.getRole()).toBe("Engineer")
    });
});