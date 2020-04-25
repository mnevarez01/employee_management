const inquirer = require("inquirer");
const mysql = require("mysql");
const conTable = require("console.table");
const connection = require("./connection.js");

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as ID: ${connection.threadId}`);
    startMenu()
})

const startMenu = () => {

}

const addDepartment = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

const viewDepartment = () => {

}

const viewRole = () => {

}

const viewEmployee = () => {

}

const updateEmployee = () => {

}