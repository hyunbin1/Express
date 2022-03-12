const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// 정적인 파일 삽입을 위한 폴더 지정
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// jade 사용 선언
app.locals.pretty = true;
app.set("view engine", "jade");
app.set("views", "./views");

app.get("/topic/add", (req, res) => {
  res.render("temp");
});

app.post("/topic", (req, res) => {
  // let title = req.body.title;
  // let description = req.body.description;
  res.send("Hello post, " + req.body.title);
});

app.listen(port, () => {
  console.log(`Success to connect http://localhost:${port}`);
});
