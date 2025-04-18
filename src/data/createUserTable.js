import pool from "../config/db.js";

const createUserTable = () => {

    const dropTableQuery = `DROP TABLE IF EXISTS users;`;

    const queryText = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW())
    `

    try {
        // pool.query(dropTableQuery)
        pool.query(queryText)
        console.log("User table created if not exists!")
    } catch (error) {
        console.log("Error to create user table: ", error)
    }
}

export default createUserTable;