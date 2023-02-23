CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    hire_date DATE,
    title VARCHAR(100),
    department_id INT,
    salary FLOAT,
    manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES managers(manager_id)
);

CREATE TABLE department (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);

INSERT INTO department (department_id, department_name)
VALUES 
    (1, 'Engineering'),
    (2, 'Data Science'),
    (3, 'Sales'),
    (4, 'Marketing');
    
CREATE TABLE managers (
  manager_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  hire_date DATE
);

INSERT INTO employees (employee_id, first_name, last_name, email, hire_date, title, department_id, salary,manager_id)
VALUES
  (1, 'John', 'Doe', 'johndoe@example.com', '2020-01-01', 'Software Engineer', 1, 75000.00,2),
  (2, 'Jane', 'Doe', 'janedoe@example.com', '2020-01-02', 'Product Manager', 1, 90000.00,2),
  (3, 'Bob', 'Smith', 'bobsmith@example.com', '2020-01-03', 'Data Analyst', 2, 60000.00,1),
  (4, 'Alice', 'Johnson', 'alicejohnson@example.com', '2020-01-04', 'Marketing Specialist', 4, 80000.00,4),
  (5, 'Tom', 'Wilson', 'tomwilson@example.com', '2020-01-05', 'Sales Manager', 3, 100000.00,2),
  (6, 'Sam', 'Lee', 'samlee@example.com', '2021-02-15', 'Sales Executive', 3, 70000.00,3),
  (7, 'Emily', 'Kim', 'emilykim@example.com', '2021-02-15', 'Marketing Executive', 4, 70000.00,3),
  (8, 'Brian', 'Park', 'brianpark@example.com', '2019-08-01', 'Sales Manager', 3, 95000.00,1),
  (9, 'Jessica', 'Lee', 'jessicalee@example.com', '2019-08-01', 'Data Scientist', 2, 85000.00,3),
  (10, 'David', 'Choi', 'davidchoi@example.com', '2018-01-01', 'Engineering Manager', 1, 120000.00,2),
  (11, 'Karen', 'Kim', 'karenkim@example.com', '2018-01-01', 'Software Engineer', 1, 80000.00,3),
  (12, 'Michael', 'Park', 'michaelpark@example.com', '2018-01-01', 'Data Engineer', 2, 90000.00,3),
  (13, 'Hannah', 'Kim', 'hannahkim@example.com', '2017-06-01', 'Marketing Manager', 4, 110000.00,4),
  (14, 'Daniel', 'Lee', 'daniellee@example.com', '2017-06-01', 'Marketing Specialist', 4, 60000.00,1),
  (15, 'Ryan', 'Kim', 'ryankim@example.com', '2016-09-01', 'Sales Executive', 3, 80000.00,2);

INSERT INTO managers (manager_id, first_name, last_name, email, hire_date)
VALUES (1, 'John', 'Smith', 'john.smith@email.com', '2022-01-01'),
       (2, 'Jane', 'Doe', 'jane.doe@email.com', '2022-02-01'),
(3, 'David', 'Lee', 'david.lee@email.com', '2021-10-01'),
       (4, 'Maria', 'Garcia', 'maria.garcia@email.com', '2022-03-01');
       
       
       CREATE TABLE dependents (
  dependent_id INT PRIMARY KEY,
  emp_id INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  relationship VARCHAR(50),
  FOREIGN KEY (emp_id) REFERENCES employees(employee_id)
);

INSERT INTO dependents (dependent_id, emp_id, first_name, last_name, relationship)
VALUES
  (1, 2, 'John', 'Smith', 'Spouse'),
  (2, 2, 'Emily', 'Smith', 'Child'),
  (3, 3, 'Amy', 'Johnson', 'Child'),
  (4, 5, 'Molly', 'Brown', 'Child');


-- Q1

SELECT first_name, last_name
FROM employees
WHERE title LIKE '%Manager%';


-- Q2

SELECT department.department_name, AVG(employees.salary) AS average_salary
FROM employees
JOIN department ON employees.department_id = department.department_id
GROUP BY department.department_name;


-- Q3

SELECT 
    YEAR(hire_date) AS year,
    COUNT(hire_date) AS numberOfEmployees
FROM
    employees
GROUP BY YEAR(hire_date)
ORDER BY YEAR(hire_date) DESC;

-- Q4

SELECT 
    first_name,last_name,salary
FROM
    employees
ORDER BY salary desc
LIMIT 10;

-- Q5

SET SQL_SAFE_UPDATES=0;
UPDATE employees
SET salary = salary * 1.1
WHERE department_id = (
    SELECT department_id
    FROM department
    WHERE department_name = 'Sales'
);


-- Q6

DELETE FROM employees
WHERE year(hire_date) < '2000';

-- Q7

CREATE TABLE employee_stats AS
SELECT 
  department_id, 
  COUNT(*) AS total_employees, 
  AVG(salary) AS average_salary
FROM employees
GROUP BY department_id;
-- 8

SELECT e.first_name, e.last_name
FROM employees e
INNER JOIN employees m ON e.manager_id = m.employee_id
WHERE e.last_name = m.last_name;


-- 9
SELECT 
    department_id, AVG(salary) AS avg_salary
FROM
    employees
GROUP BY department_id
ORDER BY avg_salary DESC
LIMIT 5;


-- 10
SELECT e.first_name, e.last_name
FROM employees e
JOIN dependents d ON e.employee_id = d.emp_id
ORDER BY e.last_name;


