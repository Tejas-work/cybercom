CREATE DATABASE bookStore;


USE bookStore;


CREATE TABLE books (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  author_id INT,
  publication_date DATE,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE authors (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE book_categories (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE book_category_mappings (
  id INT PRIMARY KEY,
  book_id INT,
  category_id INT,
  FOREIGN KEY (book_id) REFERENCES books(id),
  FOREIGN KEY (category_id) REFERENCES book_categories(id)
);

INSERT INTO authors (id, name) VALUES
  (1, 'J.K. Rowling'),
  (2, 'Stephen King'),
  (3, 'Harper Lee');

INSERT INTO books (id, title, author_id, publication_date) VALUES
  (1, 'Harry Potter and the Philosopher\'s Stone', 1, '1997-06-26'),
  (2, 'Harry Potter and the Chamber of Secrets', 1, '1998-07-02'),
  (3, 'Harry Potter and the Prisoner of Azkaban', 1, '2020-07-08'),
  (4, 'It', 2, '1986-09-15'),
  (5, 'To Kill a Mockingbird', 3, '1960-07-11');

INSERT INTO book_categories (id, name) VALUES
  (1, 'Fantasy'),
  (2, 'Horror'),
  (3, 'Classic');

INSERT INTO book_category_mappings (id, book_id, category_id) VALUES
  (1, 1, 1),
  (2, 2, 1),
  (3, 3, 1),
  (4, 4, 2),
  (5, 5, 3),
  (6, 5, 1);
  
  -- q1
  select * from books where year(publication_date )= 2020;

-- q2
SELECT 
    distinct(a.name)
FROM
    authors a
        JOIN
    books b ON b.author_id = a.id
WHERE
    b.author_id = (SELECT 
            author_id
        FROM
            books
        GROUP BY author_id
        ORDER BY COUNT(*) DESC
        LIMIT 1)
        limit 1;
        
-- q3
SELECT 
    c.name
FROM
    book_categories c
        JOIN
    book_category_mappings bcm ON bcm.category_id = c.id
WHERE
    bcm.category_id = (SELECT 
            category_id
        FROM
            book_category_mappings 
        GROUP BY category_id
        ORDER BY COUNT(*) DESC
        LIMIT 1)
        limit 1;
        
        
-- q4


SELECT a.name
FROM authors a
JOIN books b ON b.author_id = a.id
JOIN book_category_mappings bcm ON b.id = bcm.book_id
JOIN book_categories bc ON bcm.category_id = bc.id
WHERE bc.name = 'fiction'
GROUP BY a.id
HAVING COUNT(b.id) = (
  SELECT MAX(book_count)
  FROM (
    SELECT COUNT(b2.id) AS book_count
    FROM books b2
    JOIN book_category_mappings bcm2 ON b2.id = bcm2.book_id
    JOIN book_categories bc2 ON bcm2.category_id = bc2.id
    WHERE bc2.name = 'fiction'
    GROUP BY b2.author_id
  ) AS book_counts
);

-- Q5

CREATE TABLE book_borrowings (
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  customer_id INTEGER REFERENCES customers(id),
  borrow_date DATE
);

INSERT INTO book_borrowings (book_id, customer_id, borrow_date)
VALUES
  (1, 2, '2022-01-15'),
  (3, 5, '2022-02-03'),
  (2, 1, '2022-02-08'),
  (1, 3, '2022-02-14'),
  (4, 4, '2022-02-22'),
  (2, 2, '2022-02-25'),
  (1, 5, '2022-03-01');

SELECT books.title, COUNT(book_borrowings.id) as borrow_count
FROM books
JOIN book_borrowings ON books.id = book_borrowings.book_id
GROUP BY books.id
ORDER BY borrow_count DESC
LIMIT 5;


        