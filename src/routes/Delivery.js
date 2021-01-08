const express = require("express");
const router = express.Router();
const deliveryCtrl = require("../Controller/Delivery");

router.post("/addDelivery", deliveryCtrl.addDelivery);
// router.post("/updateAccount", deliveryCtrl.updateAccount);
// router.post("/updatePassword", deliveryCtrl.updatePassword);

module.exports = router;
