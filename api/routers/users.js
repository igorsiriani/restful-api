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
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const usersController = require('../controllers/users');


// router.get('/', usersController.all_users);
router.patch('/update', checkAuth, upload.single('image'), usersController.update_user);
router.post('/register', usersController.user_register);
router.post(('/login'), usersController.authenticate_user);
router.delete('/delete', checkAuth, usersController.delete_user);


module.exports = router;
