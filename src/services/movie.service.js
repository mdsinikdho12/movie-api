const movie = require("../models/movie.model");

const createMovie = async (data) => {
  return await movie.create(data);
};

const getAllMoives = async () => {
  return await movie.find();
};

const searchMoies = async (keyword) => {
  return await movie.find({ title: { $regex: keyword, $options: "i" } });
};

const getMovieByCategory = async (category) => {
  return await movie.find({ category });
};

module.exports = {
  createMovie,
  getAllMoives,
  searchMoies,
  getMovieByCategory,
};
