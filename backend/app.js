import db from './db.js'
import express, { urlencoded, json } from 'express'
import cors from 'cors'
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const server = app.listen(8000, () => {
    console.log('Conectando com servidor...')
})

app.get('/products', async (req, res) => {
        db.query('SELECT * FROM products')
        .then((e) => {
            res.status(200).json(e.rows)
        })
        .catch((err) => res.status(500).json({erro: err.stack}))
    }
)

const shutdown = async () => {
    console.log('\nEncerrando servidor...')
    server.close()
    console.log('Conexões encerradas com sucesso.')
    process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

















// POST → criar novo produto
//export async function POST(request) {
//  try {
//    const body = await request.json();
//    const { name, description, price, image_url, category } = body;
//
//    await pool.query(
//      "INSERT INTO products (name, description, price, image_url, category) VALUES ($1, $2, $3, $4, $5)",
//      [name, description, price, image_url, category]
//    );
