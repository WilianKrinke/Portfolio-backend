var app = require('express')()
const bodyParser = require('body-parser')



app.use(bodyParser.json())

app.get("/",(req, res) => {
  res.send("Hello Server on")
})

app.listen(443,() => {
  console.log("Hello Node")
});

module.exports = app;
