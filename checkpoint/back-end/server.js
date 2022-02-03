
const express = require('express')
const app = express()
const port = 3001
require("dotenv").config();
const db = require("./Db");
const bcrypt = require("bcrypt");
const cors = require("cors");
const session = require("express-session");


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.use(
  session({
    name: "poke",
    secret: "Y&yD%8(P[M+h43L6FNc!c!Jn++?q(&Nz",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);


app.use(express.json());

// S'Inscrire 

const register = async (req, res) => {
  const {
    email,
    password,
    pseudo,
   
  } = req.body;

  try {
    await db.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 12),
        pseudo,
      },
    });

    res.status(201).send("created");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  register,
};


app.post("/register", async (req, res) => {
  const { pseudo, email, password} = req.body
  try {
  
    const user = await db.$queryRaw`INSERT INTO User (pseudo, email, password) VALUES (${pseudo}, ${email}, ${password})`;
    res.send(user)
  }
    catch(e) {
      console.log(e);
  }
});

//Se connecter

app.post("/login", async (req, res) => {
  const {pseudo, password} = req.body
  try {
    const login = await db.$queryRaw`select * from User where pseudo = ${pseudo} and password = ${password}`
   res.status(200).send(login[0]);
  }
  catch (e) {
    console.log(e);
    res.status(500).send("Unexpected error")
  }
});

