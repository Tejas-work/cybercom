CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10,2)
);

INSERT INTO orders (id, customer_id, order_date, total_amount)
VALUES
    (1, 1, '2022-01-01', 100.00),
    (2, 1, '2022-02-01', 200.00),
    (3, 2, '2022-01-15', 150.00),
    (4, 2, '2022-02-15', 250.00),
    (5, 3, '2022-01-31', 300.00);

SELECT customer_id, SUM(total_amount) AS total_orders
FROM orders
GROUP BY customer_id
ORDER BY total_orders DESC;
