-- Q1
use practice5;
select employee_name from 
employees where salary>(select avg(salary) from employees);

--  Q2
select * from order_items;
select c.customer_name , sum(oi.quantity*p.unit_price) as revenue 
from customers c 
join orders o using(customer_id) 
join order_items oi using(order_id)
join products1 p using(product_id) 
group by customer_id order by revenue desc;

-- Q3

select * from order_items;
select c.customer_name , sum(oi.quantity*p.unit_price) as revenue 
from customers c 
join orders o using(customer_id) 
join order_items oi using(order_id)
join products1 p using(product_id) 
group by customer_id 
having revenue>10000
order by revenue desc;

--  Q4

select c.customer_name , sum(oi.quantity*p.unit_price) as revenue 
from customers c 
join orders o using(customer_id) 
join order_items oi using(order_id)
join products1 p using(product_id) 
group by customer_id 
having revenue>(select avg(oi.quantity*p.unit_price) from order_items oi join products1 p using(product_id))
order by revenue desc;
	
-- Q5

select c.customer_name , sum(oi.quantity*p.unit_price) as revenue 
from customers c 
join orders o using(customer_id) 
join order_items oi using(order_id)
join products1 p using(product_id)
where c.city in ('USA', 'Canada') 
group by customer_id 
having revenue>(select avg(oi.quantity*p.unit_price) from order_items oi join products1 p using(product_id))
order by revenue desc;

select * from customers;

-- Q6

select e.employee_name from employees e 
join orders o using(employee_id) 
join order_items oi using(order_id)
 join products1 p using(product_id) 
 join customers c using(customer_id)
 group by e.employee_id
 having sum(oi.quantity * p.unit_price)>50000;
 
-- Q7

select e.employee_name from employees e 
join orders o using(employee_id) 
join order_items oi using(order_id) 
join products1 p using(product_id) 
group by e.employee_id 
having sum(oi.quantity * p.unit_price)>(
select avg(oi.quantity * p.unit_price)
 from order_items oi 
 join products1 p using(product_id))
 order by sum(oi.quantity * p.unit_price) desc ;
 
--   Q8
select c.customer_name , sum(oi.quantity * p.unit_price) from customers c
join orders o using(customer_id)
join order_items oi using(order_id)
join products1 p using(product_id)
where c.shipping_address = '%USA%' 
group by c.customer_id
having sum(oi.quantity * p.unit_price)>5000 
order by sum(oi.quantity * p.unit_price) desc ;

-- Q9

select c.customer_name , sum(oi.quantity * p.unit_price) from customers c
join orders o using(customer_id)
join order_items oi using(order_id)
join products1 p using(product_id)
where c.shipping_address like '%USA%' 
group by c.customer_id
having sum(oi.quantity * p.unit_price)>(
select avg(oi.quantity * p.unit_price)
 from order_items oi 
 join products1 p using(product_id) )
order by sum(oi.quantity * p.unit_price) desc ;

-- Q10

select c.customer_name , sum(oi.quantity * p.unit_price) from customers c
join orders o using(customer_id)
join order_items oi using(order_id)
join products1 p using(product_id)
where c.shipping_address like '%USA%' and (select count(distinct customer_id) from orders) >=2  
group by c.customer_id
having sum(oi.quantity * p.unit_price)>(
select avg(oi.quantity * p.unit_price)
 from order_items oi 
 join products1 p using(product_id)) 
order by sum(oi.quantity * p.unit_price) desc ;

select * from orders;