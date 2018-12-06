const express = require('express');
const router = express.Router();

const citiesController = require('../controllers/cities');


router.get('/', citiesController.all_cities);
router.get('/:id', citiesController.by_state);


module.exports = router;