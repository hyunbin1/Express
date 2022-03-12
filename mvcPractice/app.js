const express = require("express");
const app = express();
const port = 3000;
const BoardRouter = require("./routes/board");

// 서버 실행 방법: npx nodemon app.js

app.get("/", function (req, res) {
  res.end("Hello World!");
});

app.use("/board", BoardRouter);

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});
