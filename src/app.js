const express = require("express");
const cors = require("cors");
const movieRoutes = require("./routers/movie.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/moives", movieRoutes);
app.get("/", (req, res) => {
  res.send("Movie Api is Running");
});

module.exports = app;
