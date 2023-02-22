CREATE TABLE books (
    id INT auto_increment PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publication_year INT NOT NULL
);

INSERT INTO books (title, author, publication_year) 
VALUES 
    ( 'To Kill a Mockingbird', 'Harper Lee', 1960),
    ( '1984', 'George Orwell', 1949),
    ( 'Pride and Prejudice', 'Jane Austen', 1813);


select title,author from books where  publication_year = (select min(publication_year) from books);