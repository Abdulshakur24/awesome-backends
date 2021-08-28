const express = require("express");
const imagesRouter = express.Router();
const pool = require("../db");

imagesRouter.get("/", async (req, res) => {
  try {
    await pool.query("SELECT * FROM images;").then((response) => {
      if (response.command === "SELECT") res.send(response.rows);
      res.end();
    });
  } catch (error) {
    res.send(error);
  }
});

imagesRouter.post("/create", async (req, res) => {
  try {
    const { name, url } = req.body;
    await pool
      .query("INSERT INTO images (name, url) VALUES ($1, $2) RETURNING id;", [
        name,
        url,
      ])
      .then(async (response) => {
        if (response.command === "INSERT") {
          res.send(response);
        } else res.send(response.command);
      });
  } catch (error) {
    res.send(error);
  }
});

imagesRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool
      .query("DELETE FROM images WHERE id = $1;", [id])
      .then((response) => {
        if (response.command === "DELETE") res.send(response);
        else res.send(response);
      });
  } catch (error) {
    res.send(error);
  }
});

imagesRouter.delete("/delete/all", async (req, res) => {
  try {
    await pool
      .query("TRUNCATE ONLY images RESTART IDENTITY;")
      .then((response) => {
        if (response.command === "TRUNCATE") res.send(response);
        else res.send(response);
      });
  } catch (error) {
    res.send(error);
  }
});

module.exports = imagesRouter;
