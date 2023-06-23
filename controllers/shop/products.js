const Product = require("../../model/Product");

const fetchProducts = async (req, res, next) => {
  try {
    const products = await Product.aggregate([
      { $match: { category: req.body.type } },
      { $project: { category: 0 } },
      { $limit: 8 },
    ]);
    // console.log(products);
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const fetchProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    res.json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = { fetchProducts, fetchProduct };
