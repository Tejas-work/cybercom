
use look;

CREATE TABLE product
(
product_id INT AUTO_INCREMENT,
product varchar(256),
product_name varchar(256),
primary key (product_id)
);

CREATE TABLE categories
(
category_id INT AUTO_INCREMENT,
category varchar(256),
category_value varchar(256),
PRIMARY KEY (category_id)
);



CREATE TABLE product_categories
(
product_id INT,
category_id INT
);

ALTER TABLE product_categories
ADD FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE;

ALTER TABLE product_categories
ADD FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE;

INSERT INTO product(product,product_name) VALUES ("phone","iphone 14");
INSERT INTO categories(category,category_value) VALUES ("color","black");
INSERT INTO categories(category,category_value) VALUES ("ram","8 gb");
INSERT INTO product_categories(product_id,category_id) VALUES (1,1);
INSERT INTO product_categories(product_id,category_id) VALUES (1,2);





SELECT product.product_name ,categories.category,categories.category_value
FROM product
JOIN product_categories
ON product.product_id = product_categories.product_id
JOIN categories
ON categories.category_id  = product_categories.category_id ;


 