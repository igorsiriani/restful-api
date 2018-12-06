const connection = require('../../dbconection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.products_in_order = (req, res, next) => {
    connection.query('SELECT * FROM products_in_orders WHERE order = ?;', [[req.params.id]], (err, rows, fields) => {
        if(!err){
            res.status(200).json(rows)
        } else {
            return res.status(401).json({
                message: 'Requisition failed',
                error: err
            })
        }

    })
};

exports.add_product_to_order = (req, res, next) => {
    const sql = 'INSERT INTO products_in_orders(products, order) VALUES ?';
    connection.query(sql, [[[req.body.products, req.body.order]]], function(err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            res.status(201).json({
                message: 'Added product to order',
            })
        }
    })
};

exports.update_order = (req, res, next) => {
    const sql = 'UPDATE products_in_orders SET quantity=? WHERE products=? AND order=?';
    connection.query(sql, [req.body.quantity, parseInt(req.body.products), req.body.order], (err, rows, fields) => {
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

exports.delete_product_in_order = (req, res, next) => {
    const sql = 'DELETE FROM products_in_orders WHERE products = ? AND order = ?';
    const data = [req.body.products, req.body.order];
    connection.query(sql, data, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(201).json({
                message: 'Deleted product in order',
                had: rows
            })
        }
    });
};
