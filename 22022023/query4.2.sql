create database company;
use company;

CREATE TABLE Employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department_id INTEGER REFERENCES Departments (department_id),
    salary DECIMAL(10 , 2 )
);

CREATE TABLE Departments (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

CREATE TABLE Salaries (
    employee_id INTEGER REFERENCES Employees (employee_id),
    salary DECIMAL(10 , 2 ),
    date DATE
);


INSERT INTO Departments (department_name)
VALUES
  ('Sales'),
  ('Marketing'),
  ('Engineering'),
  ('Human Resources');

INSERT INTO Employees (name, department_id, salary)
VALUES
  ('John Smith', 1, 50000),
  ('Mary Johnson', 2, 60000),
  ('Bob Williams', 3, 70000),
  ('Lisa Davis', 2, 55000),
  ('Tom Wilson', 3, 65000);

INSERT INTO Salaries (employee_id, salary, date)
VALUES
  (1, 50000, '2022-01-01'),
  (2, 60000, '2022-01-01'),
  (3, 70000, '2022-01-01'),
  (4, 55000, '2022-01-01'),
  (5, 65000, '2022-01-01');


-- Q1



SELECT 
    *
FROM
    Employees
WHERE
    department_id = (SELECT 
            id
        FROM
            Departments
        WHERE
            department_name = 'Sales');
            

-- Q2
SELECT 
    d.department_name, COUNT(e.department_id) as num_employees
FROM
    Departments d
        JOIN
    Employees e ON e.department_id = d.id
GROUP BY e.department_id
ORDER BY d.department_name;


-- Q3
SELECT 
    d.department_name, AVG(e.salary) AS avg_salary
FROM
    Departments d
        JOIN
    Employees e ON e.department_id = d.id
GROUP BY e.department_id
ORDER BY d.department_name;


-- Q4

SELECT e.name, e.salary
FROM Employees e
ORDER BY e.salary DESC
LIMIT (SELECT COUNT(*) FROM Employees)*0.1 ;

-- Q5

SELECT 
    e.name, s.salary
FROM
    Employees e
        JOIN
    Salaries s ON e.id = s.employee_id
WHERE
    s.date = (SELECT 
            MAX(s2.date)
        FROM
            Salaries s2
        WHERE
            s2.employee_id = e.id)
ORDER BY e.name;




