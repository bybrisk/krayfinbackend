const express = require("express");
const router = express.Router();
const clusterCtrl = require("../Controller/Cluster");

router.get("/allClusters", clusterCtrl.fetchClusters);
router.get("/getdeliveries",clusterCtrl.getDeliveryofClusters);
router.post("/createCluster", clusterCtrl.createCluster);

router.get("/timeNdistance", clusterCtrl.fetchTimeAndDistance);

module.exports = router;
