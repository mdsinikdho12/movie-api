const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movie.controller");

router.post("/", movieController.createMovie);
router.get("/", movieController.getMovie);
router.get("/search", movieController.searchMoies);
router.get("/category/:category", movieController.getMovieByCategory);

module.exports = router;
