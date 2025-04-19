import dotenv from 'dotenv'

dotenv.config();

import pool from './config/db.js';
import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import errorHandling from "./middlewares/error.handler.js"
import createUserTable from './data/createUserTable.js';

const app = express();
const port = process.env.PORT || 3001;

// Middlewares

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes)
app.use("/api", authRoutes)

// Errors handling middleware
app.use(errorHandling)

// Create table before starting server
createUserTable();


// Testing POSTGRES connection
app.get("/", async(req, res) => {
    const result = await pool.query("SELECT current_database()")
    res.send(`The database name is: ${result.rows[0].current_database}`);
})


// Server running
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`)
})