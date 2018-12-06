const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const products_in_ordersController = require('../controllers/products_in_orders');


router.get('/:id', checkAuth, products_in_ordersController.products_in_order);
router.post('/register', checkAuth, products_in_ordersController.add_product_to_order);
router.patch('/update', checkAuth, products_in_ordersController.update_order);
router.delete('/delete', checkAuth, products_in_ordersController.delete_product_in_order);


module.exports = router;