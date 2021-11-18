const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./connection');
const table = require('console.table');

// const {init} = require('../server');


const viewDepartments = async() =>{
    db.query(`SELECT * FROM department`, function (err, result){
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table(result);     
    });   
}

const viewRoles = async() =>{
    db.query(`
    SELECT role.id AS id, title, salary, department.name AS department
    FROM role
    JOIN department ON role.department_id = department.id;
    `, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table(result);
    });
}

const viewEmployees = async() =>{
    db.query(`
    SELECT employee.id AS id, first_name, last_name, title, name AS department_name, salary, manager_id
    FROM role
    JOIN (employee, department) ON (role.id = employee.role_id AND role.department_id = department.id);
    `, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table(result);
    });
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees 
}