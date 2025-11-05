import db from './db.js'
import express, { urlencoded, json } from 'express'
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const server = app.listen(3000, () => {
    console.log('Conectando com servidor...')
})

app.get()

app.post('/products', async (req, res) => {
    try {
        const {name, descripton, price, category, image_url} = req.body
        // imcompleto
    } catch (err) {
        console.log(`Erro ao criar produto: ${err}`)
    }
})

app.put()

app.delete()


const shutdown = async () => {
    console.log('\nEncerrando servidor...')
    server.close()
    await end()
    console.log('Conexões encerradas com sucesso.')
    process.exit(0)
}
























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


process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)