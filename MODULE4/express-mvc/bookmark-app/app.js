const express = require("express");
const app = express();
const cors = require("cors");

// middleware to enable CORS on our server
app.use(cors());

// to help add to object using 'POST':
app.use(express.json());

// adding middleware
app.use((req, res, next) => {
    console.log("8.4 is the coolest")
    next();
})

const bookmarksController = require("./controllers/bookmarksController.js");

app.get("/", (req, res) => {
    res.send("Welcome to the bookmarks app !@#!@#!@")
});
// app.use is a fucntion that allows express to use code in the process of servicing a reuqest
// in this case once we get the route '/bookmarks' express will use the bookmarksController
 app.use("/bookmarks", bookmarksController);
//  this is a catch all route that must be at the BOTTOM of our routes;
//  this route will handle any bad reoutes and reply with a 404 and a json object
app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;