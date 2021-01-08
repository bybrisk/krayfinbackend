const express = require("express");
const router = express.Router();
const agentCtrl = require("../Controller/Agent");

router.get("/fetchAgents", agentCtrl.fetchAgents);
router.get("/fetchAgentDetails", agentCtrl.fetchAgentDetails);
router.get("/delteAgent", agentCtrl.delteAgent);

router.post("/modifyAgent", agentCtrl.modifyAgents);
router.post("/addAgent", agentCtrl.addAgent);

module.exports = router;
