DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roleE (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(30),
  salary decimal,
  department_id int
 -- FOREIGN KEY (department)
 -- REFERENCES department(id)
  -- ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(30),
  last_name varchar(30),
  role_id INT,
  manager_id int
 -- FOREIGN KEY (role)
 -- REFERENCES role(id)
);
