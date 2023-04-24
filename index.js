//app will use jest for running unit tests and inquirer for user input
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/html");
//add email validator if time permits

// handle user prompts write and append file using promisify
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
//create array to store employee data and string to hold html cards generated from employee data
let teamArray = [];
let teamString = ``;

console.clear();
console.log("My Team")

// Main function 
async function main() {
    try {
        await prompt() //collect user input and populate teamArray 

        for (let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let finalHtml = html.generateHTML(teamString)

        console.clear();
        console.log("Creating html file");

        writeFileAsync("./dist/index.html", finalHtml);

        console.clear();
        console.log("Html file successfully created");

    } catch (err) {
        return console.log(err);
    }
}
// collect user data inquirer
async function prompt() {
    let responseDone = "";

    do {
        try {
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter Employee's name.",
                    validate: function validateName(name) {
                        return name !== ""; //make sure input is not an empty string
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter employee's ID: ",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter employee's email address: ",
                   
                },
                {
                    type: "list",
                    name: "role",
                    message: "Please select employee's role: ",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let response2 = ""

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Enter employee's github username: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                // adding responses to team
                const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                teamArray.push(engineer);
            
            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Enter employee's office number: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                const manager = new Manager(response.name, response.id, response.email, response2.x);
                teamArray.push(manager);

            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Please enter employee's school name: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                const intern = new Intern(response.name, response.id, response.email, response2.x);
                teamArray.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }
        responseDone = await inquirer.prompt([{    //allow user to choose whether to add new team member or finish
            type: "list",
            name: "finish",
            message: "Do you want to continue?: ",
            choices: [
                "Yes",
                "No"
            ]
        },]);
    } while (responseDone.finish === "Yes");
}
main();

