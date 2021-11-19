
const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees } = require('./lib/ShowDB');
const { addDepartment, addRole, roleList, managerList, addEmployee, updateEmployee } = require('./lib/ChangeDB');

const start = () => {
    console.log(`
    +--------------------------------+
    |           Employee             |
    |           Tracker              |
    +--------------------------------+
    `);
    init();
}

const init = () => {
    
    inquirer
    .prompt([
        {
            type:'list',
            name:'mainQuestion',
            message:'What would you like to do?',
            choices:[
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Done'
            ]
        }
    ])
    .then((choice)=>{
        switch(choice.mainQuestion){
            case 'View All Departments':
                viewDepartments().then(init());
                break;
            case 'View All Roles':
                viewRoles().then(init());
                break;
            case 'View All Employees':
                viewEmployees().then(init());
                break;
            case 'Add Department':
                inquirer
                .prompt([
                    {
                        type:'input',
                        name:'addDepartment',
                        message:'What is the name of the department?'
                    }
                ])
                .then((data)=>{
                    console.log(`Added ${data.addDepartment} to the database.`);
                    addDepartment(data.addDepartment).then(init());
                })
                break;
            case 'Add Role':
                inquirer
                .prompt([
                    {
                        type:'input',
                        name:'addRole',
                        message:'What is the name of the role?'
                    },
                    {
                        type:'input',
                        name:'addSalary',
                        message:'What is the salary of the role?'
                    },
                    {
                        type:'input',
                        name:'addDepartment',
                        message:'Which department does the role belong to?'
                    }
                ])
                .then((data) =>{
                    addRole(data.addRole, data.addSalary, data.addDepartment)
                    .then(console.log(`Add ${data.addRole} to the database.`))
                    .then(init());   
                })
                break;
            case 'Add Employee':
                inquirer
                .prompt([
                    {
                        type:'input',
                        name:'firstName',
                        message:'What is the employee\'s first name?'
                    },
                    {
                        type:'input',
                        name:'lastName',
                        message:'What is the employee\'s last name?'
                    },
                    {
                        type:'list',
                        name:'role',
                        message:'What is the employee\'s role?',
                        choices: roleList()
                    },
                    {
                        type:'list',
                        name:'managerName',
                        message:'Who is the employee\'s manager?',
                        choices: managerList()
                    }
                ])
                .then((data)=>{
                    const {firstName, lastName, role, managerName} = data;
                    addEmployee(firstName, lastName, role, managerName)
                    .then(console.log(`Add ${firstName} ${lastName} to the database.`))
                    .then(init());   
                })
                break;
            case 'Update Employee Role':
                inquirer
                .prompt([
                    {
                        type:'input',
                        name:'employeeName',
                        message:'Which employee\'s role do you want to update?'
                    },
                    {
                        type:'list',
                        name:'newRole',
                        message:'Which role do you want to assign the selected employee?',
                        choices: roleList()
                    }
                ])
                .then((data) =>{
                    const {employeeName, newRole} = data;
                    updateEmployee(employeeName, newRole)
                    .then(init());  
                })
                break;
            case 'Done':
                console.log('Thanks for using employee-tracker, have a nice day!')
                break;
        }
        
    })
}

start();
