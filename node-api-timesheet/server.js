
require('dotenv').config({path: '/home/sangeetha/Projects/node-api-timesheet/.env'});
const express = require("express");
let bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
};
app.use(cors(corsOptions));


require("./app/routes/timesheet.routes.js")(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome!!." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
