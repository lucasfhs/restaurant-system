const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  delivererId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "in-transit", "delivered", "failed"],
    default: "pending",
  },
  deliveryDate: { type: Date, default: null },
  estimatedDeliveryTime: { type: Number }, // tempo estimado em minutos
  address: { type: String, required: true },
  trackingLink: { type: String, default: null }, // Link de rastreamento (ex: Google Maps)
});

module.exports = mongoose.model("Delivery", deliverySchema);
