require("newrelic");
const express = require('express');
const path = require('path');
const axios = require('axios');

const servicePath = 'http:localhost:8081';

const app = express();
const port = process.env.PORT || 9000;


console.log(__dirname);
app.use('/:houseId', express.static(path.resolve(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/houseId/listedAgent/:houseId", (req, res) => {
  // let houseId = req.params.houseId;
  axios
    .get(`http://localhost:8081/houseId/listedAgent/${req.params.houseId}`)
    .then(data => {
      res.send(data.data);
    })
    .catch(e => {
      console.log(e);
    });
});

app.get("/houseId/premierAgents/:houseId", (req, res) => {

  axios
    .get(`http://localhost:8081/houseId/listedAgent/${req.params.houseId}`)
    .then(data => {
      res.send(data.data);
    })
    .catch(e => {
      console.log(e);
    });
});



app.listen(port, () => {
  console.log(`Proxy Server running at port ${port}`)
});