import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import getDatas from './datas/index.js';

const app = express();
const datas = getDatas();

const corsOptionsGetDatas = {
  origin: "url",
  optionsSuccessStatus: 200
}

app.use(bodyParser.json())

app.get("/",cors(corsOptionsGetDatas),(req, res) => {
  res.send(datas)
})

app.listen(8080,() => {
  console.log("Hello Node")
});

export default app;
