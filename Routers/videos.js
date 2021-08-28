const express = require("express");
const pool = require("../db");
const videosRouter = express.Router();

videosRouter.get("/", async (req, res) => {
  try {
    await pool.query("SELECT * FROM videos;").then((response) => {
      if (response.command === "SELECT") res.send(response);
      else res.send(response);
    });
  } catch (error) {
    res.send(error);
  }
});

videosRouter.post("/create", async (req, res) => {
  try {
    const { videoName, videoUrl } = req.body;
    await pool
      .query(
        "INSERT INTO videos (name, video_url) VALUES ($1, $2) RETURNING id;",
        [videoName, videoUrl]
      )
      .then((response) => {
        if (response.command === "INSERT") res.send(response);
      });
  } catch (error) {
    res.send(error);
  }
});

videosRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool
      .query("DELETE FROM videos WHERE id = $1;", [id])
      .then((response) => {
        if (response.command === "DELETE") res.send(response);
        else res.send(response);
        console.log(response);
      });
  } catch (error) {
    res.send(error);
  }
});

videosRouter.delete("/delete/all", async (req, res) => {
  try {
    await pool
      .query("TRUNCATE ONLY videos RESTART IDENTITY;")
      .then((response) => {
        if (response.command === "TRUNCATE") res.send(response);
        else res.send(response);
      });
  } catch (error) {
    res.send(error);
  }
});

module.exports = videosRouter;
