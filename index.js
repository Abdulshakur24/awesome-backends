const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./apiRouter");

const PORT = process.env.PORT || 5010;

app.use(express.json());
app.use(cors());

app.use(apiRouter);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
