const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Restaurant API running");
});

module.exports = app;

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const categoryRoutes = require("./routes/categoryRoutes");

app.use("/api/categories", categoryRoutes);

const menuRoutes = require("./routes/menuRoutes");

app.use("/api/menu", menuRoutes);
