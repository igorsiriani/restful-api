const connection = require('../../dbconection');


const sql = "CREATE TABLE IF NOT EXISTS users (id SERIAL primary key , name VARCHAR(255) NOT NULL, email varchar(255) NOT NULL, password VARCHAR(255) not null," +
    "birth timestamp not null, image varchar(255), description VARCHAR(280), created_at TIMESTAMP NOT NULL DEFAULT current_timestamp, updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp," +
    "city INTEGER NOT NULL, FOREIGN KEY (city) REFERENCES cities(id))";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Created table users");
    const ordersModel = require('./orders');
});
