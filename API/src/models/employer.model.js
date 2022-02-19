const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: false,
  },
  email_id: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model("employer", employerSchema);
