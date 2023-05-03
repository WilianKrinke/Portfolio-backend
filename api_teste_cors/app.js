var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var getDatas = require('./datas/index.js')

const app = express();
const datas = getDatas();

var whitelist = ['http://localhost:3000', 'https://teste-chi-red.vercel.app']

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(bodyParser.json())

app.get("/",cors(corsOptions),(req, res) => {
  res.send(datas)
})

app.listen(8080,() => {
  console.log("Hello Node")
});

module.exports = app;
