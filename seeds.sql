INSERT INTO department
    (name)
VALUES
    ("Production"),
    ("Human Resources"),
    ("Development"),
    ("Marketing");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Manager", 22.50, 1),
    ("Associate", 15.50, 1),
    ("HR Manager", 25.50, 2),
    ("Intake", 16.50, 2),
    ("Lead Engineer", 25.50, 3),
    ("Engineer", 20.20, 3),
    ("Lead Marketing", 19.50, 4),
    ("Associate Marketing", 15.50, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Liz", "Estrada", 2, 1),
    ("Chris", "Tauz", 1, 1),
    ("Tran", "Klaz", 4, 2),
    ("Kal", "Drogo", 5, 3),
    ("Matt", "Laus", 7, 3);