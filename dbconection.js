const pg = require('pg');
require("dotenv").config();

let client = new pg.Client({
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: 5432,
    ssl:true
});
client.connect();

module.exports = client;
