const {prompt} = require('inquirer')

const db = require('./db/calls')
require('console.table')



function init() {
    prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "option",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"]
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
        console.log(`Employee role was updated`)
        init()
    }











init() 