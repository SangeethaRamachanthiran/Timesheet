require("dotenv").config({path: '/home/sangeetha/Projects/Timesheet/node-api-timesheet/.env'});
const express = require("express");
const app = express();
const userRouter = require("./app/routes/users.routes.js");

app.use(express.json());

app.use("/api/users", userRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});