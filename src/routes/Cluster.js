const express = require("express");
const router = express.Router();
const clusterCtrl = require("../Controller/Cluster");

router.get("/allClusters", clusterCtrl.fetchClusters);
router.get("/getdeliveries",clusterCtrl.getDeliveryofClusters);
module.exports = router;
