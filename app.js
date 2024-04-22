require("dotenv").config();
const { Start_log } = require("./logs/starter");
const express = require("express");
const kleur = require("kleur");
const { Mongo } = require("./MongoDB/Connection");
const { Redis } = require("./Redis/Connection");
const { Mongo_Model } = require("./MongoDB/check");

const Domain = process.env.Domain || "localhost";
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "html")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);

const startTime = performance.now();
app.listen(port, async () => {
  const endTime = performance.now();
  const timeTaken = (endTime - startTime) / 1000;
  const logMessage = `[${kleur.blue().bold("SkyRising - Starter")}] ${kleur.white().bgBlack(`Started at ${Domain}:${port}, in ${timeTaken} seconds.`)}`;
  console.log(logMessage);
});
