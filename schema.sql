DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2), 
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
	id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;