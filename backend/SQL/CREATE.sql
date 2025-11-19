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
    "3D_image" VARCHAR(300)
);

CREATE TABLE carrinho_item (
    id SERIAL PRIMARY KEY,
    produtosID INT,
    userID INT,
    quantidade INT,
    FOREIGN KEY (produtosID) REFERENCES produtos(id) ON DELETE CASCADE,
    FOREIGN KEY (userID) REFERENCES "user"(id) ON DELETE CASCADE
);