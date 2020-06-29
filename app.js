import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routers from "./routers";
import { localsMiddleware } from "./middleware";

const app = express();

//application이 더 안전하도록 만듬
app.use(helmet());
//template
app.set("view engine", "pug");
//kookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어
app.use(cookieParser());
//사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어 / requsest에서 form, json의 정보를 검사
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//application에서 발생하는 모든 일들을 기록함 (log)
app.use(morgan("dev"));
//locals middle ware - local변수를 global변수로 사용하도록 해주는 미들웨어
app.use(localsMiddleware);

app.use(routers.home, globalRouter);
app.use(routers.users, userRouter);
app.use(routers.videos, videoRouter);

export default app;

// //최신버전 require
// //const express = require("express");
// //require - node module(express)를 import하는 개념
// import express from "express";

// //로깅 - 무슨 일이 어디서 일어났는지를 기록
// //morgan - 로깅의 일을 도와주는 미들웨어 (로그 기록)
// import morgan from "morgan";

// //helmet - 보안을 위한 미들웨어
// //[참고] https://7stocks.tistory.com/94
// import helmet from "helmet";

// //body-parser - body로 부터 정보를 가져오는 미들웨어
// //[참고] https://medium.com/@chullino/1%EB%B6%84-%ED%8C%A8%ED%82%A4%EC%A7%80-%EC%86%8C%EA%B0%9C-body-parser%EB%A5%BC-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-%ED%95%98%EC%A7%80%EB%A7%8C-body-parser%EB%A5%BC-%EC%93%B0%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94-bc3cbe0b2fd
// import bodyParser from "body-parser";

// //cookie-parser - session을 다루기 위해 cookie에 유저정보를 저장하는 미들웨어
// //[참고] https://jw910911.tistory.com/59
// import cookieParser from "cookie-parser";

// const app = express();

// const PORT = 4000;

// function handleListening() {
//   console.log(`Listening on: http://localhost:${PORT}`);
// }
// const handleHome = (req, res) => res.send("shut up");

// //arrow function
// const handleProfile = (req, res) => res.send("You are on my profile");

// //MiddleWare
// {
//   //req, res 뿐만 아니라 추가적인
//   //커넥션을 주고 받는 함수라면 next를 통해서 권한을 줌
//   // //미들웨어
//   // const secondMiddleWare = (next) => console.log("second");
//   // const betweenHome = (req, res, next) => {
//   //   console.log("I'm between");
//   //   //다음 미들웨어 함수에 제어 전달
//   //   const n = next();
//   //   secondMiddleWare(n);
//   // };
//   // app.use(betweenHome);
// }

// app.use(cookieParser());
// //json파일 이용하여 파일 송수신?
// //[참고] https://smilehugo.tistory.com/entry/nodejs-json-create-store-read-update
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// //helmet middle ware를 사용하겠다.
// app.use(helmet());
// //morgan middle ware를 사용하겠다.
// app.use(morgan("dev"));

// //server에 요청함
// app.get("/", handleHome);

// app.get("/profile", handleProfile);

// //PORT에 접속하면, handleListening을 실행하라
// app.listen(PORT, handleListening);
