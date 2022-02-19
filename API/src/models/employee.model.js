const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
  employee_Name: {
    type: "String",
    required: true,
  },
  employee_Pic: {
    type: "String",
    required: false,
  },
  employee_Dept: {
    type: "String",
    required: true,
  },
  employee_Gender: {
    type: "String",
    required: true,
  },
  employee_JoinDate: {
    type: "String",
    required: true,
  },
  employer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employer",
    required: true,
  },
  payment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "payment",
    required: true,
  },
});

module.exports = mongoose.model("employees", employeesSchema);
