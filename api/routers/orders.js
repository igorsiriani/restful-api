const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const ordersController = require('../controllers/orders');


router.get('/', checkAuth, ordersController.orders_by_user);
router.post('/register', checkAuth, ordersController.order_register);
router.patch('/update', checkAuth, ordersController.update_order);
router.delete('/delete/:id', checkAuth, ordersController.delete_order);


module.exports = router;