CREATE TABLE Employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50) ,
    phone_number VARCHAR(20)
);

CREATE TABLE LeaveApplication (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    employee_id INT,
    start_date DATE,
    end_date DATE,
    leave_type VARCHAR(20),
    reason VARCHAR(200),
     status VARCHAR(20),
    FOREIGN KEY (id) REFERENCES employees(employee_id)
);



INSERT INTO employees ( name, email, phone_number)
VALUES ('John Doe', 'johndoe@example.com', '123-456-7890');


INSERT INTO LeaveApplication (employee_id, start_date, end_date, leave_type, reason,status)
VALUES (1, '2023-03-01', '2023-03-03', 'Vacation', 'Taking a short trip', 'pending');

SELECT e.name, l.start_date, l.end_date, l.leave_type, l.reason, l.status
FROM employees e
INNER JOIN LeaveApplication l
ON e.employee_id = l.employee_id;




