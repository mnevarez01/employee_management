const inquirer = require("inquirer");
const conTable = require("console.table");
const connection = require("./connection.js");

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as ID: ${connection.threadId}`);
    startMenu()
})

const startMenu = () => {
    inquirer.prompt(
        {
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["Add a Department", "Add a Role", "Add an Employee", "View Department List", "View Role List", "View Employee List", "Update an Employee Role", "EXIT"]
        }
    ).then(({ action }) => {
        switch (action) {
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add a Employee":
                addEmployee();
                break;
            case "View Department List":
                viewDepartment();
                break;
            case "View Role List":
                viewRole();
                break;
            case "View Employee List":
                viewEmployee();
                break;
            case "Update an Employee Role":
                updateEmployee();
                break;
            default:
                connection.end();

        }

    })

}

const addDepartment = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

const viewDepartment = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            console.log("Name: " + res[i].name)
        }
    })

}

const viewRole = () => {

}

const viewEmployee = () => {

}

const updateEmployee = () => {

}