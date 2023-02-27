
-- Q1
use database3;
SELECT customer_id, COUNT(*) AS total_orders
FROM orders
GROUP BY customer_id
ORDER BY total_orders DESC
LIMIT 10;

-- Q2

SELECT 
    e.first_name, e.last_name, SUM(quantity * od.price) AS worth
FROM
    employees e
        JOIN
    orders_details od ON od.employee_id = e.id
GROUP BY od.employee_id
HAVING worth > 10000
ORDER BY worth;

-- Q3
use database3;
SELECT 
    c.FirstName, SUM(o.total_amount)
FROM
    Customers c
        JOIN
    orders o ON o.customer_id = c.CustomerId
   WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) 
GROUP BY o.customer_id;


-- Q4
SELECT 
    *
FROM
    employees
WHERE
    salary >= (SELECT 
            AVG(salary)
        FROM
            employees);
  
-- Q5

SELECT DISTINCT c.name
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date < DATE_SUB('2023-02-24', INTERVAL 90 DAY)
AND c.customer_id NOT IN (
    SELECT DISTINCT customer_id
    FROM orders
    WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 90 DAY)
);



-- Q6

SELECT first_name, MIN(salary) 
FROM employees 
GROUP BY department_id,first_name;

-- Q7

select first_name , salary, department_id 
from employees e1
where (select count(*) from employees e2 where e2.department_id = e1.department_id and e2.salary>e1.salary )<=5
order by department_id, salary desc;

-- Q8
use sales;
SELECT
  customers.first_name,
  customers.last_name,
  customers.email
FROM
  customers
  INNER JOIN orders ON customers.customer_id = orders.customer_id
  INNER JOIN products ON orders.product_id = products.product_id
WHERE
  products.unit_price > 10
GROUP BY
  customers.customer_id;
  
  
  -- Q9
SELECT 
    c.FirstName,
    AVG(o.total_amount) AS average,
    SUM(o.total_amount) AS total_amount
FROM
    Customers c
        JOIN
    orders o ON o.customer_id = c.CustomerID
GROUP BY o.customer_id;


-- Q10
use database5;
SELECT DISTINCT p.product_name, o.country_name
FROM products p
INNER JOIN (
  SELECT DISTINCT op.product_id, c.country_name
  FROM order_products op
  INNER JOIN orders o ON op.order_id = o.order_id
  INNER JOIN customers c ON o.customer_id = c.customer_id
  GROUP BY op.product_id, c.country_name
  HAVING COUNT(DISTINCT c.country_name) > 1
) o ON p.product_id = o.product_id;
