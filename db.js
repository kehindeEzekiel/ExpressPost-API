const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  port: 5000,
  user: 'postgres',
  host: 'localhost',
  database: '3mttProject',
  password: '5380',
  port: 5432,
  connectionString: process.env.DATABASE_URL
});

module.exports = pool;
