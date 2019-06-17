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

// Matches with /api/books/booksearch
// router
//   .get("/searchbooks", (req, res) => {
//   axios
//     .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

module.exports = router;
