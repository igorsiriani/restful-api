const connection = require('../../dbconection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();


exports.all_users = function(req, res, next) {
    const sql = 'SELECT * FROM users ORDER BY id DESC';
    connection.query(sql, function(err, rows, fields) {
        //if(err) throw err
        if (err) {
            return res.status(401).json({
                message: err
            })
        } else {
            res.send(rows)
        }
    })
};

exports.user_register = function(req, res, next) {
    connection.query('SELECT * FROM  users WHERE email = ?', req.body.email, (err, rows, fields) => {
        if (rows.length > 0) {
            res.status(409).json({
                message: 'User already exists'
            })
        } else {
            const sql = 'INSERT INTO users(name, email, password, birth, city) VALUES ?';
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    })
                } else {
                    const data = [[req.body.name, req.body.email, hash, req.body.birth, req.file.path, req.body.description, req.body.city]];
                    connection.query(sql, [data], function(err, rows, fields) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.status(201).json({
                                message: 'Added user',
                            })
                        }
                    })
                }
            });
        }
    });
};

exports.update_user = function(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = "UPDATE users SET name=?, email=?, password=?, birth=?, image=?, description=?, city=? WHERE id=?;";
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        } else {
            connection.query(sql, [req.body.name, req.body.email, hash, req.body.birth, req.file.path, req.body.description, req.body.city, decoded.id], function (err, result) {
                if (err) throw err;
                return res.status(200).json({
                    message: 'Updated user'
                })
            });
        }
    });
};

exports.authenticate_user = (req, res, next) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    connection.query(sql, req.body.email, (err, rows, fields) => {
        if (rows.length < 1) {
            return res.status(401).json({
                message: 'Authentication failed'
            })
        }
        bcrypt.compare(req.body.password, rows[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: 'Authentication failed'
                })
            }
            if (result) {
                const token = jwt.sign({
                    id: rows[0].id,
                    email: rows[0].email,
                    city: rows[0].city
                }, process.env.JWT_KEY, {
                    expiresIn: "1d"
                });
                return res.status(200).json({
                    message: 'Authentication successful',
                    token: token
                })
            }
            res.status(401).json({
                message: 'Authentication failed'
            })
        })
    })
};

exports.delete_user = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);
    const sql = 'DELETE FROM users WHERE id = ?';
    connection.query(sql, decoded.id, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: 'Deleted user',
            })
        }
    });
};
