const connection = require('../../dbconection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.orders_by_user = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    connection.query('SELECT * FROM orders WHERE buyer = ?;', [[[decoded.id]]], (err, rows, fields) => {
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

exports.order_register = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = 'INSERT INTO orders(buyer) VALUE ?';
    connection.query(sql, [[[decoded.id]]], function(err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            res.status(201).json({
                message: 'Created order',
            })
        }
    })
};

exports.update_order = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = 'UPDATE orders SET status=? WHERE id=? AND buyer=?';
    connection.query(sql, [req.body.status, parseInt(req.body.id), decoded.id], (err, rows, fields) => {
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

exports.delete_order = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = 'DELETE products_in_orders.* ' +
        'FROM products_in_orders ' +
        'INNER JOIN orders ON orders.buyer = ? AND products_in_orders.order = ?;';
    const data = [parseInt(decoded.id), parseInt(req.params.id)];
    connection.query(sql, data, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            const new_sql = 'DELETE FROM orders WHERE buyer = ? AND id = ?';
            connection.query(new_sql, data, (err, rows, fields) => {
                if (err) {
                    console.log(err)
                } else {
                    res.status(201).json({
                        message: 'Deleted order',
                        had: rows
                    })
                }
            });
        }
    });
};
