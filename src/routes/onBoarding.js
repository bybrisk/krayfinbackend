const express = require("express");
const router = express.Router();
const onBoardingctrl = require("../Controller/OnBoarding");

router.post("/createAccount", onBoardingctrl.createAccount);
router.post("/updateAccount", onBoardingctrl.updateAccount);
router.post("/updatePassword", onBoardingctrl.updatePassword);

module.exports = router;
