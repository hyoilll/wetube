const express = require("express");
//require - node module(express)를 include하는 개념
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("shut up");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

//server에 요청
app.get("/", handleHome);

app.get("/profile", handleProfile);

//PORT에 접속하면, handleListening을 실행하라
app.listen(PORT, handleListening);
