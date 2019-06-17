const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

// Matches with /api/books/search
router.post("/search", (req, res) => {
  let bookTitle = req.body.query.replace(/\s/g, "+");
  axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
  ).then(
      (response) => {
          res.json(response.data.items)
      }
  ).catch(
      (err) => {
          res.json({error: error})
      }
  );
});

module.exports = router;
