import { end } from '../../../db' 
import express, { urlencoded, json } from 'express' 
const app = express() 

app.use(urlencoded({ extended: true })) 
app.use(json()) 

const server = app.listen(3000, () => { 
 console.log('Conectando com servidor...') 
}) 

const shutdown = async () => { 
 console.log('\nEncerrando servidor...') 
 server.close() 
 await end() 
 console.log('Conexões encerradas com sucesso.')
 process.exit(0) 
} 



























// GET → listar todos os produtos
//export async function GET() {
//  try {
//    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
//    return NextResponse.json(result.rows, { status: 200 });
//  } catch (err) {
//    console.error(err);
//    return NextResponse.json({ error: "Erro ao listar produtos" }, { status: 500 });
//  }
//}
//
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
//
//    return NextResponse.json({ message: "Produto criado com sucesso!" }, { status: 201 });
//  } catch (err) {
//    console.error(err);
//    return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 });
//  }
//}
//


process.on('SIGINT', shutdown) 
process.on('SIGTERM', shutdown)