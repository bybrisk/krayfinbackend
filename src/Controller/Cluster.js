const axios = require("axios");
exports.fetchClusters = async (req, res, next) => {
 try {
    let data = await axios({
        url: `https://developers.bybrisk.com/cluster/all/${req.query.bybid}`,
        method: "GET"
      });
      console.log(data,"data of fetch clusters")
      return res.status(200).send(data.data);  
 } catch (error) {
     console.log(error,"error of fetch clusters")
     return res.status(201).send(error)
 } 
};


exports.getDeliveryofClusters = async (req, res, next) => {
    try {
        let data = await axios({
            url: `https://developers.bybrisk.com/cluster/one/${req.query.clusterid}`,
            method: "GET"
          });
          return res.status(200).send(data.data);
              
    } catch (error) {
        console.log(error)
        return res.status(201).send(error)
    }
  };

exports.createCluster = async(req,res,next) =>{
    console.log(req.body,"----------bodyyyy")
    try{
        await axios.post('https://developers.bybrisk.com/cluster/create',req.body)
        .then(response=>{
          return res.status(200).send(response.data);
        })
        .catch(e=>{
            console.log(e,"error of catch create clusters")
           return res.status(201).send(e)})
    }
    catch (error) {
        console.log(error,"error of create clusters")
        res.status(201).send(error)
    }
}