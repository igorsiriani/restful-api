const express = require('express');
const router = express.Router();

const statesController = require('../controllers/states');


router.get('/', statesController.all_states);


module.exports = router;