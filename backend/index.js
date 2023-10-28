import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ak@124421",
  database: "OP",
});

app.post("/upload", upload.single("image"), (req, res) => {
  const image = req.file.filename;
  const sql = "INSERT INTO userdata (image) VALUES (?)";

  db.query(sql, [image], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ Status: "Error" });
    }

    return res.json({ Status: "Success" });
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
