const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
    },

    videoUrl: {
      type: String,
      required: true,
    },
  },
  { timeseries: true },
);

module.exports = mongoose.model("Movie", movieSchema);
