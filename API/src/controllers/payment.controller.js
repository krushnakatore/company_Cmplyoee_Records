const express = require("express");

const Payment = require("../models/payment.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const payment = await Payment.create(req.body);

    res.status(201).send({ payment });
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const payment = await Payment.find().lean().exec();

    res.status(201).send({ payment });
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});
module.exports = router;
