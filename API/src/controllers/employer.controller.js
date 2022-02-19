const express = require("express");

const Employer = require("../models/employer.model");

const Employee = require("../models/employee.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const employer = await Employer.findOne({ email_id: req.body.email_id });

    const employee = await Employee.find({ employer_id: employer._id });

    console.log(employee);

    res.status(201).send({ employee });
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const employer = await Employer.findOne({ email_id: req.body.email_id });

    const employee = await Employee.find({ employer_id: employer._id });

    console.log(employee);
    console.log(employer);

    // I want those employees who are employed by particular employer.
    // var id = employer._id.toString();
    // employer.findById(id, function (err, employer) {});

    // const employee = await Employee.find({ employer_id: employer._id });

    res.status(201).send({ employee });
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});

// filter by department

module.exports = router;
