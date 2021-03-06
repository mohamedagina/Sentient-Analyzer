var path = require("path");

const express = require("express");

const mockAPIResponse = require("./mockAPI.js");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// API Variables
const key = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?";
const lang = "en";

//Handle POST requests
const fetch = require("node-fetch");
app.post("/analyze", (req, res) => {
  const input = req.body.url;
  const ApiUrl = `${baseUrl}key=${key}&url=${input}&lang=${lang}`;
  fetch(ApiUrl)
    .then((result) => result.json())
    .then((data) => {
      res.send(data);
    });
});
