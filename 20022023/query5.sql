CREATE TABLE Customers(
id int auto_increment primary key,
name varchar(256)
);


CREATE TABLE Orders(
id int auto_increment primary key,
customer_id int,
foreign key (customer_id) references customers(id)
);

INSERT INTO Customers(name) VALUES ("joe"),("Henry"),("sam"),("max");
INSERT INTO Orders(customer_id) VALUES (3),(1);

SELECT * from Customers
 JOIN Orders
ON Customers.id = Orders.customer_id;

SELECT name from Customers
WHERE id NOT IN (SELECT customer_id FROM Orders);

