const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 9000;

app.use(morgan('dev'));
console.log(__dirname);
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/:houseId', (req, res) => {
  // let houseId = req.params.houseId;

  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});
app.listen(port, () => {
  console.log(`Proxy Server running at port ${port}`)
});