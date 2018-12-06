const connection = require('../../dbconection');


const sql = " CREATE TABLE IF NOT EXISTS countries ( id SERIAL PRIMARY KEY, name varchar(60) DEFAULT NULL, " +
    "abbreviation varchar(10) DEFAULT NULL ) ;";
connection.query(sql, function (err, result) {
    if (!err) {
        console.log("Created table countries");
        const statesModel = require('./states');
    } else console.log(err)
});
