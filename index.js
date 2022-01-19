const {prompt} = require('inquirer');
const { async } = require('rxjs');

const db = require('./db/calls')
require('console.table')



function init() {
    prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "option",
                choices: ["View all departments", "View all roles", "View all employees", "View employee by manager name", "View employee by department", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Update an employee manager", "Delete a department", "Delete a role", "Delete an employee", "Quit"]
            }

        ])
        .then(function (data) {
            switch (data.option) {
                case "View all departments":
                    return viewAllDepartment();
                case "View all roles":
                    return viewAllRoles();
                case "View all employees":
                    return viewAllEmployees();
                case "View employee by manager name":
                    return viewEmplByM();
                case "View employee by department":
                    return viewEBD();
                case "Update an employee manager":
                    return updateManOfEmpl();
                case "Add a department":
                    return addDepartment();
                case "Add a role":
                    return addRole();
                case "Add an employee":
                    return addEmployee();
                case "Update an employee role":
                    return updateOption();
                case "Delete a department":
                    return removeDepartment();
                case "Delete a role":
                    return removeRole();
                case "Delete an employee":
                    return removeEmployee();
                default:
                    return quit();
            }

        })
}

function quit() {
    console.log('Goodbye')
    process.exit()
}

async function viewAllDepartment() {
    const department = await db.findAllDepartments();

    console.table(department);
    init();

}

async function viewAllRoles() {
    const roles = await db.findAllRoles();

    console.table(roles);
    init();

}

async function viewAllEmployees() {
    const employees = await db.findAllEmployees();

    console.table(employees);
    init();

}

async function viewEmplByM(){
    const managers = await db.findAllManagers();
    const mapManagers = managers.map(({id, Name}) => ({
        name: Name,
        value: id
    }))
    let employee = await prompt([
        {
            type: 'list',
            message: "Which manager's employees do you want to see?",
            name: 'employeeMan',
            choices: mapManagers,
        },    
    ])
    const newManE = await db.viewEmployeeByManager(employee);
    console.table(newManE)
    init();
}

async function viewEBD(){
    const department = await db.findAllDepartments();
    const mapDepartments = department.map(({id, name}) => ({
        name: name,
        value: id
    }))
    let depSearch = await prompt([
        {
            type: 'list',
            message: "What department do you want a list of employees for?",
            name: 'department',
            choices: mapDepartments,
        },    
    ])
    console.log(depSearch)
    const listBD = await db.viewEmployeeByDepartment(depSearch);
    console.table(listBD)
    init();
}

async function addDepartment() {

    let newDepartment = await prompt([
            {
                type: 'input',
                message: "What is the name of the department you want to add?",
                name: 'name',
            },

        ]);

    await db.addNewDepartment(newDepartment);
    console.log(`${newDepartment.name} was added`)

    init()

}

async function addRole() {
    const departments = await db.findAllDepartments();
    const mapDepartments = departments.map(({id, name}) => ({
        name: name,
        value: id
    }))

    const newRole = await prompt([
            {
                type: 'input',
                message: "What is the name of the role?",
                name: 'title',
            },
            {
                type: 'input',
                message: "What is the role salary?",
                name: 'salary',
            },
            {
                type: 'list',
                message: "Which department is this role in?",
                name: 'department_id',
                choices: mapDepartments
            },

        ])

        await db.addNewRole(newRole);
        console.log(`${newRole.title} was added`)
    
        init()
}

async function addEmployee() {
    const roles = await db.findAllRoles();
    const mapRoles = roles.map(({id, title}) => ({
        name: title,
        value: id
    }))
    const managers = await db.findAllManagers();
    const mapManagers = managers.map(({id, Name}) => ({
        name: Name,
        value: id
    }))

    const newEmployee = await prompt([
            {
                type: 'input',
                message: "What is the employee's first name?",
                name: 'first_name',
            },
            {
                type: 'input',
                message: "What is the employee's last name?",
                name: 'last_name',
            },
            {
                type: 'list',
                message: "What is the role of the employee?",
                name: 'role_id',
                choices: mapRoles,
            },
            {
                type: 'list',
                message: "Who is the employee's manager?",
                name: 'manager_id',
                choices: mapManagers,
            },

        ]) 
        await db.addNewEmployee(newEmployee);
        console.log(`${newEmployee.first_name} ${newEmployee.last_name} was added`)
    
        init()
}

async function updateOption() {
    const managers = await db.findAllManagers();
    const mapManagers = managers.map(({id, Name}) => ({
        name: Name,
        value: id
    }))
    const roles = await db.findAllRoles();
    const mapRoles = roles.map(({id, title}) => ({
        name: title,
        value: id
    }))
    const update = await prompt([
            {
                type: 'list',
                message: "Which employee's role do you want to update?",
                name: "updateEmployee",
                choices: mapManagers,
            },
            {
                type: "list",
                message: "What role do you want to assign to the selected employee?",
                name: "updateRole",
                choices: mapRoles,
            }

        ])
        await db.updateEmployee(update)
        console.log(`Employee manager was updated`)
        init()
}

async function updateManOfEmpl(){
    const managers = await db.findAllManagers();
    const mapManagers = managers.map(({id, Name}) => ({
        name: Name,
        value: id
    }))
    const update = await prompt([
        {
            type: 'list',
            message: "Which employee do you want to update the manager?",
            name: "updateEmployee",
            choices: mapManagers,
        },
        {
            type: "list",
            message: "What manager do you want to assign to the selected employee?",
            name: "updateManager",
            choices: mapManagers,
        }

    ])
    console.log(update)
    await db.updateEmployeeManager(update)
    console.log(`Employee role was updated`)
    init()

}

async function removeDepartment(){
    const department = await db.findAllDepartments();
    const mapDepartments = department.map(({id, name}) => ({
        name: name,
        value: id
    }))
    let removeDepartment = await prompt([
        {
            type: 'list',
            message: "What department would you like to delete?",
            name: 'department',
            choices: mapDepartments
        },

    ]);

await db.deleteDepartment(removeDepartment);
console.log(`${removeDepartment.name} was deleted`)

init()
}

async function removeRole(){
    const roles = await db.findAllRoles();
    const mapRoles = roles.map(({id, title}) => ({
        name: title,
        value: id
    }))
    let removeRole = await prompt([
        {
            type: 'list',
            message: "What role would you like to delete?",
            name: 'title',
            choices: mapRoles
        }
    ])
    await db.deleteRole(removeRole);
    console.log(`Role was deleted`)
    init();
} 

async function removeEmployee(){
    const managers = await db.findAllManagers();
    const mapManagers = managers.map(({id, Name}) => ({
        name: Name,
        value: id
    }))
    let removeEmployee = await prompt([
        {
            type: 'list',
            message: "Which employee would you like to delete?",
            name: 'title',
            choices: mapManagers
        }
    ])
    await db.deleteEmployee(removeEmployee);
    console.log(`Role was deleted`)
    init();

}








init() 