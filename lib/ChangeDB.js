const db = require('./connection');
const mysql = require('mysql2');
const table = require('console.table');

const addDepartment = (departmentName) => {
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

const addRole = (title, salary, departmentName) =>{
    // transfer departmentName into department_id
    let departmentNumber;
    db.promise().query(`SELECT * FROM department`)
    .then(([rows,fields]) => {
        for(let i=0; i<rows.length; i++){
            if (departmentName == fields[i]){
                departmentNumber = rows[i].id;
                break;
            }
            return 'No Such Department'
        };
    })
    .catch((err) => {console.log(err)});

    db.query(`
    INSERT INTO role(title, salary, department_id)
    VALUES (?,?,?) 
    `,[title,salary,departmentNumber],function(err,result){
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

const addEmployee = ()=>{


}
const updateEmployee = () =>{
    
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee
}


// db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });