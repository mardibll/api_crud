const router = require("express").Router();
const controll_product = require("../controller/cotntroll_product");
router.post("/create/product", controll_product.createProduct);
router.get("/create/product/id", controll_product.get_product);
module.exports = router;
