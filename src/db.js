require('dotenv').config({ path: __dirname + "/.env" });  //esto indica que debe de tomar el archivo .env del dirname
const { Pool } = require('pg');

const dbConfig = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
};

const pool = new Pool(dbConfig);

module.exports = pool;

