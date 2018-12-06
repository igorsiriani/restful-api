const connection = require('../../dbconection');


const sql = "CREATE TABLE IF NOT EXISTS cities (id SERIAL PRIMARY KEY, name varchar(120) DEFAULT NULL, state INTEGER NOT NULL," +
    "FOREIGN KEY (state) REFERENCES states(id) ON DELETE CASCADE)";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Created table cities");
    const usersModel = require('./users');
});


