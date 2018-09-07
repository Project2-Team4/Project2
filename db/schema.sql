DROP DATABASE IF EXISTS listings_db;
CREATE DATABASE listings_db;
USE listings_db;

CREATE TABLE listings
(
  	id INT(10) AUTO_INCREMENT NOT NULL,
	listing_name VARCHAR(255) NOT NULL,
	listing_description VARCHAR(255) NOT NULL,
	listing_rate VARCHAR(255) NOT NULL,
	listing_location VARCHAR(255) NOT NULL,
	listing_date VARCHAR(255) NOT NULL,
  	PRIMARY KEY(id)
);