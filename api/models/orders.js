const connection = require('../../dbconection');


const sql = "CREATE TABLE IF NOT EXISTS orders (id SERIAL primary key, status INTEGER NOT NULL DEFAULT '0', " +
    "created_at TIMESTAMP NOT NULL DEFAULT current_timestamp, updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp, " +
    "buyer INTEGER NOT NULL, FOREIGN KEY (buyer) REFERENCES users(id) ON DELETE CASCADE)";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Created table orders");
    const productsModel = require('./products');
});
