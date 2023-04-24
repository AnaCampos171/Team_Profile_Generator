//intern wil also have school, get school (), get role()--overriden to return intern
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";   //overrides title property to intern
        
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern; 