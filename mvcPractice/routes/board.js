const router = require("express").Router();
// const controller = require("./controller");

router.get("/", (req, res) => {
  res.send("Get Method was successfully worked");
});

module.exports = router;
