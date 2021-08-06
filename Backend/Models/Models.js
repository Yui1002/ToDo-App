import mysql from 'mysql2/promise'
import dotenv from 'dotenv';
dotenv.config()

class Models {
    async insertItems(req) {
        const connection = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });
        try {
            const sql = 'insert into tasks (task, done) values (?, ?)';
            const item = req.input;
            const completed = req.completed
            const [rows, fields] = await connection.query(sql, [item, completed])
        } catch(e) {
            console.log(e)
        } finally {
            connection.end()
        }
    }
}

export default Models;