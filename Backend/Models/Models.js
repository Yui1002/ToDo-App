import mysql from 'mysql2/promise'
import dotenv from 'dotenv';
dotenv.config()

const db_setting = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

class Models {
    async checkUnique(req) {
        const connection = await mysql.createConnection(db_setting);
        try {
            const sql = 'select count(*) as count from tasks where value=?';
            const item = req.input;
            const [rows, fields] = await connection.query(sql, [item])
            return rows[0].count
        } catch(e) {
            console.log(e)
        } finally {
            connection.end()
        }
    }
    async insertItems(req) {
        const connection = await mysql.createConnection(db_setting);
        try {
            const sql = 'insert into tasks (value, completed) values (?, ?)';
            const item = req.input;
            const completed = req.completed
            const [rows, fields] = await connection.query(sql, [item, completed])
        } catch(e) {
            console.log(e)
        } finally {
            connection.end()
        }
    }

    async getItemsUserDone(req) {
        const connection = await mysql.createConnection(db_setting);
        try {
            const val = req.input
            const sql = 'update tasks set completed=1 where value=?';
            const [rows, fields] = await connection.query(sql, [val])
        } catch(e) {
            console.log(e)
        } finally {
            connection.end()
        }
    }

    async getAllItems() {
        const connection = await mysql.createConnection(db_setting);
        try {
            const sql = 'select * from tasks';
            const [rows, fields] = await connection.query(sql)
            console.log(rows)
            return rows
        } catch(e) {
            console.log(e)
        } finally {
            connection.end()
        }
    }

    async deleteItems() {
        const connection = await mysql.createConnection(db_setting);
        try {
            const sql = 'delete from tasks';
            const [rows, fields] = await connection.query(sql)
        } catch(e) {
            console.log(e)
        } finally {
            connection.end()
        }
    }
}

export default Models;