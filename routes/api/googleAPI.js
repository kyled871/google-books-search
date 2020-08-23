const router = require("express").Router();
const googleController = require("../../controllers/googleController");
// Get Put and Delete for "/api/books/:id"
router
  .route("/:title")
  .get(googleController.findByTitle)
module.exports = router;