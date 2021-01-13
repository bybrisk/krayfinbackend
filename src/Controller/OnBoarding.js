const axios = require("axios");

exports.createAccount = async (req, res, next) => {
const {article} = req.body  
  await axios
    .post(`https://developers.bybrisk.com/account`, article)
    .then((response) => {
      console.log(response);
      return res.status(200).send(response.data);
    })
    .catch((e) =>{
      console.log(e);
      res.status(422).send(e)});
};
exports.updateAccount = async (req, res, next) => {
 await axios
    .post(`https://developers.bybrisk.com/accountUpdate`,req.body)
    .then((response) => {
      console.log(response);
      return res.status(200).send(response.data);
    })
    .catch((e) => {
      console.log(e)
      res.status(422).send(e)});
};
exports.updatePassword = async (req, res, next) => {
  axios
    .post(`https://developers.bybrisk.com/accountUpdate/password`,req.body)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((e) => res.status(422).send(e));
};
