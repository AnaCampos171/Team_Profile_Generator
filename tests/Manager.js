// Import Manager constructor
const Manager = require('../lib/manager');

// Test for setting office number
test("setting office number", () => {
    const testValue = "10";
    const employee = new Manager("Jose", 1, "jose@gmail.com", testValue); // Create new Manager named Jose with office number 10 and email jose@gmail.com
    expect(employee.officeNumber).toBe(testValue); // Expect office number to be set to 10
})

// Test for getRole function
test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Jose", 1, "jose@gmail.com", testValue); // Create new Manager named Jose with role Manager and email jose@gmail.com
    expect(employee.getRole()).toBe(testValue); // Expect the role to be set to Manager
})