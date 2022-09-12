import express from "express";
import { posts } from "./model/posts.js";
import xml from "xml";
import { xmlFeedObject } from "./utils/xmlFeedObject.js";
const app = express();
const port = 4000;

app.get("/api/ping", (req, res) => {
  const response = { answer: "pong" };
  console.log(posts);
  res.status(200).json(response);
});

app.get("/api/rss", (req, res) => {
  console.log("creating RSS feed");

  const feed = '<?xml version="1.0" encoding="UTF-8"?>' + xml(xmlFeedObject);
  console.log(feed);
  // res.status(200).json(feed);
  res.header("Content-Type", "text/xml").send(feed);
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
