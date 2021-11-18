-- For generate role

-- SELECT role.id AS id, title, salary, department.name AS department
-- FROM role
-- JOIN department ON role.department_id = department.id;


-- +----+-----------+--------+-------------+
-- | id | title     | salary | department  |
-- +----+-----------+--------+-------------+
-- |  1 | Manager   |    500 | Finance     |
-- |  2 | Accounant |  54654 | Engineering |
-- |  3 | Developer |     65 | Legal       |
-- +----+-----------+--------+-------------+

-- For generate employee

SELECT employee.id AS id, first_name, last_name, title, name AS department, salary, manager_id 
FROM role
JOIN (employee, department) ON (role.id = employee.role_id AND role.department_id = department.id)




-- +----+------------+-----------+-----------+-----------------+------------+--------+
-- | ID | first_name | last_name | title     | department_name | manager_id | salary |
-- +----+------------+-----------+-----------+-----------------+------------+--------+
-- |  1 | Jing       | Li        | Manager   | Finance         |          1 |    500 |
-- |  2 | Amit       | A         | Accounant | Engineering     |          3 |  54654 |
-- |  3 | Tom        | B         | Developer | Legal           |       NULL |     65 |
-- +----+------------+-----------+-----------+-----------------+------------+--------+

