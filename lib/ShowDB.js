const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./connection');
const table = require('console.table');

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
    JOIN department ON role.department_id = department.id
    ORDER BY role.id;
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
    SELECT A.id, A.first_name, A.last_name, title, department.name as department, salary, CONCAT(B.first_name," ", B.last_name) AS manager 
    FROM employee A 
    LEFT JOIN employee B ON A.manager_id = B.id 
    JOIN role ON A.role_id = role.id 
    JOIN department ON role.department_id = department.id ;
    `, function (err, result){
            if (err) {
                console.log(err);
            }
            console.log('\n');
            console.table(result);
    })

}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees 
}