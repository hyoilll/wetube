import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

//.env에 있는 port로 연결하거나 4000번으로 연결
const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

//해당 PORT에 접속하면 handleListenling을 실행
app.listen(PORT, handleListening);
