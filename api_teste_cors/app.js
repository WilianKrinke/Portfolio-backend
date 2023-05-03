var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var getDatas = require('./datas/index.js')

const app = express();
const datas = getDatas();

const corsOptionsGetDatas = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(bodyParser.json())

app.get("/",cors(corsOptionsGetDatas),(req, res) => {
  res.send(datas)
})

app.listen(8080,() => {
  console.log("Hello Node")
});

module.exports = app;
