const axios = require("axios");
exports.fetchClusters = async (req, res, next) => {
 try {
    let data = await axios({
        url: `https://developers.bybrisk.com/cluster/all/${req.query.bybid}`,
        method: "GET"
      });
      console.log(data.data)
      return res.status(200).send(data.data);  
 } catch (error) {
     console.log(error)
     return res.status(201).send(error)
 } 
};


exports.getDeliveryofClusters = async (req, res, next) => {
    try {
        let data = await axios({
            url: `https://developers.bybrisk.com/cluster/one/${req.query.clusterid}`,
            method: "GET"
          });
          console.log(res.data)
          return res.status(200).send(data.data);
              
    } catch (error) {
        console.log(error)
        return res.status(201).send(error)
    }
  };