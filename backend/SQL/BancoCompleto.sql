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
INSERT INTO product (name, description, price, category, image_url) VALUES
('RELÓGIO TANK MUST DE CARTIER', 'Relógio Tank Must, modelo pequeno, movimento de quartzo de elevada autonomia. Caixa em aço, coroa de contas com um cabochão em espinela sintética, mostrador prateado, ponteiros em aço azulado em forma de espada, pulseira em aço. Dimensões da caixa: 29,5 mm X 22 mm, espessura: 6,6 mm. Resistente à água até 3 bar (aprox. 30 metros).', 28000.00, 'vestivel', 'blob:https://www.cartier.com.br/957a9ec7-20e3-4d1a-9321-dd5083426696'),
('RELÓGIO BALLON BLEU DE CARTIER', 'Relógio Ballon Bleu de Cartier, 33 mm, movimento mecânico com corda automática. Caixa em aço, coroa canelada ornada de um cabochão de espinélio sintético, mostrador opalino prateado guilhochê, algarismos romanos, ponteiros em forma de espada em aço forjado, vidro de safira, pulseira em couro de crocodilo, fivela em aço desdobrável com regulagem dupla. Dimensões da caixa: diâmetro: 33 mm, espessura: 9,96 mm. Resistente à água até 30 metros. Esta criação possui um modelo correspondente na referência WSBB0037, com pulseiras em couro de bezerro.', 44800.00, 'Vestivel', 'blob:https://www.cartier.com.br/73927530-9ae3-4cfb-a6a5-dfd076a49b3f'),
('RELÓGIO SANTOS DE CARTIER', 'Relógio Santos, modelo grande, movimento mecânico com corda automática 1847 MC. Caixa em aço, coroa heptagonal ornamentada com um espinélio sintético facetado, mostrador opalino prateado, ponteiros em aço forjado em forma de espada, vidro de safira. Pulseira em aço com sistema de ajuste “SmartLink”. Segunda pulseira em couro de bezerro com fivela desdobrável intercambiável em aço. As duas pulseiras possuem sistema intercambiável “QuickSwitch”. Largura da caixa: 39,8 mm, espessura: 9,08 mm. Resistente à água até 10 bars (~100 metros).', 51500.00, 'Vestivel', 'blob:https://www.cartier.com.br/d6863c7b-ea04-40f3-93ba-027ddd0ab9ee'),
('Headset', 'Fone de ouvido com microfone embutido e cancelamento de ruído.', 199.99, 'Áudio', 'https://exemplo.com/headset.jpg'),
('Cadeira Gamer', 'Cadeira ergonômica com apoio para lombar.', 1199.00, 'Móveis', 'https://exemplo.com/cadeira.jpg');


-- ===========================================================
-- Tudo pronto! Banco criado e populado automaticamente 🎉
-- ===========================================================