const axios = require("axios");
axios.defaults.withCredentials = true

exports.createAccount = async (req, res, next) => {
  await axios
    .post(`https://developers.bybrisk.com/account`,req.body)
    .then((response) => {
      console.log(response);
      res.cookie('bybriskAuthorization',response.data.bybID, {
        maxAge: 12*24*60 * 60 * 1000, // 12 days
        httpOnly: true,
        sameSite: false,
        secure: true
      })
      console.log(res,"===================res")
      return res.status(200).send(response.data);
    })
    .catch((e) =>{
      console.log(e);
      res.status(401).send(e)});
};
exports.updateAccount = async (req, res, next) => {
  console.log(req.body)
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
    .catch((e) => {
      console.log(e)
      return res.status(422).send(e)});
};


exports.fetchAccount = async (req, res, next) => {
  console.log(req.query.bybId,"---------------")
  let data = await axios({
    url: `https://developers.bybrisk.com/account/${req.query.bybId}`,
    method: "GET"
  })
  console.log(data.data)
if(data.data==="" || data.data===null){
 return res.status(401).send("error in fetching data")
}
return res.status(200).json({user:data.data,bybid:req.cookies.bybriskAuthorization});


};
exports.isUsernameAvailable = async (req, res, next) => {
  console.log(req.query.username)
  let data = await axios({
    url: `https://developers.bybrisk.com/account/check/${req.query.username}`,
    method: "GET"
  });
  console.log(data)
  return res.status(200).send(data.data);
};

exports.loginAccount = async (req ,res, next) =>{
  console.log(req.body)
  let bybID;
  await axios
    .post(`https://developers.bybrisk.com/account/getBybID`,req.body)
    .then((response) => {
      console.log(response.data)
      if(response.data.bybID==="Denied"){
        return res.status(401).json({error:"Password or Email is Invalid"});  
      }
      bybID = response.data.bybID
    })
    .catch((e) => {
      console.log(e)
      return res.status(422).send(e)});
      //getting account details
      console.log(bybID)
      let data = await axios({
        url: `https://developers.bybrisk.com/account/${bybID}`,
        method: "GET"
      });
      res.cookie('bybriskAuthorization',bybID, {
        maxAge: 12*24*60 * 60 * 1000, // 12 days hour
        httpOnly: true,
        secure: true,
        sameSite: false,
      })

      console.log(data.data,"--------------data")
      return res.status(200).json({user:data.data,bybID:bybID});  
    };


exports.logOut = async (req ,res, next) =>{
      res.clearCookie('bybriskAuthorization')
return res.status(200).send("succesfull");
    }