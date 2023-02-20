CREATE TABLE Person(
id INT AUTO_INCREMENT PRIMARY KEY,
last_name varchar(256),
first_name varchar(256)
);

CREATE TABLE Address(
id INT AUTO_INCREMENT PRIMARY KEY,
person_id int,
city varchar(256),
state varchar(256)
);


INSERT INTO Person(last_name,first_name) VALUES ("Wang","Allen"),("Alice","Bob");
INSERT INTO Address(person_id,city,state) VALUES (2,"NewYorkCity","NewYork"),(3,"Leetcode","California");

SELECT p.first_name, p.last_name, a.city, a.state
FROM Person p LEFT JOIN Address a ON p.id = a.person_id
