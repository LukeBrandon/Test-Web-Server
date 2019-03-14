"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./models/Person");
const server_1 = require("./server");
var path = require("path");
server_1.app.get('/', function (req, res) {
    console.log("connected");
    res.sendFile(path.resolve('./public/index.html'));
});
server_1.app.get("/login", (req, res) => {
    res.redirect("/");
});
server_1.app.post("/create/person", (req, res) => {
    let height = req.body.height;
    let weight = req.body.weight;
    let person = new Person_1.Person(height, weight);
    console.log("created person with height " + height + " and weight " + weight);
    res.send(person);
});
