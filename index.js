// Express server
import express from 'express';
import dotenv from 'dotenv';
import { Client } from 'pg';

// initialisations
const app = express();
const PORT = process.env.PORT || 5001;

//PostgreSQL client setup
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.
    DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Connect to PostgreSQL database
await client.connect()

const result = await client.query('SELECT NOW()');
console.log(result)

await client.end();

//Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from server!');
});


//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});