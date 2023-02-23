-- Create the Cars table
CREATE TABLE Cars (
    CarID INT PRIMARY KEY,
    Brand VARCHAR(50),
    Model VARCHAR(50),
    Year INT,
    Mileage INT,
    Price DECIMAL(10, 2),
    Available BIT
);

-- Create the Customers table
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    PhoneNumber VARCHAR(20)
);

-- Create the Sales table
CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    CarID INT ,
    CustomerID INT ,
    SaleDate DATE,
    SalePrice DECIMAL(10, 2),
    FOREIGN KEY (CarID) REFERENCES Cars(CarID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Insert data into the Cars table
INSERT INTO Cars (CarID, Brand, Model, Year, Mileage, Price, Available)
VALUES (1, 'Toyota', 'Corolla', 2018, 50000, 15000.00, 1),
       (2, 'Honda', 'Civic', 2020, 20000, 18000.00, 0),
       (3, 'Chevrolet', 'Malibu', 2019, 35000, 17000.00, 1),
       (4, 'Ford', 'Mustang', 2021, 1000, 35000.00, 1),
       (5, 'BMW', 'X5', 2020, 15000, 45000.00, 0),
       (6, 'Mercedes-Benz', 'C-Class', 2017, 40000, 30000.00, 1),
       (7, 'Audi', 'Q7', 2019, 25000, 50000.00, 1),
       (8, 'Lexus', 'RX 350', 2021, 5000, 50000.00, 0),
       (9, 'Nissan', 'Altima', 2020, 18000, 20000.00, 1),
       (10, 'Hyundai', 'Sonata', 2018, 30000, 15000.00, 0),
       (11, 'Kia', 'Sportage', 2019, 20000, 18000.00, 1),
       (12, 'Volvo', 'XC90', 2020, 10000, 60000.00, 0),
       (13, 'Mazda', 'CX-5', 2018, 25000, 25000.00, 1),
       (14, 'Subaru', 'Impreza', 2019, 15000, 20000.00, 0),
       (15, 'Tesla', 'Model S', 2021, 5000, 80000.00, 1);

-- Insert data into the Customers table
INSERT INTO Customers (CustomerID, FirstName, LastName, Email, PhoneNumber)
VALUES (1, 'John', 'Doe', 'johndoe@example.com', '555-1234'),
       (2, 'Jane', 'Doe', 'janedoe@example.com', '555-5678'),
       (3, 'Bob', 'Smith', 'bobsmith@example.com', '555-2468'),
       (4, 'Alice', 'Jones', 'alicejones@example.com', '555-3698'),
       (5, 'Mike', 'Brown', 'mikebrown@example.com', '555-7890'),
       (6, 'Karen', 'Davis', 'karendavis@example.com', '555-1357'),
       (7, 'David', 'Johnson', 'davidjohnson@example.com', '555-8023'),
       (8, 'Susan', 'Wilson', 'susanwilson@example.com', '555-9753'),
       (9, 'Mark', 'Taylor', 'marktaylor@example.com', '555-6248'),
       (10, 'Emily', 'Lee', 'emilylee@example.com', '555-4312');
       
-- Insert data into the Sales table
INSERT INTO Sales (SaleID, CarID, CustomerID, SaleDate, SalePrice)
VALUES (1, 1, 3, '2022-02-01', 14000.00),
       (2, 2, 5, '2022-01-25', 17000.00),
       (3, 4, 2, '2022-02-02', 32000.00),
       (4, 6, 2, '2022-01-27', 27000.00),
       (5, 8, 1, '2022-02-05', 48000.00),
       (6, 10, 7, '2022-02-03', 12000.00),
       (7, 12, 8, '2022-01-30', 55000.00),
       (8, 13, 1, '2022-02-01', 24000.00),
       (9, 14, 4, '2022-02-04', 18000.00),
       (10, 15, 6, '2022-02-06', 75000.00);

       


-- Q1
SELECT 
    *
FROM
    Cars
ORDER BY Price
LIMIT 10;


-- Q2
SELECT 
    AVG(Price)
FROM
    Cars;

-- Q3
SELECT 
    c.CustomerID,
    c.FirstName,
    c.LastName,
    c.Email,
    c.PhoneNumber,
    COUNT(s.CarID)
FROM
    Customers c
        JOIN
    Sales s ON c.CustomerID = s.CustomerID
GROUP BY s.CustomerID;


-- Q4

SELECT 
    *
FROM
    Customers
WHERE
    CustomerID NOT IN (SELECT 
            CustomerID
        FROM
            Sales);
   
-- Q5
INSERT INTO Cars (CarID,Brand, Model, Year, Mileage, Price, Available)
VALUES (16,'Toyota', 'Corolla', 2022, 0, 20000, 1);


-- Q6
SET SQL_SAFE_UPDATES=0;
UPDATE Cars
SET Price = Price * 1.1;

-- Q7

DELETE FROM Sales
WHERE SaleDate < '2022-01-01';

select * from Sales;




