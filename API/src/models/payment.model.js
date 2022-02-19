const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  month: {
    type: "String",
    required: true,
  },
  year: {
    type: "String",
    required: true,
  },
  amount: {
    type: "Array",
    required: true,
  },
});

module.exports = mongoose.model("payment", paymentSchema);
