
const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees } = require('./lib/ShowDB');
const { addDepartment, addRole, addEmployee, updateEmployee } = require('./lib/ChangeDB');



const init = () => {
    // console.log(`
    // +--------------------------------+
    // |           Employee             |
    // |           Tracker              |
    // +--------------------------------+
    // `);
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
                viewDepartments();
                init();
                break;
            case 'View All Roles':
                viewRoles();
                init();
                break;
            case 'View All Employees':
                viewEmployees();
                init();
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
                    addDepartment(data.addDepartment);
                    init();
                })
                break;
            // case 'Add Role':
            //     inquirer
            //     .prompt([
            //         {
            //             type:'',
            //             name:'',
            //             message:''
            //         }
            //     ])
            //     addRole();
            //     init();
            //     break;
            // case 'Add Employee':
            //     addEmployee();
            //     break;
            // case 'Update Employee Role':
            //     updateEmployee();
            //     break;
            case 'Done':
                break;
        }
        // // If the user choose 'View All Departments'
        // if(choice.mainQuestion == 'View All Departments'){
        //     viewDepartments();
        //     init();
        // // If the user choose 'View All Roles'   
        // }else if(choice.mainQuestion == 'View All Roles'){
        //     viewRoles();
        //     init();
        // // If the user choose 'View All Employees'   
        // }else if(choice.mainQuestion == 'View All Employees'){
        //     viewEmployees();
        //     init();
        // // If the user choose 'Add Department'   
        // }else if(choice.mainQuestion == 'Add Department'){   
        //     inquirer
        //     .prompt([
        //         {
        //             type:'input',
        //             name: 'addNewDepartment',
        //             message: 'What is the name of the department?'
        //         }
        //     ]) 
        //     .then((data)=>{
        //         addDepartment(data);
        //         console.log(`Added ${data} to the database`);
        //         init();
        //     }) 
        // // If the user choose 'Add Role' 
        // }else if(choice.mainQuestion == 'Add Role'){
        //     inquirer
        //     .prompt([
        //         {
        //             type:'input',
        //             name: 'addNewRole',
        //             message: 'What is the name of the role?'
        //         },
        //         {
        //             type:'input',
        //             name: 'addNewRoleSalary',
        //             message: 'What is the the salary of the role?'
        //         },
        //         {
        //             type:'input',
        //             name: 'addNewRoleDepartment',
        //             message: 'Which department does the role belong to?'
        //         }
        //     ]) 
        //     .then((data)=>{
        //         const {addNewRole, addNewRoleSalary, addNewRoleDepartment} = data;
        //         addRole(addNewRole, addNewRoleSalary, addNewRoleDepartment);
        //         console.log(`Added ${addNewRole} to the database`);
        //         init();
        //     })  
        // // If the user choose 'Add Employee'       
        // // }else if(answer.mainQuetion == 'Add Employee'){   
        // //     inquirer
        // //     .prompt([
        // //         {
        // //             type:'input',
        // //             name: 'addNewEmployee',
        // //             message: 'What is the employee\'s first name?'
        // //         }
        // //     ]) 
        // //     .then((data)=>{
        // //         addEmployee(data);
        // //         console.log(`Added ${data} to the database`);
        // //         init();
        // //     })  
        // // // If the user choose 'Update Employee Role' 
        // // }else if(answer.mainQuetion == 'Update Employee Role'){
        // //     updateEmployee();
        // //     init();
        // // If the user choose 'Done' 
        // }else if (choice.mainQuestion == 'Done'){
        //     console.log("Thank you for using Employee-Tracker, you have a nice day!")
        // }

    })
    
    // .catch((err)=>{
    //     console.log(err)
    // })
}

init();

// module.exports = ;
