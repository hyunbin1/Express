const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// jade 사용 선언
app.locals.pretty = true;
app.set("view engine", "jade");
app.set("views", "./views");
// 정적인 파일 삽입을 위한 폴더 지정
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// url = router, response = controller
app.get("/", (req, res) => {
  let title = ["Id 1 is!", "Id 2 is!", "Id 3 is!"];
  let output = `
  <a href="/title?id=0">query data 1</a></br>
  <a href="/title?id=0">query data 2</a></br>
  <a href="/title?id=0">query data 3</a></br>
  ${title[req.query.id]}
  `;
  res.send(output);
});

app.get("/image", (req, res) => {
  res.send("<img src='/code.png'>");
});

app.get("/template", (req, res) => {
  res.render("temp", { time: Date() });
});

app.listen(port, () => {
  console.log(`Connecting http://localhost:${port}`);
});
