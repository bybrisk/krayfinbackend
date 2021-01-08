const axios = require("axios");

exports.addDelivery = async (req, res, next) => {
  const { deliveryDetails } = req.body;
  axios
    .post(`https://developers.bybrisk.com/delivery/create`, { deliveryDetails })
    .then((response) => {
      console.log(response);
      return res.status(200).send(response.data);
    })
    .catch((e) => res.status(422).send(e));
};
// exports.updateAccount = async (req, res, next) => {
//   const {accountdetails} = req.body;
//   axios.post(`https://developers.bybrisk.com/accountUpdate`,{accountdetails})
//   .then(response=>{
//     return res.status(200).send(response);
//   })
//   .catch(e=>res.status(422).send(e));
// };
// exports.updatePassword = async (req, res, next) => {
//   const {accountdetails} = req.body;
//   axios.post(`https://developers.bybrisk.com/accountUpdate/password`,{accountdetails})
//   .then(response=>{
//     return res.status(200).send(response);
//   })
//   .catch(e=>res.status(422).send(e));
// };
