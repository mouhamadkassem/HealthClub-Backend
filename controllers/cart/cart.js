const Cart = require("../../model/Carts");
const User = require("../../model/User");

const addCart = async (req, res, next) => {
  console.log("Add Cart Works...");
  try {
    const cart = await Cart.create({
      user: req.body.userId,
      items: req.body.items,
      totalCost: req.body.totalCost,
    });

    const user = await User.findByIdAndUpdate(req.body.userId, {
      $push: { carts: cart?._id },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { addCart };
