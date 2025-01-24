import User from "../models/userModels.js";

const addCart = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.body.userId });

    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Unable to add item" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId]) {
      cartData[req.body.itemId] -= 1;

      if (cartData[req.body.itemId] <= 0) {
        delete cartData[req.body.itemId];
      }

      await User.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Removed from Cart" });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Unable to remove item" });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let cartData = user.cartData;
    if (cartData[itemId]) {
      delete cartData[itemId];

      user.cartData = cartData;
      await user.save();

      res.json({ success: true, message: "Item removed from cart" });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Unable to remove item from cart" });
  }
};

const listCartItem = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "cart item not listed" });
  }
};

export { addCart, removeFromCart, listCartItem, removeCartItem };
