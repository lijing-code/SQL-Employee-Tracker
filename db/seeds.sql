INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

INSERT INTO role (title, salary,department_id)
VALUES  ("Manager",500.234,2),
        ("Accounant",54654.2,1),
        ("Developer",65,3);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES  ("Jing","Li",1,1),
        ("Amit","A",2,1),
        ("Tom","B",3,NULL);