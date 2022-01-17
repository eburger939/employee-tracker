const inquirer = require ('inquirer')
const mysql = require('mysql2')
const { allowedNodeEnvironmentFlags } = require('process')
const Add = require('./lib/add')
const Update = require('./lib/update')
const View = require('./lib/view')
const cTable = require('console.table')
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
    .then((data) => {
        init()
    })
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
    .then((data) => {
        init()
    })
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
            message: "Which department is this role in?",
            name: 'roleDepartment',
            //need to add whatever other departments are added from above
            //need to pull choices from the DB
            choices: ["Marketing", "Finance", "Human Resources", "Information Technology", "Operations"]
          },

    ]) //add role to database(use class constructor?)
    // console.log(`Added ${role} to the database`)
    .then((data) => {
        init()
    })
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
            choices: ["Marketing assistant", "Principle accountant", "Human Resource Specialist", "IT Manager", "Operations Manager"]
          },
          {
            type: 'input',
            message: "Who is the employee's manager?",
            name: 'manager',
            choices: ["Katy Herring", "Bryce Vang", "Jarrod Medrano", "Debra Key", "Archer Poole"]
          },

    ]) //add to database with class constructor 
    //add name so it will appear below in the update employee section choices
    // console.log(`Added ${firstName} ${lastName} to the database`)
    .then((data) => {
        init()
    })
}



//need to pull first/last name from the database 
function updateOption() {
    inquirer
    .prompt([
    {
        type: 'input',
        message: "Which employee's role do you want to update?",
        name: "updateEmployee"
        // choices: [//need to pull from DB]
    }
    {
        type: "input",
        message: "What role do you want to assign to the selected employee?",
        name: "updateRole",
        choices: ["Marketing assistant", "Principle accountant", "Human Resource Specialist", "IT Manager", "Operations Manager"]
    }

    ])
    .then((data) => {
        init()
    });
}









init() 