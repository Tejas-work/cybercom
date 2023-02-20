CREATE TABLE Person(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(256)
);

INSERT INTO Person (email) VALUES ("john@example.com"),("bob@example.com"),("john@example.com"),("john@example.com");
INSERT INTO Person (email) VALUES ("john@example.com");
INSERT INTO Person (email) VALUES ("oooon@example.com"),("oooon@example.com");
/*get min id*/
 create table xyz(
  id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(256));

insert into xyz SELECT MIN(id),email
  FROM Person
  GROUP BY email;
  

DELETE FROM person
WHERE id NOT IN (
  SELECT id
  FROM xyz  
);


select * from Person;
 
 


