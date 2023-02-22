create database database3;

CREATE TABLE sales (
    id INT PRIMARY KEY,
    date DATE,
    customer_id INT,
    product_id INT,
    quantity INT,
    total_price DECIMAL(10,2)
);
drop table sales;
INSERT INTO sales (id, date, customer_id, product_id, quantity, total_price)
VALUES (1, '2021-05-21', 1, 10, 5, 25.00),
       (2, '2021-04-21', 3, 21, 7, 49.00),
       (3, '2021-04-21', 5, 14, 4, 20.00),
       (4, '2021-05-22', 2, 10, 2, 10.00),
       (5, '2021-05-22', 4, 21, 3, 15.00);
       
select month(date),sum(total_price) as total_month_price from sales group by month(date)  order by month(date);