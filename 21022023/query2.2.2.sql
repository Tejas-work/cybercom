
use practice2_2;

CREATE TABLE Courses (
    student VARCHAR(256),
    class VARCHAR(256),
    PRIMARY KEY (student , class)
);

INSERT INTO Courses VALUES ("A","Math"),("B","English"),("C","Math"),("D","Biology"),("E","Math"),("F","Computer"),("G","Math"),("H","Math"),("I","Math");

SELECT class  FROM Courses 
GROUP BY (class)
having count(student)>5;