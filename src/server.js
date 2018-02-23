import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import renderTemplate from "./template";

const app = express();

app.get("/", (req, res) => {
  res.send(renderTemplate());
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
