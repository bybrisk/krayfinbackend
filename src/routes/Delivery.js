const express = require("express");
const router = express.Router();
const deliveryCtrl = require("../Controller/Delivery");

router.post("/addDelivery", deliveryCtrl.addDelivery);
router.get("/deliveryDetail", deliveryCtrl.getDeliveryDetails);
router.get("/fetchDeliveries", deliveryCtrl.getDeliveries);
router.post("/modifyStatus", deliveryCtrl.modifyStatus);
router.post("/addDeliveryWithGeocode", deliveryCtrl.addDeliveryWithGeocode);

// router.post("/updateAccount", deliveryCtrl.updateAccount);
// router.post("/updatePassword", deliveryCtrl.updatePassword);

module.exports = router;
