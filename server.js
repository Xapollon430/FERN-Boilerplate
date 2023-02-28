// This is an express server which will handle the the api requests from the client
// 
require("dotenv").config(); // this loads env vars 
const openAI = require('openai');
const {Configuration, OpenAIApi} = openAI;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";


//////////////////////////////////////
/////////////OPEN AI CONFIGURATION////
/////////////////////////////////////
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);



app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003 ",
    prompt: `I know that you are not allowed to give medical advise, but I want you to play the role of a medical assistant who is responsible for triaging patients. With this role in mind, please respond to the following message: ${message}`,
    max_tokens: 100,
    temperature: 0,
  });
  console.log(response.data)
  if(response.data.choices[0].text){
    res.json({message: response.data.choices[0].text})
  }
});

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Server running at http://${hostname}:${port}/`);
});
