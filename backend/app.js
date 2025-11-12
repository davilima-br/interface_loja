import db from './db.js'
import express, { urlencoded, json } from 'express'
import cors from 'cors'
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.get('/products', (req, res) => {
        db.query('SELECT * FROM products')
        .then((e) => {
            res.status(200).json(e.rows)
        })
        .catch((err) => res.status(500).json({erro: err.stack}))
    }
)


app.post('/products', (req, res) => {
    const { name, description, price, category, image_URL } = req.body

    if (!name || !price) {
        return res.status(400).json({ erro: 'Nome e preço são obrigatórios' })
    }

    const query = `
        INSERT INTO products (name, description, price, category, image_URL)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
    `

    const values = [name, description, price, category, image_URL]

    db.query(query, values)
        .then((result) => {
            const newProduct = result.rows[0]
            res.status(201).json({ message: 'Produto adicionado com sucesso!', product: newProduct })
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao adicionar produto', details: err.stack })
        })
})


const server = app.listen(8000, () => {
    console.log('Conectando com servidor...')
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
