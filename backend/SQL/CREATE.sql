CREATE TABLE "user" (
	id SERIAL PRIMARY KEY,
	login VARCHAR(255),
	password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	description TEXT,
	price DECIMAL(10,2),
	category VARCHAR(255),
	image_URL TEXT
);

CREATE TABLE size (
	id SERIAL PRIMARY KEY,
	p VARCHAR(10),
	m VARCHAR(10),
	g VARCHAR(10),
	ProductID INT,
	FOREIGN KEY (ProductID) REFERENCES Product(ID)
);

CREATE TABLE cart_item (
	id SERIAL PRIMARY KEY,
	productID INT REFERENCES product(id),
	userID INT REFERENCES "user"(id),
	quantity INT,
	FOREIGN KEY (productID) REFERENCES product(id),
	FOREIGN KEY (userID) REFERENCES "user"(id)
)