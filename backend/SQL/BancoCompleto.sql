-- ===========================================================
-- BANCO DE DADOS DO PROJETO ESCOLAR
-- Criação automática do banco + tabelas + dados
-- É só abrir o pgAdmin4 e rodar esse arquivo sql
-- Aqui está todos os comando reunidos para rodar o banco de dados no seu pc.
-- ===========================================================


-- 1️⃣ Criar o banco
CREATE DATABASE projeto_loja;
 \c projeto_loja;

-- Criando as tabelas
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
	image_URL TEXT,
	3D_image VARCHAR(300)
);

CREATE TABLE size (
	id SERIAL PRIMARY KEY,
	p VARCHAR(10),
	m VARCHAR(10),
	g VARCHAR(10),
	ProductsID INT,
	FOREIGN KEY (ProductsID) REFERENCES products(ID)
);

CREATE TABLE cart_item (
	id SERIAL PRIMARY KEY,
	ProductsID INT,
	userID INT REFERENCES "user"(id),
	quantity INT,
	FOREIGN KEY (ProductsID) REFERENCES products(id),
	FOREIGN KEY (userID) REFERENCES "user"(id)
);

