import db from './db.js'
import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos')
        .then((e) => res.status(200).json(e.rows ))
        .catch((err) => res.status(500).json({ erro: err.stack }))
}
)


app.post('/produtos', (req, res) => {
    const { nome, descricao, preco, categoria, cor, imagem_url } = req.body

    if (!nome || !preco) {
        return res.status(400).json({ erro: 'Nome e preço são obrigatórios' })
    } 

    const query = `
        INSERT INTO produtos (nome, descricao, preco, categoria, cor, imagem_url)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
    `

    const values = [nome, descricao, preco, categoria, cor, imagem_url]

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
