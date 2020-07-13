//node.js 전용 mongoDb 기반 라이브러리
//mongoose - mongoDB에 있는 데이터를 javascript객체로 사용할 수 있도록 해줌
import mongoose from "mongoose";
//dotenv - 애플리케이션을 베포할 때 db는 이용자가 볼 수 있게 하면안되기에
//따로 .env파일을 이용해서 가명을 쓰게함
import dotenv from "dotenv";
//config()의 반환값은 .env파일에 있는 값들이 process.env.Key 형식으로 반환됨
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
