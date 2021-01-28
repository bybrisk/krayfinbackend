const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())
require("dotenv").config();
const logger = require("morgan");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");
app.enable("trust proxy");
app.use(cors({credentials: true,origin:'http://localhost:3000'}))
//https://maps.bybrisk.com
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin',req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
const routes = require('./src/routes')
app.use(logger("dev"));
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
