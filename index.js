const inquirer = require ('inquirer')
const mysql = require('mysql2')
const { allowedNodeEnvironmentFlags } = require('process')
const Add = require('./lib/add')
const Update = require('./lib/update')
const View = require('./lib/view')
let viewDRE;
let addDRE;

function init() {
    inquirer
    .prompt([
        {
            type: "list",
            message:"What would you like to do?",
            name: "option",
            choices:["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
          }
        
    ])
    .then(function(data) {
        if (data.option === "View all departments" || data.option === "View all roles" || data.option === "View all employees") {
            // viewDRE.push(data.option)
            viewOption(data.option)
        } else if (data.option === "Add a department" || data.option === "Add a role" || data.option === "Add an employee") {
            // addDRE.push(data.option)
            // addOption(data.option)
            switch(data.optin) {
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                default:
                    addEmployee();
            }
        } else {
            updateOption(data.option)
        }
    })
}

function viewOption() {
    // inquirer
    // .prompt([

    // ])
}


function addDepartment() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the name of the department you want to add?",
            name: 'department',
          },

    ]) //add department to database (use class constructor)
    // console.log(`Added ${department} to the database`)
}

function addRole() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the name of the role?",
            name: 'role',
          },
        {
            type: 'input',
            message: "What is the role salary?",
            name: 'salary',
          },
        {
            type: 'input',
            message: "What department is this role in?",
            name: 'roleDepartment',
          },

    ]) //add role to database(use class constructor?)
    // console.log(`Added ${role} to the database`)
}

function addEmployee() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'firstName',
          },
        {
            type: 'input',
            message: "What is the employee's last name??",
            name: 'lastName',
          },
        {
            type: 'input',
            message: "What is the role of the employee?",
            name: 'employeeRole',
          },
          {
            type: 'input',
            message: "Who is the employee's manager?",
            name: 'manager',
          },

    ]) //add to database with class constructor 
    // console.log(`Added ${firstName} ${lastName} to the database`)
}



//need to pull first/last name from the database 
// function updateOption() {
//     inquirer
//     .prompt([

//     ])
// }









init() 