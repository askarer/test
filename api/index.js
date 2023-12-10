const express = require("express");
const cors = require("cors");
const fs = require("node:fs");

const app = express();
const port = 3100;
const storage = "storage";
const fileName = storage + "/test.txt";

app.use(cors());

app.get("/", (req, res) => {
  if (!fs.existsSync(fileName)) {
    res.send("No data");
  }
  else {
    fs.readFile(storage + "/test.txt", "utf-8", (err, data) => {
      if (err) throw err;
      res.send(data.replace(/\r\n/g, '<br />'));
    });
  }
});

app.get("/write", (req, res) => {
  let content = new Date().toISOString() + "\r\n";

  if (!fs.existsSync(storage)) {
    fs.mkdirSync(storage);
  }

  fs.appendFile(storage + "/test.txt", content, (err) => {
    if (err) {
      console.error(err);
    }
    res.send("Success!: " + content);
  });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
