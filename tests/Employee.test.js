const Employee = require('../lib/Employee');

test('getRole function', () => {
    const employee = new Employee("Julie", 1, "julie@gmail.com");
    expect(employee.getRole()).toBe("Employee");
});
