const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepartments() {
    return this.connection.query(
      "SELECT * FROM employee_tracker.department"
    );
  }

  findAllRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, role.salary, department.name FROM employee_tracker.role join department ON role.department_id = department.id;"
    );
  }

  findAllEmployees() {
    return this.connection.query(
    "select e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(a.first_name, ' ', a.last_name) AS manager from employee e left join employee a ON a.id = e.manager_id join role ON e.role_id = role.id join department ON role.department_id = department.id;"
    );

    
  }

  findAllManagers(){
      return this.connection.query(
          "select e.id, CONCAT(e.first_name, ' ', e.last_name) AS Name from employee e left join employee a ON a.id = e.manager_id join role ON e.role_id = role.id join department ON role.department_id = department.id;"
      )
  }

  addNewDepartment(newDepartment) {
      return this.connection.query(
        "INSERT INTO department SET ?", newDepartment )
    }
  
  addNewRole(newRole) {
      return this.connection.query(
          "INSERT INTO role SET ?", newRole
      )
  }
  addNewEmployee(newEmployee) {
      return this.connection.query(
          "INSERT INTO employee SET ?", newEmployee
      )
  }

  updateEmployee(update) {
      return this.connection.query(
          "UPDATE employee SET role_id = ? WHERE ID =?", [update.updateRole, update.updateEmployee]
      )

  }

  updateEmployeeManager(update){
      return this.connection.query(
        "UPDATE employee SET manager_id = ? WHERE id = ?", [update.updateManager, update.updateEmployee]
      )

  }

  viewEmployeeByManager(employee){
      return this.connection.query(
        "select CONCAT(first_name, ' ', last_name) AS Employee from employee where manager_id = ?", employee.employeeMan
      )

  }
  viewEmployeeByDepartment(listBD){
      return this.connection.query(
        "select CONCAT(e.first_name, ' ', e.last_name) AS Employee from employee e left join employee a ON a.id = e.manager_id join role ON e.role_id = role.id join department ON role.department_id = department.id where department_id = ?", listBD.department
      )

  }
  
  deleteDepartment(removeDepartment){
      return this.connection.query(
          "DELETE FROM department where id = ?", removeDepartment.department
      )
  }
  deleteRole() {

  }
  deleteEmployee(){

  }
  
  viewTotalDepartmentBudget() {

  }
}


module.exports = new DB(connection);
