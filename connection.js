const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "IRene060464!",
    port: 3306,
    database: "top_songsdb"
})





















module.exports = connection;