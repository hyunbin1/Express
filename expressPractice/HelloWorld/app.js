const express = require("express");
const app = express();
const port = 3000;

// jade 사용 선언
app.locals.pretty = true;
app.set("view engine", "jade");
app.set("views", "./views");
// 정적인 파일 삽입을 위한 폴더 지정
app.use(express.static("public"));

// url = router, response = controller
app.get("/", (req, res) => {
  res.send("<img src='/code.png'>");
});

app.get("/template", (req, res) => {
  res.render("temp", { time: Date() });
});

app.listen(port, () => {
  console.log(`Connecting http://localhost:${port}`);
});
