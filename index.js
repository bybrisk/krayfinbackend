const express = require("express");
const app = express();
require("dotenv").config();
const logger = require("morgan");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");

const routes = require('./src/routes')
app.use(logger("dev"));
app.use(cors())
//module.exports= router = express.Router(); tried for global but dont know

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes.Agent);

app.use("/onboarding", routes.onBoarding);
app.use("/agents", routes.Agent);
app.use("/delivery", routes.Delivery);


app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
