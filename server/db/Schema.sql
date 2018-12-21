use Swords_and_Shields_db;


CREATE TABLE characters (
	id INT AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    attack INT,
    defense INT,
    hp INT,
    taunt VARCHAR(500),
    PRIMARY KEY(id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(15) NOT NULL,
    password BINARY(60) NOT NULL,
    PRIMARY KEY(id)
)

CREATE TABLE weapons (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    attack INT,
    defense INT,
    PRIMARY KEY(id)
)

