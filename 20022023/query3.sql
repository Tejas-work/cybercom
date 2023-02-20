CREATE TABLE Salary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256),
    sex ENUM('m', 'f'),
    salary INT
);

insert into Salary values (1,"A","m",25000),(2,"B","f",5000),(3,"C","m",1500),(4,"D","f",70000);
SET SQL_SAFE_UPDATES = 0;
UPDATE Salary
set sex = case
WHEN sex = 'm' then 'f'
WhEN sex = 'f' then 'm'
end;

select * from Salary;