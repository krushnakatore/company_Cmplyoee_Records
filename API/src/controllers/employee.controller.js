const express = require("express");

const Employee = require("../models/employee.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).send({ employee });
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate({ path: "employer_id" })
      .populate({ path: "payment_id" })
      .lean()
      .exec();
    let a = employee.payment_id.amount;
    console.log([...a]);

    res.status(201).send(a);
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});

router.get("/department/:dept", async (req, res) => {
  try {
    const employee = await Employee.find({ employee_Dept: req.params.dept });

    res.status(201).send({ employee });
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});

//filter by gender

router.get("/gender/:gen", async (req, res) => {
  try {
    const employee = await Employee.find({ employee_Gender: req.params.gen });

    console.log(employee);

    // I want those employees who are employed by particular employer.
    // var id = employer._id.toString();
    // employer.findById(id, function (err, employer) {});

    // const employee = await Employee.find({ employer_id: employer._id });

    res.status(201).send({ employee });
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});

//sort by date

router.get("/date/date", async (req, res) => {
  try {
    const employee = await Employee.find().sort({
      employee_JoinDate: -1,
    });

    console.log(employee);

    // I want those employees who are employed by particular employer.
    // var id = employer._id.toString();
    // employer.findById(id, function (err, employer) {});

    // const employee = await Employee.find({ employer_id: employer._id });

    res.status(201).send({ employee });
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});
module.exports = router;
