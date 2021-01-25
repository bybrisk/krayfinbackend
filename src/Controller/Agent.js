const axios = require("axios");
exports.fetchAgents = async (req, res, next) => {
  let data = await axios({
    url: `https://developers.bybrisk.com/agents/all/${req.query.bybid}`,
    method: "GET"
  });
  return res.status(200).send(data.data);
};

exports.fetchAgentDetails = async (req, res, next) => {
  let data = await axios({
    url: `https://developers.bybrisk.com/agents/one/${req.query.id}`,
    method: "GET"
  });

  if (data.data !== null) {
    var exactdata = data.data;
    exactdata.Locality = exactdata.Address.split(" & ")[0];
    exactdata.City = exactdata.Address.split(" & ")[2];
    exactdata.Pin = exactdata.Address.split(" & ")[3];
    exactdata.Landmark = exactdata.Address.split(" & ")[1];
    exactdata.bybId = req.query.id;
  }
  return res.status(200).send(exactdata);
};

exports.modifyAgents = async (req, res, next) => {
  console.log(req.body)
  axios
    .post(`https://developers.bybrisk.com/agents/update`,req.body)
    .then((response) => {
      return res.status(200).send(response.data);
    }).catch(e=>console.log(e));
};

exports.delteAgent = async (req, res, next) => {
  const data = await axios({
    url: `https://developers.bybrisk.com/agents/delete/${req.query.id}`,
    method: "GET"
  });
  return res.status(200).send(data.data);
};

exports.addAgent = async (req, res, next) => {
  console.log(req.body)
  await axios.post('https://developers.bybrisk.com/agents/create',req.body)
  .then(response=>{
    return res.status(200).send(response.data);
  })
  .catch(e=>console.log(e))
};
