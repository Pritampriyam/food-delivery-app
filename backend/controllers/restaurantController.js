const Restaurant = require('../models/Restaurant');
exports.addRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};
