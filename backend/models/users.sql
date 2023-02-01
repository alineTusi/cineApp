CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    gender VARCHAR(28) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username VARCHAR(28) NOT NULL UNIQUE,
    phonenumber VARCHAR(28) NOT NULL,
    email VARCHAR(255) NOT NULL,
    repeatemail VARCHAR(255) NOT NULL,
    passhash VARCHAR NOT NULL,
    passhashagain VARCHAR NOT NULL,
    dateofbirth VARCHAR(28) NOT NULL,


);


INSERT INTO users(gender, firstname, lastname, username, phonenumber, email, repeatemail, passhash, passhashagain, dateofbirth) values($1. $2, $3, $4, $5, $6, $7, $8)

