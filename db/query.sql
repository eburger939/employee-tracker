-- query for view departments
select *
from employee_tracker.department;

-- query to view request info from roles 
-- joined with name of department from department table
SELECT roleE.id, roleE.title, roleE.salary, department.name
FROM employee_tracker.roleE
join department ON roleE.department_id = department.id;

-- query to view employees
SELECT employee.id, employee.first_name, employee.last_name, roleE.title, department.name, roleE.salary, employee.manager_id
FROM employee_tracker.employee
join roleE ON employee.role_id = roleE.id
join department ON roleE.department_id = department.id;
