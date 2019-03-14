"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//imports
const Person_1 = require("./models/Person");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
const app = express();
const server = new http.Server(app);
const port = 4200;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));
// define a route handler for the default home page
app.get('/', function (req, res) {
    console.log("connected");
    res.sendFile(path.resolve('./public/index.html'));
});
app.get("/login", (req, res) => {
    res.redirect("/");
});
app.post("/create/person", (req, res) => {
    console.log(req.body);
    let height = req.body.height;
    let weight = req.body.weight;
    let person = new Person_1.Person(height, weight);
    console.log("created person with height " + height + " and weight " + weight);
    res.send(person);
});
// start the Express server
server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
