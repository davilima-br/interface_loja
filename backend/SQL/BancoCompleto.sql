-- ===========================================================
-- BANCO DE DADOS DO PROJETO ESCOLAR
-- Criação automática do banco + tabelas + dados
-- É só abrir o pgAdmin4 e rodar esse arquivo sql
-- Aqui está todos os comando reunidos para rodar o banco de dados no seu pc.
-- ===========================================================


-- Criando as tabelas
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2),
    categoria VARCHAR(255),
    cor VARCHAR(50), 
    imagem_url TEXT,
    "3D_imagem" VARCHAR(300)
);

CREATE TABLE carrinho_item (
    id SERIAL PRIMARY KEY,
    produtosID INT,
    userID INT,
    quantidade INT,
    FOREIGN KEY (produtosID) REFERENCES produtos(id) ON DELETE CASCADE,
    FOREIGN KEY (userID) REFERENCES "user"(id) ON DELETE CASCADE
);

INSERT INTO produtos (nome, descricao, preco, categoria, cor, imagem_url, "3D_imagem") VALUES
(
  'Grand Seiko SBGJ251',
  'O equinócio da primavera finalmente chega...',
  22000.00,
  'Casual',
  'Verde',
  'https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png',
  'https://sketchfab.com/models/f84b1108bf4c46d7b4a7a7112e73fcd0/embed?autostart=1'
),
(
  'Grand Seiko SBGE201',
  'Equipped with a GMT hand and a rotating bezel...',
  22000.00,
  'Formal',
  'Preto',
  'https://www.grandseikoboutique.co.uk/wp-content/smush-avif/2022/12/SBGE201G.png.avif',
  'https://sketchfab.com/models/cfda6a1714d249b59e3818dae535c1c2/embed?autostart=1'
),
(
  'Grand Seiko SBGA407G',
  'Na região de Shinshu, no Japão, o inverno tem sua própria beleza...',
  22000.00,
  'Casual',
  'Azul',
  'https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/21/50/SBGA407G/SBGA407G.png',
  'https://sketchfab.com/models/619e8cf06d8e428ab2d20614a5922c2a/embed?autostart=1'
),
(
  'Grand Seiko SBGJ249',
  'O alto verão se aproxima e termina a estação das chuvas...',
  22000.00,
  'Casual',
  'Azul Claro',
  'https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ249G/SBGJ249G.png',
  'https://sketchfab.com/models/c85120c21adb4be4acff04edbdb8d146/embed?autostart=1'
),
(
  'Grand Seiko SBGA211G',
  'Este clássico Spring Drive é confeccionado pelos artesãos...',
  22000.00,
  'Formal',
  'Branco',
  'https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/21/47/SBGA211G/SBGA211G.png',
  'https://sketchfab.com/models/509c6f617341412c8412e58fb966b7c9/embed?autostart=1'
),
(
  'Grand Seiko SBGM221G',
  'Este relógio clássico GMT combina o estilo que cativou...',
  22000.00,
  'Formal',
  'Marfim',
  'https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/10/SBGM221G/SBGM221G.png',
  'https://sketchfab.com/models/235db2a6287a41e3bcd58fe239313e16/embed?autostart=1'
),
(
  'Grand Seiko SBGJ235',
  'The blue dial—which features a "Mount Iwate pattern"...',
  22000.00,
  'Casual',
  'Azul',
  'https://grandseikoboutique.in/cdn/shop/products/SBGJ235G_1500x1500.png?v=1624424755',
  'https://sketchfab.com/models/b2b77d60fbe44ba8afcceb5502b41ef8/embed?autostart=1'
);
