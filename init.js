import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

//해당 PORT에 접속하면 handleListenling을 실행
app.listen(PORT, handleListening);
