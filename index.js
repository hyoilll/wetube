//최신버전 require
import express from "express";
//const express = require("express");
//require - node module(express)를 import하는 개념
import morgan from "morgan";

const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}
const handleHome = (req, res) => res.send("shut up");

//arrow function
const handleProfile = (req, res) => res.send("You are on my profile");

//MiddleWare
{
  //req, res 뿐만 아니라 추가적인
  //커넥션을 주고 받는 함수라면 next를 통해서 권한을 줌
  // //미들웨어
  // const secondMiddleWare = (next) => console.log("second");
  // const betweenHome = (req, res, next) => {
  //   console.log("I'm between");
  //   //다음 미들웨어 함수에 제어 전달
  //   const n = next();
  //   secondMiddleWare(n);
  // };
  // app.use(betweenHome);
}

app.use(morgan("tiny"));

//server에 요청함
app.get("/", handleHome);

app.get("/profile", handleProfile);

//PORT에 접속하면, handleListening을 실행하라
app.listen(PORT, handleListening);

//로깅 - 무슨 일이 어디서 일어났는지를 기록
