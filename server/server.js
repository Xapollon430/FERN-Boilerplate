require("dotenv").config(); // this loads env vars

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
