const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const countriesModel = require('./api/models/countries');

const productsRoutes = require('./api/routers/products');
const ordersRoutes = require('./api/routers/orders');
const usersRoutes = require('./api/routers/users');
const products_in_ordersRoutes = require('./api/routers/products_in_orders');
const citiesRoutes = require('./api/routers/cities');
const statesRoutes = require('./api/routers/states');

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X- Requested-With, Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/users', usersRoutes);
app.use('/products_in_orders', products_in_ordersRoutes);
app.use('/cities', citiesRoutes);
app.use('/states', statesRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
});

module.exports = app;