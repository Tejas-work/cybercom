CREATE TABLE Cinemas(
id INT auto_increment primary key,
movie varchar(256),
description varchar(256),
rating float
);

INSERT INTO Cinemas VALUES  (1,"War","great 3D",8.9),(2,"Science","fiction",8.5),(3,"irish","boring",6.2),(4,"Ice song","Fantasy",8.6),(5,"Housecard","Interesting",9.1);

SELECT *
FROM Cinemas
WHERE description != 'boring'
ORDER BY rating DESC;