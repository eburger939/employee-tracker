const inquirer = require ('inquirer')
const mysql = require('mysql2')
const Add = require('./lib/add')
const Update = require('./lib/update')
const View = require('./lib/view')


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
}

function viewOption() {
    inquirer
    .prompt([

    ])
}


function addOption() {
    inquirer
    .prompt([

    ])
}


function updateOption() {
    inquirer
    .prompt([

    ])
}









init() 