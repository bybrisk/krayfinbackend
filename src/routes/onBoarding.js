const express = require("express");
const router = express.Router();
const onBoardingctrl = require("../Controller/OnBoarding");

router.post("/createAccount", onBoardingctrl.createAccount);
router.post("/updateAccount", onBoardingctrl.updateAccount);
router.post("/updatePassword", onBoardingctrl.updatePassword);
router.post("/loginAccount", onBoardingctrl.loginAccount);
router.get("/usernameAvailable", onBoardingctrl.isUsernameAvailable);
router.get("/fetchAccountDetails", onBoardingctrl.fetchAccount);
router.get("/logout", onBoardingctrl.logOut);

module.exports = router;
