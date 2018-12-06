const connection = require('../../dbconection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.all_states = function(req, res, next) {
    const sql = 'SELECT * FROM states ORDER BY id';
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