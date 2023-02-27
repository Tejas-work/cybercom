--  Q1

SELECT 
    c.customer_name,
    SUM(oi.quantity * p.unit_price) AS total_price
FROM
    customers c
        JOIN
    orders o USING (customer_id)
        JOIN
    order_items oi USING (order_id)
        JOIN
    products1 p USING (product_id)
WHERE
    p.category = 'Electronics'
GROUP BY c.customer_id
ORDER BY total_price DESC;

-- Q2
SELECT 
    e.employee_name,
    SUM(oi.quantity * p.unit_price) AS total_revenue
FROM
    employees e
        JOIN
    orders o USING (employee_id)
        JOIN
    order_items oi USING (order_id)
        JOIN
    products p USING (product_id)
WHERE
    p.category = 'clothing'
GROUP BY e.employee_id
HAVING COUNT(e.employee_id) >= 1
ORDER BY total_revenue DESC;
use practice5;
drop table customers;
drop table employees;

CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    hire_date DATE NOT NULL,
    job_title VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10 , 2 )
);

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    phone VARCHAR(20),
    shipping_address VARCHAR(100)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    employee_id INT,
    order_date DATE NOT NULL,
    FOREIGN KEY (customer_id)
        REFERENCES Customers (customer_id),
    FOREIGN KEY (employee_id)
        REFERENCES Employees (employee_id)
);

CREATE TABLE Order_Items (
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    PRIMARY KEY (order_id , product_id),
    FOREIGN KEY (order_id)
        REFERENCES Orders (order_id),
    FOREIGN KEY (product_id)
        REFERENCES Products (product_id)
);

CREATE TABLE Products1 (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    unit_price DECIMAL(10 , 2 ) NOT NULL
);

-- Insert employees
INSERT INTO Employees (employee_id, employee_name, hire_date, job_title, department, salary)
VALUES (1, 'John Smith', '2020-01-01', 'Sales Manager', 'Sales', 80000),
       (2, 'Jane Doe', '2019-05-15', 'Sales Representative', 'Sales', 50000),
       (3, 'Bob Johnson', '2020-03-01', 'Marketing Manager', 'Marketing', 75000),
       (4, 'Sarah Lee', '2018-12-01', 'Marketing Coordinator', 'Marketing', 45000);

-- Insert customers
INSERT INTO Customers (customer_id, customer_name, email, phone, shipping_address)
VALUES (1, 'Acme Corp', 'mailto:acme@acme.com', '555-1234', '123 Main St, Anytown, USA'),
       (2, 'XYZ Inc', 'mailto:xyz@xyz.com', '555-5678', '456 Oak St, Anytown, USA'),
       (3, 'ABC LLC', 'mailto:abc@abc.com', '555-9876', '789 Maple St, Anytown, USA'),
       (4, 'Smith & Co', 'mailto:smithco@smithco.com', '555-4321', '321 Elm St, Anytown, USA');

-- Insert products
INSERT INTO Products (product_id, product_name, category, unit_price)
VALUES (1, 'iPhone 13', 'Electronics', 999.99),
       (2, 'MacBook Pro', 'Electronics', 1499.99),
       (3, 'T-shirt', 'Clothing', 19.99),
       (4, 'Jeans', 'Clothing', 49.99),
       (5, 'Smart Watch', 'Electronics', 249.99),
       (6, 'Sneakers', 'Clothing', 79.99);
       insert into products1 values
       (7, 'Smart Watch1', 'Electronics', 249.99),
       (8, 'Smart Watch2', 'Electronics', 249.99);

-- Insert orders
INSERT INTO Orders (order_id, customer_id, employee_id, order_date)
VALUES (1, 1, 1, '2022-01-01'),
       (2, 2, 2, '2022-01-02'),
       (3, 3, 3, '2022-01-03'),
       (4, 4, 4, '2022-01-04');
       
-- Insert order items
INSERT INTO Order_Items (order_id, product_id, quantity)
VALUES (1, 1, 2),
       (1, 5, 1),
       (1, 6, 1),
       (2, 2, 1),
       (2, 5, 1),
       (2, 6, 2),
       (3, 1, 1),
       (3, 2, 1),
       (4, 3, 4),
       (4, 4, 2),
       (4, 6, 1);

--  Q3
SELECT 
    c.customer_name
FROM
    customers c
        JOIN
    orders o USING (customer_id)
        JOIN
    order_items oi USING (order_id)
        JOIN
    products1 p USING (product_id)
WHERE
    p.category IN ('Electronics' , 'clothing')
GROUP BY o.order_id
HAVING COUNT(DISTINCT p.category) = 2;

-- Q4

SELECT 
    e.employee_name
FROM
    employees e
        JOIN
    orders o USING (employee_id)
        JOIN
    order_items oi USING (order_id)
        JOIN
    products1 p USING (product_id)
        JOIN
    customers c USING (customer_id)
WHERE
    c.shipping_address LIKE ('%' , e.city, '%')
GROUP BY employee_id
HAVING COUNT(DISTINCT order_id) >= 1;

--  Q5

SELECT 
    c.customer_name
FROM
    customers c
        JOIN
    orders o USING (customer_id)
        JOIN
    order_items oi USING (order_id)
        JOIN
    products1 p USING (product_id)
WHERE
    p.category IN ('Electronics')
        AND c.customer_id NOT IN (SELECT 
            c2.customer_id
        FROM
            customers c2
                JOIN
            orders o2 USING (customer_id)
                JOIN
            order_items oi2 USING (order_id)
                JOIN
            products1 p2 USING (product_id)
        WHERE
            p2.category = 'clothing')
GROUP BY c.customer_id;

--  Q6

SELECT 
    e.employee_name
FROM
    employees e
        JOIN
    orders o USING (employee_id)
        JOIN
    order_items oi USING (order_id)
        JOIN
    products1 p USING (product_id)
        JOIN
    customers c USING (customer_id)
WHERE
    p.category IN ('Electronics')
        AND c.customer_id NOT IN (SELECT 
            c2.customer_id
        FROM
            customers c2
                JOIN
            orders o2 USING (customer_id)
                JOIN
            order_items oi2 USING (order_id)
                JOIN
            products1 p2 USING (product_id)
        WHERE
            p2.category = 'clothing')
GROUP BY e.employee_id;

-- Q7

SELECT 
    c.customer_name
FROM
    customers c
        JOIN
    orders o USING (customer_id)
        JOIN
    order_items USING (order_id)
        JOIN
    products1 p USING (product_id)
WHERE
    p.category = 'Electronics'
GROUP BY customer_id
HAVING COUNT(DISTINCT p.product_id) > 5;

--  Q8

SELECT 
    e.employee_name
FROM
    employees e
        JOIN
    orders o USING (employee_id)
        JOIN
    order_items oi USING (order_id)
        JOIN
    products1 p USING (product_id)
        JOIN
    customers c USING (customer_id)
WHERE
    p.category = 'Electronics'
GROUP BY employee_id
HAVING COUNT(DISTINCT p.product_id) > 5;