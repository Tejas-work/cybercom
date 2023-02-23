
CREATE DATABASE sales;


USE sales;


CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20)
);


INSERT INTO customers (customer_id, first_name, last_name, email, phone)
VALUES
  (1, 'John', 'Doe', 'johndoe@example.com', '555-1234'),
  (2, 'Jane', 'Smith', 'janesmith@example.com', '555-5678'),
  (3, 'Bob', 'Johnson', 'bobjohnson@example.com', '555-9012'),
  (4, 'Alice', 'Williams', 'alicewilliams@example.com', '555-3456'),
  (5, 'Mike', 'Brown', 'mikebrown@example.com', '555-7890');


CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    unit_price DECIMAL(10 , 2 ),
    description VARCHAR(255)
);


INSERT INTO products (product_id, product_name, unit_price, description)
VALUES
  (1, 'Widget', 9.99, 'A small widget'),
  (2, 'Gadget', 19.99, 'A fancy gadget'),
  (3, 'Doohickey', 4.99, 'A useful doohickey'),
  (4, 'Thingamabob', 14.99, 'A strange thingamabob'),
  (5, 'Whatchamacallit', 24.99, 'A mysterious whatchamacallit');


CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    order_date DATE,
    customer_id INT,
    product_id INT,
    FOREIGN KEY (customer_id)
        REFERENCES customers (customer_id),
    FOREIGN KEY (product_id)
        REFERENCES products (product_id)
);

-- Insert some sample data into the orders table
INSERT INTO orders (order_id, order_date, customer_id, product_id)
VALUES
  (1, '2022-01-01', 1, 1),
  (2, '2022-01-02', 2, 3),
  (3, '2022-01-03', 3, 2),
  (4, '2022-01-04', 4, 4),
  (5, '2022-01-05', 5, 5),
  (6, '2022-01-06', 1, 2),
  (7, '2022-01-07', 2, 1),
  (8, '2022-01-08', 3, 5),
  (9, '2022-01-09', 4, 3),
  (10, '2022-01-10', 1, 4),
  (11, '2022-01-11', 2, 2),
  (12, '2022-01-12', 3, 3),
  (13, '2022-01-13', 4, 1),
  (14, '2022-01-14', 5, 4);
  
  
  -- q2
  
SELECT 
    c.first_name,
    c.last_name,
    COUNT(o.customer_id) AS placed_number
FROM
    customers c
        JOIN
    orders o ON c.customer_id = o.customer_id
GROUP BY o.customer_id
ORDER BY placed_number DESC;


-- q3

SELECT 
    p.product_name,
    COUNT(o.product_id) AS number_of_product,
    SUM(p.unit_price) AS total_revenue
FROM
    products p
        JOIN
    orders o ON p.product_id = o.product_id
GROUP BY o.product_id
ORDER BY total_revenue DESC;

-- q4

SELECT 
    customers.first_name,
    customers.last_name,
    customers.email,
    products.product_name
FROM
    customers
        JOIN
    orders ON customers.customer_id = orders.customer_id
        JOIN
    products ON orders.product_id = products.product_id
WHERE
    customers.customer_id IN (SELECT 
            customer_id
        FROM
            orders
        GROUP BY customer_id
        HAVING COUNT(*) > 1);

-- q5

SELECT
  customers.first_name,
  customers.last_name,
  customers.email
FROM
  customers
  INNER JOIN orders ON customers.customer_id = orders.customer_id
  INNER JOIN products ON orders.product_id = products.product_id
WHERE
  products.unit_price > 50
GROUP BY
  customers.customer_id;

  
  -- q6
  
  select p.product_name , count(o.product_id) from products p join orders o on o.product_id = p.product_id
group by p.product_id having count(o.product_id) >1 
