USE database3_3;
create database database3_3;
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  age INT,
  salary INT
);

INSERT INTO employees ( name, age, salary)
VALUES 
  ( 'John', 35, 60000),
  ( 'Mary', 27, 50000),
  ( 'Peter', 42, 75000),
  ( 'Olivia', 29, 55000),
  ( 'Michael', 38, 80000);

-- Q1
select * from employees;

-- Q2

select * from employees where salary > 60000;

-- Q3
SET SQL_SAFE_UPDATES=0;
UPDATE employees SET age = 43 WHERE name = 'Peter';

-- Q4

delete from employees where id = 4;

-- Q5
select AVG(salary) as AVG_salary from employees ;

-- Q6
select name,age from employees where  age = (select max(age) from employees);

-- Q7
select name,age from employees where  age = (select min(age) from employees);

-- Q8

select name from employees where  salary = (select max(salary) from employees);

-- Q9

