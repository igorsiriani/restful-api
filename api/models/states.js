const connection = require('../../dbconection');


const sql = "CREATE TABLE IF NOT EXISTS states (id SERIAL PRIMARY KEY, name varchar(75) DEFAULT NULL, " +
    "fu varchar(5) DEFAULT NULL, country INTEGER, FOREIGN KEY (country) REFERENCES countries(id) ON DELETE CASCADE) ;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Created table states");
    const citiesModel = require('./cities');
});
