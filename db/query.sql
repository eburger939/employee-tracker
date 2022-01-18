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

-- query to view employees with name concated and manager name displaying instead of a number
SELECT * FROM employee_tracker.employee;
use employee_tracker;

select e.id, CONCAT(e.first_name, ' ', e.last_name) AS Name, role.title, department.name, role.salary,
concat(a.first_name, ' ', a.last_name) AS manager
from employee e
left join employee a ON
a.id = e.manager_id
join role ON e.role_id = role.id
join department ON role.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id
FROM employee
join role ON employee.role_id = role.id
join department ON role.department_id = department.id
left join employee a on a.id = manager_id;


-- select distinct manager
select distinct e.manager_id, 
concat(a.first_name, ' ', a.last_name) AS manager
from employee e
join employee a ON
a.id = e.manager_id
