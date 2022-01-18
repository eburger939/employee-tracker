const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

//   findAllDepartments() {
//     return this.connection.query(
//       "use employee_tracker; SELECT * FROM employee_tracker.department"
//     );
//   }

//   findAllRoles() {
//     return this.connection.query(
//       "use employee_tracker; SELECT role.id, role.title, role.salary, department.name FROM employee_tracker.role join department ON role.department_id = department.id;"
//     );
//   }

  findAllEmployees() {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id FROM employee_tracker.employee join role ON employee.role_id = role.id join department ON role.department_id = department.id;"
    );
  }
}

module.exports = new DB(connection);
