const mongoose = require("mongoose");
const Tbl_Product = mongoose.Schema({
  name_product: {
    type: String,
    required: [true, "nama barang kosong"],
  },
  price: {
    type: Number,
    required: [true, "harga barang kosong"],
  },
  code: {
    type: String,
  },
});
module.exports = mongoose.model("product", Tbl_Product);
