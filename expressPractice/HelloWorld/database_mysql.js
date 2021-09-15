let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kimgusqls1",
  database: "o2",
});

connection.connect();

//# 조회하는 방법
// let sql = "SELECT * FROM topic";
// connection.query(sql, function (err, rows, fields) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("rows", rows);
//     console.log("fields", fields);
//   }
// });

//# 삽입하는 방법
// let insert = "INSERT INTO topic (title, description, author) VALUES (?,?,?)";
// let params = ["Supervisor", "Watcher", "Graphittie"];

// connection.query(insert, params, function (err, rows, fields) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(rows.insertId);
//   }
// });

//# Update
// let update = "Update topic SET title = ?, author = ? WHERE id=?";
// let params = ["NPM", "HYUNBIN", 1];
// connection.query(update, params, function (err, rows, fields) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(rows);
//   }
// });

let deleted = "DELETE FROM topic WHERE id=?";

let params = [1];
connection.query(deleted, params, function (err, rows, fields) {
  if (err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});

connection.end();
