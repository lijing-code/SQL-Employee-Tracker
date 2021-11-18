const db = require('./connection');
const mysql = require('mysql2');
const table = require('console.table');

const addDepartment = async(departmentName) => {
    db.query(`
    INSERT INTO department(name) 
    VALUES (?)
    `, departmentName, function(err, result){
        if (err) {
            console.log(err);
        }
        // console.log(result);
    })
}

const addRole = async(title, salary, departmentName) =>{
    // transfer departmentName into department_id
    let departmentNumber;
    db.promise().query(`SELECT * FROM department WHERE name = ?`, departmentName)
    .then(([rows,fields]) => {
        departmentNumber = rows[0].id;
        db.query(`
        INSERT INTO role(title, salary, department_id)
        VALUES (?,?,?) 
        `,[title,salary,departmentNumber],function(err,result){
            if (err) {
                console.log(err);
            }
        }) 
    })
    .catch((err) => {console.log(err)});

};

const roleList = () => {
    let roles = [];
    db.promise().query(`SELECT * FROM role`)
    .then(([rows, fields]) =>{
        for( let i=0; i<rows.length; i++){
            roles.push(`${rows[i].title}`)
        }
    })
    return roles;
}
const managerList = () =>{
    let managers = [];
    db.promise().query(`SELECT * FROM employee WHERE role_id = 1`)
    .then(([rows, fields]) =>{
        for( let i=0; i<rows.length; i++){
            managers.push(`${rows[i].first_name} ${rows[i].last_name}`)
        }
    })
    return managers;
};

const addEmployee = async(firstName, lastName, role, managerName) => {
    let roleId;
    let manager = managerName.split(' ');
    
    db.promise().query(`SELECT * FROM role WHERE title = ?`, role)

    .then(([rows, fields]) =>{

        return roleId = rows[0].id;
    })

    .then((roleId)=>{
        
        let managerId;

        db.promise().query(`SELECT id FROM employee WHERE first_name = ? AND last_name = ?`, [manager[0], manager[1]])
        .then(([rows, fields]) =>{

            return managerId = rows[0].id;
        })
        .then((managerId)=>{
           db.query(`
            INSERT INTO employee(first_name, last_name, role_id, manager_id) 
            VALUES (?,?,?,?)
            `, [ firstName, lastName, roleId, managerId ], function(err, result){
                if (err) {
                    console.log(err);
                }
                // console.log(result);
            }) 
        })
    }) 
};

const updateEmployee = async(employeeName, newRole) =>{
    let name = employeeName.split(" ");

    db.promise().query(`SELECT id FROM role WHERE title = ?`, newRole)
    .then(([rows, fields])=>{
        let role = rows[0].id;
        db.query(`UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?`, [role, name[0], name[1]], function(err, reusult){
            if (err) {
                console.log(err);
            }
            // console.log(result);
        })
    })
};

module.exports = {
    addDepartment,
    addRole,
    roleList,
    managerList,
    addEmployee,
    updateEmployee
}
