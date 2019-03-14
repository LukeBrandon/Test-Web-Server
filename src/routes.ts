import { Person } from './models/Person';
import { Request, Response } from "express";
import { app } from './server';

var path = require("path");


app.get('/', function (req: Request, res: Response) {
    console.log("connected");
    res.sendFile(path.resolve('./public/index.html'));
});

app.get("/login", (req: Request, res: Response) => {
    res.redirect("/");
});

app.post("/create/person", (req: Request, res: Response) => {
    let height: number = req.body.height;
    let weight: number = req.body.weight;
    let person: Person = new Person(height, weight);
    console.log("created person with height " + height + " and weight " + weight);
    res.send(person);
});
