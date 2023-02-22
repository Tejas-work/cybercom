use database3;
CREATE TABLE blog_posts (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    body TEXT,
    author_id INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
CREATE TABLE blog_comments (
    id INT PRIMARY KEY,
    post_id INT,
    body TEXT,
    author_id INT,
    created_at TIMESTAMP
);

INSERT INTO blog_posts (id, title, body, author_id, created_at, updated_at)VALUES (1, 'My First Post!', 'This is my first post!', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),(2, 'My Second Post!', 'This is my second post!', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), (3, 'My Third Post!', 'This is my third post!', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO blog_comments (id, post_id, body, author_id, created_at)
VALUES (1, 1, 'This is my first comment!', 2, CURRENT_TIMESTAMP),(2, 1, 'This is my second comment!', 3, CURRENT_TIMESTAMP),(3, 2, 'This is my third comment!', 2, CURRENT_TIMESTAMP),(4, 3, 'This is my fourth comment!', 3, CURRENT_TIMESTAMP);

INSERT INTO blog_posts (id, title, body, author_id, created_at, updated_at)
VALUES (4, 'My Fourth Post!', 'This is my fourth post!', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO blog_posts (id, title, body, author_id, created_at, updated_at)
VALUES (5, 'My Fifth Post!', 'This is my fifth post!', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO blog_posts (id, title, body, author_id, created_at, updated_at)
VALUES (6, 'My Sixth Post!', 'This is my sixth post!', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO blog_comments (id, post_id, body, author_id, created_at)
VALUES (9, 4, 'This is my fourth comment!', 3, CURRENT_TIMESTAMP);
INSERT INTO blog_comments (id, post_id, body
, author_id, created_at)
VALUES (5, 4, 'This is my fifth comment!', 2, CURRENT_TIMESTAMP);
INSERT INTO blog_comments (id, post_id, body
, author_id, created_at)
VALUES (6, 5, 'This is my sixth comment!', 2, CURRENT_TIMESTAMP);
INSERT INTO blog_comments (id, post_id, body
, author_id, created_at)
VALUES (7, 6, 'This is my seventh comment!', 3, CURRENT_TIMESTAMP);


set sql_mode=0;
select p.title,p.body,count(c.body)  from blog_posts p join blog_comments c on p.id = c.post_id GROUP BY p.title ORDER BY p.created_at DESC limit 5;
