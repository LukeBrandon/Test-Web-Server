"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
exports.app = express();
const server = new http.Server(exports.app);
const port = 4200;
exports.app.use(bodyParser.json());
exports.app.use(express.static(path.join(__dirname, "../public")));
//import routes
require("./routes");
// start the Express server
server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
