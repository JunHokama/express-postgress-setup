import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares

app.use(express.json());
app.use(cors);

// Routes


// Errors handling middleware


// Server running
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`)
})