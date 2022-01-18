const inquirer = require ('inquirer')

const db = require('./db/calls')
require('console.table')



function init() {
    inquirer
    .prompt([
        {
            type: "list",
            message:"What would you like to do?",
            name: "option",
            choices:["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"]
          }
        
    ])
    .then(function(data) {
        switch (data.option) {
            case "View all departments":
                return viewAllDepartment();
            case "View all roles":
                return viewAllRoles();
            case "View all employees":
                return viewAllEmployees();
            case "Add a department":
                return addDepartment();
            case "Add a role":
                return addRole();
            case "Add an employee":
                return addEmployee();
            case "Update an employee role":
                return updateOption();
            default:
                return quit();
        }
     
    })
}

function quit() {
    console.log('Goodbye')
    process.exit()
}

// async function viewAllDepartment() {
//     const department = await db.findAllDepartments();

//     console.table(department);
//     init();
    
// }

// async function viewAllRoles() {
//     const roles = await db.findAllRoles();

//     console.table(roles);
//     init();
    
// }

async function viewAllEmployees() {
    const employees = await db.findAllEmployees();

    console.table(employees);
    // console.log(employees)
    init();
    
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
        Add.addNewDepartment(data);
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
        Add.addNewRole(data)
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
        Add.addNewEmployee(data)
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
    },
    {
        type: "input",
        message: "What role do you want to assign to the selected employee?",
        name: "updateRole",
        choices: ["Marketing assistant", "Principle accountant", "Human Resource Specialist", "IT Manager", "Operations Manager"]
        //need to pull choices from the db??
    }

    ])
    .then((data) => {
        init()
    });
}









init() 