

insert into department(name)
values ("Marketing"),
       ("Finance"),
       ("Human Resources"),
       ("Information Technology"),
       ("Operations");

insert into role(title, salary, department_id)
values ("Marketing assistant", 50000, 1)
       ("Principle accountant", 35000, 2)
       ("Human Resource Specialist", 65000, 3)
       ("IT Manager", 85000, 4)
       ("Operations manager", 55000 5)

insert into employee(first_name, last_name, role_id, manager_id)

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(30),
  last_name varchar(30),
  role_id INT
  manager_id int
  foreign key (role_id),
  foreign key (manager_id)
);