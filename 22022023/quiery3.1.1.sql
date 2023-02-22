create database database3_1;

create table customers (
id INT AUTO_INCREMENT PRIMARY KEY,
name text,
email text,
created_at timestamp
);


insert into customers(name, email, created_at) values
 ('John Smith', 'johnsmith@gmail.com', '2022-01-01 10:00:00'),
 ('Jane Doe', 'janedoe@gmail.com', '2022-01-02 11:00:00'),
 ('Bob Johnson', 'bobjohnson@gmail.com', '2022-01-03 12:00:00'),
 ('Sarah Lee', 'sarahlee@gmail.com', '2022-01-04 13:00:00'),
 ('David Kim', 'davidkim@yahoo.com', '2022-01-05 14:00:00');
 
 
 -- Q1
 select * from customers where email like("%@gmail.com");
 
 -- Q2
 select * from customers where created_at =(select min(created_at)  from customers);
 
 -- Q3
 
 select *  from customers where date(created_at) >= '2022-01-03';
 
 -- Q4
 update customers set email = "davidkim@gmail.com" where id = 5;
 select 
 * from customers;
 
 -- Q5
 delete from customers where id=2;
 
-- Q6
select count(distinct(name)) from customers;