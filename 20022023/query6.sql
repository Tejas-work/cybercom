CREATE TABLE example(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(256)
);
select * from example;


CREATE INDEX email_index
ON example (email);
