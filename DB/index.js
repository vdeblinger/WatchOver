require('dotenv').config();
const pg = require('pg');

const client = new pg.Client(process.env.DB_URL || (process.env.USER && process.env.PASSWORD ? {
    host: 'localhost',
    database: 'OverWatch',
    port: 5432,
    user: process.env.USER,
    password: process.env.PASSWORD,
}: 'postgres://localhost:5432/OverWatch'))

module.exports = {
    client
}