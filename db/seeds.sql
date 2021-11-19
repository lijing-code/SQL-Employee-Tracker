INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

INSERT INTO role (title, salary,department_id)
VALUES  ("Manager-Eng",100000,1),
        ("Manager-Fin",85000,2),
        ("Manager-Legal",85000,3),
        ("Manager-Sales",82000,4),
        ("Accounant",60000,1),
        ("Developer",75000,3);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES  ("Jing","Li",1,1),
        ("Bob","Rumak",2,2),
        ("Alex","Rainie",6,1),
        ("Tom","Blair",5,NULL);