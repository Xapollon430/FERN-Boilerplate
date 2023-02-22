require("dotenv").config(); // this loads env vars
import { Configuration, OpenAIApi } from "openai";
const openAI = require('openai');
const {Configuration, OpenAIApi} = openAI;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 4000;


//////////////////////////////////////
/////////////OPEN AI CONFIGURATION////
/////////////////////////////////////
const configuration = new Configuration({
  organization: "org-A6PfoiumUB6kwgEX3wqlIwSq",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);





app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req, res) => {
  res.json({
    message: "Hello World!"
  });
});

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
