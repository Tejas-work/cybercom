create database database4;
use database4;

-- Create the users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Insert data into the users table
INSERT INTO users (id, name, email, password, created_at, updated_at)
VALUES
  (1, 'Alice', 'alice@example.com', 'password1', '2022-01-01 10:00:00', '2022-01-01 10:00:00'),
  (2, 'Bob', 'bob@example.com', 'password2', '2022-01-02 11:00:00', '2022-01-02 11:00:00'),
  (3, 'Charlie', 'charlie@example.com', 'password3', '2022-01-03 12:00:00', '2022-01-03 12:00:00'),
  (4, 'David', 'david@example.com', 'password4', '2022-01-04 13:00:00', '2022-01-04 13:00:00'),
  (5, 'Eve', 'eve@example.com', 'password5', '2022-01-05 14:00:00', '2022-01-05 14:00:00');

-- Create the orders table
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    amount FLOAT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Insert data into the orders table
INSERT INTO orders (id, user_id, amount, created_at, updated_at)
VALUES
  (1, 1, 10.50, '2022-01-01 10:00:00', '2022-01-01 10:00:00'),
  (2, 2, 200.75, '2022-01-02 11:00:00', '2022-01-02 11:00:00'),
  (3, 1, 150.00, '2022-01-03 12:00:00', '2022-01-03 12:00:00'),
  (4, 3, 5.25, '2022-01-04 13:00:00', '2022-01-04 13:00:00'),
  (5, 4, 30.00, '2022-01-05 14:00:00', '2022-01-05 14:00:00'),
  (6, 2, 120.50, '2022-01-06 15:00:00', '2022-01-06 15:00:00'),
  (7, 1, 7.00, '2022-01-07 16:00:00', '2022-01-07 16:00:00');
  
  
  -- Q1
  
  INSERT INTO users (id,name, email, password, created_at, updated_at) 
VALUES (6,'John Doe', 'john.doe@example.com', '123456', NOW(), NOW());

-- Q2

SELECT 
    users.name, users.email
FROM
    users
        JOIN
    orders ON users.id = orders.user_id
GROUP BY users.id
HAVING COUNT(orders.id) >= 1;


-- Q3

SELECT 
    users.name, SUM(orders.amount) AS total_amount
FROM
    users
        JOIN
    orders ON users.id = orders.user_id
GROUP BY users.id
ORDER BY total_amount DESC;

-- Q4

SELECT 
    email
FROM
    users
WHERE
    id = (SELECT 
            user_id
        FROM
            orders
        GROUP BY user_id
        ORDER BY COUNT(*) DESC
        LIMIT 1);

-- Q5
SELECT 
    orders.user_id, SUM(orders.amount) AS total_amount
FROM
    orders
        JOIN
    users ON users.id = orders.user_id
GROUP BY orders.user_id
HAVING SUM(orders.amount) > 100;




-- Q6
SELECT 
    COUNT(*) AS num_users_without_orders
FROM
    users
        LEFT JOIN
    orders ON users.id = orders.user_id
WHERE
    orders.id IS NULL;


-- Q7

UPDATE users 
SET 
    email = 'jane.doe@example.com'
WHERE
    id = 1;

-- Q8
DELETE FROM orders 
WHERE
    user_id IN (SELECT 
        id
    FROM
        users
    
    WHERE
        email LIKE '%test%');

-- Q9

SELECT 
    DATE(orders.created_at) AS order_day,
    SUM(orders.amount) AS total_amount
FROM
    orders
WHERE
    DAYOFWEEK(orders.created_at) BETWEEN 2 AND 7
GROUP BY order_day;

-- Q10
SELECT 
    users.id, users.email
FROM
    users
        JOIN
    orders ON users.id = orders.user_id
WHERE
    YEAR(orders.created_at) = YEAR(CURRENT_DATE())
        AND users.email LIKE '%@example.com';


