DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS items;




 CREATE TABLE users(
     id SERIAL PRIMARY KEY,
     first VARCHAR(255) NOT NULL CHECK (first != ''),
     last VARCHAR(255) NOT NULL CHECK (last != ''),
     email VARCHAR(255) NOT NULL UNIQUE CHECK (email != ''),
     password VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );


Create TABLE items(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL CHECK (title != ''),
    description Text,
    status VARCHAR(255) NOT NULL DEFAULT 'open' ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT REFERENCES users(id) NOT NULL
);


INSERT INTO items
    (user_id, title, status)
VALUES
    (1, 'Cook', 'open'),
    (1, 'Eat', 'open'),
    (1, 'Drink', 'open'),
    (1, 'Sleep', 'open');

