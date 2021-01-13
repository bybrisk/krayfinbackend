const axios = require("axios");

exports.addDelivery = async (req, res, next) => {
  const { article } = req.body;
console.log(req.body)
  axios
    .post(`https://developers.bybrisk.com/delivery/create/be`,article)
    .then((response) => {
      console.log(response);
      return res.status(200).send(response.data);
    })
    .catch((e) => {
      console.log(e)
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
