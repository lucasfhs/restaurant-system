const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  images: [{ type: String }],
  available: { type: Boolean, default: true },
  options: [{ type: String }],
  extras: [{ type: String }],
});

module.exports = mongoose.model("Product", ProductSchema);
