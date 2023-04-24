// Define Employee class
class Employee {
    // Define constructor method
    constructor(name, id, email) {
        // Set name, id, and email properties of the object
        this.name = name;
        this.id = id;
        this.email = email;
        // Set default title property to "Employee"
        this.title = "Employee";
    }

    // Define method to get employee name
    getName() {
        return this.name;
    }

    // Define method to get employee ID
    getId() {
        return this.id;
    }

    // Define method to get employee email
    getEmail() {
        return this.email;
    }

    // Define method to get employee role
    getRole() {
        return this.title;
    }
}

// Export Employee class to make it available to other modules
module.exports = Employee;
