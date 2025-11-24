import db from './db.js'
import express from 'express'
import cors from 'cors'
import pixQRCode from "@dicascripto/pix-qrcode-generator";
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos')
        .then((e) => res.status(200).json(e.rows))
        .catch((err) => res.status(500).json({ erro: err.stack }))
}
)

app.get('/produtos/:id', (req, res) => {
    const { id } = req.params



    db.query('SELECT * FROM produtos WHERE id = $1', [id])
        .then(result => {
            if (result.rows.length === 0) {
                return res.status(404).json({ erro: 'produto não encontrado' })
            }
            res.status(200).json(result.rows[0])
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao buscar produto', details: err.stack })
        })
})

app.post('/produtos', (req, res) => {
    const { nome, descricao, preco, categoria, cor, imagem, imagem_3d } = req.body

    if (!nome || !preco) {
        return res.status(400).json({ erro: 'Nome e preço são obrigatórios' })
    }

    const query = `
        INSERT INTO produtos (nome, descricao, preco, categoria, cor, imagem, imagem_3d)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    `

    const values = [nome, descricao, preco, categoria, cor, imagem, imagem_3d]

    db.query(query, values)
        .then((result) => {
            const newProduto = result.rows[0]
            res.status(201).json({ message: 'Produto adicionado com sucesso!', produto: newProduto })
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao adicionar produto', details: err.stack })
        })
})

app.get('/carrinho', async (req, res) => {
    const { sessao_id } = req.query;

    if (!sessao_id) {
        return res.status(400).json({ erro: "sessao_id é obrigatório" });
    }

    try {
        const result = await db.query(`
            SELECT c.*, p.nome, p.preco, p.imagem
            FROM carrinho c
            JOIN produtos p ON c.produtos_id = p.id
            WHERE c.sessao_id = $1
            ORDER BY c.id ASC
        `, [sessao_id]);

        res.json(result.rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao carregar carrinho" });
    }
});


app.post('/carrinho', async (req, res) => {
    const { produtos_id, sessao_id, quantidade } = req.body;

    try {
        // 1 — Verificar se já existe
        const check = await db.query(`
            SELECT * FROM carrinho 
            WHERE produtos_id = $1 AND sessao_id = $2
        `, [produtos_id, sessao_id]);

        if (check.rows.length > 0) {
            // Já existe → soma a quantidade
            const result = await db.query(`
                UPDATE carrinho
                SET quantidade = quantidade + $1
                WHERE produtos_id = $2 AND sessao_id = $3
                RETURNING *;
            `, [quantidade, produtos_id, sessao_id]);

            return res.json(result.rows[0]);
        }

        // 2 — Não existe → inserir
        const result = await db.query(`
            INSERT INTO carrinho (produtos_id, sessao_id, quantidade)
            VALUES ($1, $2, $3)
            RETURNING *;
        `, [produtos_id, sessao_id, quantidade]);

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao adicionar ao carrinho" });
    }
});

// Atualizar quantidade do item no carrinho
app.put('/carrinho/:id', async (req, res) => {
    const { id } = req.params;
    const { quantidade, sessao_id } = req.body;

    console.log(`PUT /carrinho/${id}`, { quantidade, sessao_id }); // Debug

    if (!sessao_id) {
        return res.status(400).json({ erro: "sessao_id é obrigatório" });
    }

    try {
        // Verificar se o item pertence à sessão
        const checkQuery = `
            SELECT * FROM carrinho 
            WHERE id = $1 AND sessao_id = $2
        `;
        const checkResult = await db.query(checkQuery, [id, sessao_id]);

        if (checkResult.rows.length === 0) {
            return res.status(404).json({ erro: "Item não encontrado nesta sessão" });
        }

        // Atualizar quantidade
        const updateQuery = `
            UPDATE carrinho 
            SET quantidade = $1 
            WHERE id = $2 AND sessao_id = $3
            RETURNING *
        `;
        const result = await db.query(updateQuery, [quantidade, id, sessao_id]);

        res.json(result.rows[0]);
    } catch (error) {
        console.error("Erro no PUT /carrinho:", error);
        res.status(500).json({ erro: "Erro ao atualizar carrinho" });
    }
});

app.delete('/carrinho/:id', async (req, res) => {
    const { id } = req.params;
    const { sessao_id } = req.query;

    console.log(`DELETE /carrinho/${id}`, { sessao_id }); // Debug

    if (!sessao_id) {
        return res.status(400).json({ erro: "sessao_id é obrigatório" });
    }

    try {
        // Verificar se o item pertence à sessão
        const checkQuery = `
            SELECT * FROM carrinho 
            WHERE id = $1 AND sessao_id = $2
        `;
        const checkResult = await db.query(checkQuery, [id, sessao_id]);

        if (checkResult.rows.length === 0) {
            return res.status(404).json({ erro: "Item não encontrado nesta sessão" });
        }

        // Deletar item
        const deleteQuery = `
            DELETE FROM carrinho 
            WHERE id = $1 AND sessao_id = $2 
            RETURNING *
        `;
        const result = await db.query(deleteQuery, [id, sessao_id]);

        res.json({
            message: 'Item removido com sucesso',
            item: result.rows[0]
        });
    } catch (error) {
        console.error("Erro no DELETE /carrinho:", error);
        res.status(500).json({ erro: "Erro ao remover item" });
    }
});

app.post("/pix", async (req, res) => {
  const { valor } = req.body;

  try {
    const qrcode = await pixQRCode.generateStaticPixQRCode({
      key: "mateuspix1322@gmail.com",
      name: "CARTIRE",
      city: "GOIANIA",
      description: "Pagamento do pedido",
      amount: Number(valor)
    });

    res.json({
      payload: qrcode.qrCodeText,
      qrCode: "data:image/png;base64," + qrcode.qrCodeImage
    });

  } catch (err) {
    console.error("Erro gerando PIX QR:", err);
    res.status(500).json({ erro: "Erro ao gerar PIX QR" });
  }
});

const server = app.listen(8000, () => {
    console.log('Servidor rodando...')
})

const shutdown = async () => {
    console.log('\nEncerrando servidor...')
    server.close()
    await db.end()
    console.log('Conexões encerradas com sucesso.')
    process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
