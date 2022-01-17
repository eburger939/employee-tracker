

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
values ("Emily", "Burger", 1, 5)
       ("Kendra", "Forster", 3, 1)
       ("Issac", "Hulme", 2, 3)
