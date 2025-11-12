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
	image_URL TEXT
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

-- Inserindo valores nas tebelas
--teste
INSERT INTO products (name, description, price, category, image_url) VALUES
('Mouse Gamer', 'Mouse com sensor óptico e luz RGB.', 129.90, 'Periféricos', 'https://exemplo.com/mouse.jpg'),
('Teclado Mecânico', 'Teclado com switches azuis e iluminação LED.', 249.50, 'Periféricos', 'https://exemplo.com/teclado.jpg'),
('Monitor 24"', 'Monitor Full HD com painel IPS.', 899.00, 'Monitores', 'https://exemplo.com/monitor.jpg'),
('Headset', 'Fone de ouvido com microfone embutido e cancelamento de ruído.', 199.99, 'Áudio', 'https://exemplo.com/headset.jpg'),
('Cadeira Gamer', 'Cadeira ergonômica com apoio para lombar.', 1199.00, 'Móveis', 'https://exemplo.com/cadeira.jpg');


-- ===========================================================
-- Tudo pronto! Banco criado e populado automaticamente 🎉
-- ===========================================================