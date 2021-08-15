const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    product_name: { type: String},
    product_category: { type: String},
    quantity_in_stock: { type: Number },
    amount: { type: Number},
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("Product", schema);
