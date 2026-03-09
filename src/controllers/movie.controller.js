const movieService = require("../services/movie.service");

const createMovie = async (req, res) => {
  try {
    const { title, category, videoUrl } = req.body;
    if (!title || !category || !videoUrl) {
      return res
        .status(400)
        .json({ message: "title, category, videoUrl required" });
    }

    const movie = await movieService.createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovie = async (req, res) => {
  try {
    const movies = await movieService.getAllMoives();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchMoies = async (req, res) => {
  try {
    const movies = await movieService.searchMoies(req.query.q);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieByCategory = async (req, res) => {
  try {
    const movies = await movieService.getMovieByCategory(req.params.category);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMovie,
  getMovie,
  searchMoies,
  getMovieByCategory,
};
