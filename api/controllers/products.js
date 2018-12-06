const connection = require('../../dbconection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.all_products = (req, res, next) => {
    connection.query('SELECT * FROM products;', (err, rows, fields) => {
        if(!err)
            res.status(200).json(rows)
    })
};

exports.product_register = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = 'INSERT INTO products(name, price, image, description, seller) VALUES ?';
    connection.query(sql, [[[req.body.name, req.body.price, req.file.path, req.body.description, decoded.id]]], function(err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            res.status(201).json({
                message: 'Added product',
            })
        }
    })
};

exports.products_by_city = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = 'SELECT products.*\n' +
        'FROM deli_teste.products\n' +
        'INNER JOIN deli_teste.users ON products.seller = users.id AND users.city = ?;';

    connection.query(sql, decoded.city, (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                products: rows
            })
        } else {
            res.status(401).json({
                message: 'Requisition failed',
                error: err
            })
        }
    });
};

exports.update_product = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = 'UPDATE products SET name=?, price=?, image=?, description=? WHERE id=? AND seller=?';
    connection.query(sql, [req.body.name, req.body.price, req.file.path, req.body.description, parseInt(req.body.id), decoded.id], (err, rows, fields) => {
       if (err){
           return res.status(401).json({
               message: "Update failed",
               error: err
           })
       }  else {
           return res.status(201).json({
               message: 'Update successful'
           })
       }
    });
};

exports.delete_product = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = 'DELETE FROM products WHERE id = ? AND seller = ?';
    connection.query(sql, [req.params.id, decoded.id], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(201).json({
                message: 'Deleted product',
                obteve: rows
            })
        }
    });
};
