const product = require("../model/Model_product");
const createProduct = async (req, res, next) => {
  try {
    let payload = req.body;
    let insertProduct = new product(payload);
    await insertProduct.save();
    return res.json(insertProduct);
  } catch (err) {
    console.log(err);
    if (err && err.name === "ValidationError") {
      return res.status(400).json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    return res.status(500).json({
      error: 1,
      message: "Internal Server Error",
    });
  }
};
const get_product = async (req, res, next) => {
  try {
    const getproductId = req.params.id;
    const getByid = await product.findById(getproductId);

    if (!getByid) {
      return res.status(404).json({ error: "product not fount" });
    } else {
      return res.json(getid);
    }
  } catch (error) {
    res.status(500);
    return res.json({ error: "server error" });
  }
};
module.exports = { createProduct, get_product };
