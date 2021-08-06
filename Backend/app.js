import express from 'express'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv';
import cors from 'cors'
import Routes from './Routes/Routes.js';
dotenv.config()

const port = process.env.PORT 
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// make routes
const routes = new Routes();
routes.applyRouting(app)



app.listen(port, () => console.log(`Listening on port ${port}`))
