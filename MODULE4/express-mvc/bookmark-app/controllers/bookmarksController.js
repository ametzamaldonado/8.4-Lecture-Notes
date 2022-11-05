const express = require("express");
const bookmarks = express.Router();
// Controller dictates the logic of the router

const bookmarksData = require("../models/bookmarks.js");
// quick reminder!  We can key into arrays with strings because they are objects!
console.log(bookmarksData["1"])

// INDEX Route
// (in order to get to this line the path is already "/bookmarks")
bookmarks.get("/", (req, res) => {
    res.json(bookmarksData)
});

// SHOW ROUTE
bookmarks.get("/:id", (req, res) => {
    const { id } = req.params;
    if (bookmarksData[id]) {
        res.json(bookmarksData[id])
    } else {
        // because the API has no data, the network status is '304' but the below code fixes it and returns a '404' message. We don't want a '304' error.
        res.status(404).send("no bookmark found - sorry")
    } 
})

// CREATE Route
bookmarks.post("/", (req, res) => {
    bookmarksData.push(req.body);
    res.json(bookmarksData[bookmarksData.length - 1])
})

// DELETE Route
bookmarks.delete("/:id" , (req, res) => {
    const { id } = req.params;
    if(bookmarksData[id]){
        const deletedBookmark = bookmarksData.splice(id, 1)
        res.status(200).json(deletedBookmark)
    } else {
        // because the API has no data, the network status is '304' but the below code fixes it and returns a '404' message. We don't want a '304' error.
        res.status(404).send('no bookmark found - sorry')
    }
});

// UPDATE Route
bookmarks.put("/:id" , (req, res) => {
    const { id } = req.params;
    bookmarksData[id] = req.body;
    res.status(200).json(bookmarksData[id])
})

module.exports = bookmarks
