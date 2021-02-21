const axios = require("axios");

exports.addDelivery = async (req, res, next) => {
  axios
    .post(`https://developers.bybrisk.com/delivery/create/be`,req.body)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((e) => {
      return res.status(422).send(e)});
};
exports.getDeliveryDetails = async (req, res, next) => {

  const data = await axios({
    url: `https://developers.bybrisk.com/delivery/one/${req.query.id}`,
    method: "GET"
  });
  return res.status(200).send(data.data);

};
// exports.updatePassword = async (req, res, next) => {
//   const {accountdetails} = req.body;
//   axios.post(`https://developers.bybrisk.com/accountUpdate/password`,{accountdetails})
//   .then(response=>{
//     return res.status(200).send(response);
//   })
//   .catch(e=>res.status(422).send(e));
// };
exports.getDeliveries = async (req, res, next) => {
  let data = await axios({
    url: `https://developers.bybrisk.com/delivery/all/${req.query.bybid}`,
    method: "GET"
  });
  return res.status(200).send(data.data);
};

exports.modifyStatus = async (req, res, next) => {
const {param} = req.body
  axios
    .post(`https://developers.bybrisk.com/delivery/update/status`,req.body)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((e) => {
      return res.status(422).send(e)});
};