test("setting school via the constructor argument", () => {
    const testValue = "University of California, Riverside";
    const employee = new Intern("John", 1, "john@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("John", 1, "john@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "University of California, Riverside";
    const employee = new Intern("John", 1, "john@gmail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
})