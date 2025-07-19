const express = require('express');
const router = express.Router();
const { addRestaurant, getRestaurants } = require('../controllers/restaurantController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, addRestaurant);
router.get('/', getRestaurants);

module.exports = router;
