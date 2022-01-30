INSERT INTO department (name)
VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES
("Salesperson", 80000, 1),
("Salesperson", 80000, 1),
("Sales Lead", 90000, 1),
("Software Engineer", 100000, 2),
("Software Engineer", 100000, 2),
("Lead Engineer", 115000, 2),
("Accountant", 100000, 3),
("Accountant", 100000, 3),
("Account Manager", 120000, 3),
("Legal Team Lead", 125000, 4),
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Mike", "Chan", 1, 3),
("Jay", "Williams", 2, 3),
("Amy", "Jones", 3, null),
("Kevin", "Tupik", 4, 6),
("Kyle", "Evans", 5, 6),
("Ashley", "Rodriguez", 6, null),
("Malia", "Brown", 7, 9),
("John", "Doe", 8, 9),
("Kumal", "Singh", 9, null),
("Sarah", "Lourd", 10, null),
("Tom", "Allen", 11, null);