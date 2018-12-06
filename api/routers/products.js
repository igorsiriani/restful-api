const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + '.png');
    }
});
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

const productsController = require('../controllers/products');


router.get('/', checkAuth, productsController.products_by_city);
router.post('/register', checkAuth, upload.single('image'), productsController.product_register);
router.patch('/update', checkAuth, upload.single('image'), productsController.update_product);
router.delete('/delete/:id', checkAuth, productsController.delete_product);


module.exports = router;
