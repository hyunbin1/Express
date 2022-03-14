var express = require("express");
var router = express.Router();

let participants = [
  { id: 1, nation: "Korea" },
  { id: 2, nation: "america" },
  { id: 3, nation: "konggo" },
  { id: 4, nation: "uer" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(participants);
});

// 각 국 조회
router.get("/:id", (req, res, next) => {
  const participant = participants.find(
    (participant) => participant.id === parseInt(req.params.id)
  );
  res.json(participant);
});

// 참가국 삭제
router.delete("/:id", (req, res, next) => {
  const deleteParticipant = participants.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!deleteParticipant) {
    return res.status(404).send("There is no nation.");
  }
  const index = participants.indexOf(deleteParticipant);
  participants.splice(index, 1);
  res.json("deleted");
});

// 참가국 추가
router.post("/", (req, res, next) => {
  const addParticipant = {
    id: participants.length + 1,
    nation: req.body.nation,
  };
  participants.push(addParticipant);
  res.json(addParticipant); // 완료된 내용을 내가 보기 위해서 res 이것으로 추가
});

module.exports = router;
