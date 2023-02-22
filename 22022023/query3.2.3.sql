CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT
);

INSERT INTO employees (id, name, department, salary)
VALUES
    (1, 'John Doe', 'sales', 60000),
    (2, 'Jane Smith', 'marketing', 55000),
    (3, 'Bob Johnson', 'sales', 65000),
    (4, 'Sarah Lee', 'engineering', 70000),
    (5, 'Tom Wilson', 'sales', 50000);


SELECT name, salary
FROM employees
WHERE department = 'sales' AND salary > 50000;
