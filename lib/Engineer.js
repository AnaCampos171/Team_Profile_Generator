// Import Employee class from "./Employee" module --will also be used for the other classes
const Employee = require("./Employee");

// Define Engineer class, which extends the Employee class
class Engineer extends Employee {
    // Define constructor method that takes in name, id, email, and github arguments
    constructor(name, id, email, github) {
        // Call the parent constructor method with name, id, and email arguments
        super(name, id, email);
        // Set github property of the object
        this.github = github;
        // Override the title property inherited from the parent class to "Engineer"
        this.title = "Engineer";
    }

    //  get engineer's github username
    getGithub() {
        return this.github;
    }
}

// Export Engineer class to make it available to other modules
module.exports = Engineer;
