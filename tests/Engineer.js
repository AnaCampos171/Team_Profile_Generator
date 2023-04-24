const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
  let employee;

  beforeEach(() => {
    employee = new Engineer("Katherine", 1, "Katherine@gmail.com", "katherine-github");
  });

  it("sets github account via constructor", () => {
    expect(employee.github).toBe("katherine-github");
  });

  it("returns Engineer via getRole", () => {
    expect(employee.getRole()).toBe("Engineer");
  });

  it("gets github username via getGitHub", () => {
    expect(employee.getGitHub()).toBe("katherine-github");
  });
});
