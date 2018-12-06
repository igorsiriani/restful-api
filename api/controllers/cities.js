const connection = require('../../dbconection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.all_cities = function(req, res, next) {
    const sql = 'SELECT * FROM cities ORDER BY id';
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            return res.status(401).json({
                message: err
            })
        } else {
            res.send(rows.rows)
        }
    })
};

exports.by_state = function (req, res, next) {
    const sql = 'SELECT * FROM cities WHERE state = '+ req.params.id;
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            return res.status(401).json({
                message: err
            })
        } else {
            res.send(rows.rows)
        }
    })
};
