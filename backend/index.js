const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ak@124421",
  database: "OP",
});

app.use(cors());
app.use(express.json()); // Use express.json() as a function
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM fruits";
  db.query(sqlSelect, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error while fetching data");
    } else {
      console.log("Data fetched successfully");
      res.status(200).json(results); // Send the retrieved data as JSON response
    }
  });
});

app.post("/api/insert", (req, res) => {
  const devilfruit = req.body.devilfruit;
  const type = req.body.type;
  const power = req.body.power;
  const ability = req.body.ability;
  const user = req.body.user;
  const info = req.body.info;

  const sqlInsert =
    "INSERT INTO fruits (devilfruit, type, power, ability, user, info) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [devilfruit, type, power, ability, user, info],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error while inserting data");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("Data inserted successfully");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
