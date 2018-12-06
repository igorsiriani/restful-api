const connection = require('../../dbconection');


const sql = "CREATE TABLE IF NOT EXISTS products_in_orders(order integer NOT NULL, products integer NOT NULL, quantity integer NOT NULL DEFAULT '1', FOREIGN KEY (order) REFERENCES orders(id) ON DELETE CASCADE, foreign key (products) references products(id))";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Created table products_in_orders");
});
