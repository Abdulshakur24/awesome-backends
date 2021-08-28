const express = require("express");
const apiRouter = express.Router();
const imagesRouter = require("./Routers/images");
const videosRouter = require("./Routers/videos");

apiRouter.use("/images", imagesRouter);
apiRouter.use("/videos", videosRouter);

module.exports = apiRouter;
