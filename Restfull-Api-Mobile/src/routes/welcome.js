const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  const resObject = {
    message: "Welcome to API UAS Mobile Programming",
    status: 200,
    createdBy: "PLUG-IN",
    fullDocumentation: "https://documenter.getpostman.com/view/12171356/TVzRGdS6"
  }
  res.status(200).json(resObject);
});

module.exports = welcomeRouter;
