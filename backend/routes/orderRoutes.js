const express = require('express');
const router = express.Router();
const { createOrder, getOrdersByUser } = require('../controllers/orderController');
const auth = require('../middlewares/authMiddleware');

// Create order
router.post('/', auth, createOrder);
// Get orders for user
router.get('/:userId', auth, getOrdersByUser);

module.exports = router;
