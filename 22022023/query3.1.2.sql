create database database3_2;


CREATE TABLE inventory (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    quantity INT,
    price DECIMAL(10 , 2 ),
    category VARCHAR(50)
);


INSERT INTO inventory (id, name, quantity, price, category)
VALUES (1, 'Pencils', 10, 3.50, 'Stationery'),
       (2, 'Stapler', 5, 5.50, 'Stationery'),
       (3, 'Laptop', 2, 700.00, 'Electronics'),
       (4, 'Mouse', 10, 15.00, 'Electronics'),
       (5, 'Chair', 10, 50.00, 'Furniture');
       
select name,price from inventory where quantity >0 and category = "Electronics" order by price desc;