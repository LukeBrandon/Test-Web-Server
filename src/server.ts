//imports
import { Person } from "./models/Person"


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");


export const app = express();
const server = new http.Server(app);
const port = 4200;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));


//import routes
import "./routes";


// start the Express server
server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});