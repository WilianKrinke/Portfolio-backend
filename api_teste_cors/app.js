var app = require('express')()

app.get("/",(req, res) => {
  res.send("Hello Server on")
})

app.listen(443,() => {
  console.log("Hello Node")
});
