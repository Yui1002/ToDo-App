import express from 'express'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv';
import Routes from './Routes/Routes.js';
dotenv.config()

const port = process.env.PORT 
const app = express();

// make routes
const routes = new Routes();
routes.applyRouting(app)


// (async() => {
//     const connection = await mysql.createConnection({
//         host: process.env.HOST,
//         user: process.env.USER,
//         password: process.env.PASSWORD,
//         database: process.env.DATABASE
//     });
//     try {
//         const sql = 'select * from tasks where id = 1';
//         const [rows, fields] = await connection.query('select * from tasks')
//         for(const val of rows) {
//             console.log(val.id, val.task)
//         }
//     } catch(e) {
//         console.log(e)
//     } finally {
//         connection.end()
//     }
// })()


app.listen(port, () => console.log(`Listening on port ${port}`))
