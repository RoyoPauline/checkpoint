
const express = require('express')
const app = express()
const port = 3001
require("dotenv").config();
const db = require("../services/Db");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);

app.use(express.json());
