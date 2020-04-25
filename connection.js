const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "IRene060464!",
    port: 3306,
    database: "employeeDB"
})


module.exports = connection;