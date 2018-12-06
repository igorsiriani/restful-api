const connection = require('../../dbconection');


const sql = "CREATE TABLE IF NOT EXISTS products (id SERIAL primary key, name VARCHAR(255) NOT NULL, price float NOT NULL, image VARCHAR(255)," +
    "description VARCHAR(280), created_at TIMESTAMP NOT NULL DEFAULT current_timestamp, updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp, " +
    "seller integer NOT NULL, FOREIGN KEY (seller) REFERENCES users(id) ON DELETE CASCADE)";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Created table products");
    const products_in_ordersModel = require('./products_in_orders');
});
