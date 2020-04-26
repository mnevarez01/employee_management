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
    inquirer.prompt(
        {
            name: "name",
            message: "What department would you like to add?"
        }
    ).then(({ name }) => {

        connection.query("INSERT INTO department SET ?", { name: name }, (err, res) => {
            if (err) throw err;
            console.log(`Added ${res.affectedRows} successfully!`)
            startMenu();
        })

    })

}

const addRole = () => {
    inquirer.prompt([
        {
            name: "title",
            message: "What role would you like to add?",
        },
        {
            name: "salary",
            message: "What is the salary for this role?",
        },
        {
            // ? How can I turn the department to match a number inside of my id? would I have to do a join?
            name: "department",
            message: "What department does this role belong to?",
        }

    ]).then(({ title, salary, department }) => {
        connection.query("INSERT INTO role SET ?",
            {
                title,
                salary,
                department

            }, (err, res) => {
                if (err) throw err;
                console.log()

            })
    })
}

const addEmployee = () => {

}

const viewDepartment = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            console.table("Department: " + res[i].name)
        }
        startMenu();
    })

}

const viewRole = () => {
    connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            console.table("Roles: " + res[i].title)
        }
        startMenu();
    })

}

const viewEmployee = () => {
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            console.table("Employee: " + res[i].first_name + res[i].last_name)
        }
        startMenu();
    })

}

const updateEmployee = () => {

}