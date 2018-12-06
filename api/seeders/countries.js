const connection = require('../../dbconection');


const sql = "INSERT INTO countries (id, name, abbreviation) VALUES (1, 'Brasil', 'BR')";
connection.query(sql, function (err, result) {
    if (!err) {
        console.log("Data inserted on table countries");
        const statesModel = require('./states');
    } else {
        console.log(err)
    }
});
