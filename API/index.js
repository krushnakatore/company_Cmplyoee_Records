const express = require("express");

const app = express();

app.use(express.json());

const connect = require("./src/configs/db");

const employeeController = require("./src/controllers/employee.controller");
const employerController = require("./src/controllers/employer.controller");
const paymentController = require("./src/controllers//payment.controller");

app.use("/employer", employerController);
app.use("/employee", employeeController);
app.use("/payment", paymentController);

app.listen(8888, async function () {
  await connect();
  console.log("server on port 8888");
});
