const express = require("express"); // 6th Step!!
const bookmarks = express.Router();
const reviewsController = require("./reviewsController.js");
const {
  getAllBookmarks,
  getBookmark,
  createBookmark,
  deleteBookmark,
  updateBookmark
} = require("../queries/bookmarks.js");
const { checkName, checkBoolean, validateUrl } = require("../validations/checkBookmarks")
// ^(Imports) Extends our app so that we can create a new route for our BOOKMARKS resource
// we need to make this ASYNC as well
bookmarks.use("/:bookmarkId/reviews", reviewsController);

// we need to make this ASYNC as well
bookmarks.get("/", async (req, res) => {
  const allBookmarks = await getAllBookmarks();
  // res.json({ status:'ok' })
  if (allBookmarks[0]) {
    // if we have data, then return it
    // an empty array is TRUTHY - so wee need to check for an element, ergo why we wrote the if condition above.
    res.status(200).json(allBookmarks);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

bookmarks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bookmark = await getBookmark(id);
  if (bookmark) {
    res.json(bookmark);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

bookmarks.post("/", checkName, validateUrl, checkBoolean, async (req, res) => {
  try {
    const bookmark = await createBookmark(req.body);
    res.json(bookmark)
  } catch (error) {
    return error;
  }
});

bookmarks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBookmark = await deleteBookmark(id);
  // if our response has an ID we are good to go!
  // an error will NOT have an id
  if (deletedBookmark.id) {
    res.status(200).json(deletedBookmark)
  } else {
    // an error will NOT have an ID and therefore return our error
    res.status(404).json({ error: "Bookmark not found!" });
  }
});

bookmarks.put("/:id", validateUrl, checkBoolean, checkName, async (req, res) => {
  const { id } = req.params;
  const { bookmark } = req.body;
  // updatedBookmark will either be a MASSIVE error object from SQL
  // OR it will be a bookmark with the keys and values we expected
  const updatedBookmark = await updateBookmark(bookmark, id);
  if (updatedBookmark.id) {
    res.status(200).json(updatedBookmark);
  } else {
    res.status(404).json({error: "Bookmark not updated for some reason...."});
  }
})

module.exports = bookmarks;
// EXPORT our Bookmarks Router
