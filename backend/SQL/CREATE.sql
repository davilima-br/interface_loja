CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2),
    categoria VARCHAR(255),
    cor VARCHAR(50), 
    imagem TEXT,
    imagem_3d VARCHAR(300)
);

CREATE TABLE carrinho (
    id SERIAL PRIMARY KEY,
    produtos_id INT,
    sessao_id VARCHAR(255) NOT NULL,
    quantidade INT,
    FOREIGN KEY (produtos_id) REFERENCES produtos(id) ON DELETE CASCADE
);