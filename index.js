const express = require("express");

require("dotenv").config();
const db = require("./config/db");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/articles", async (req, res) => {
  try {
    const articles = await db.select().from("articles").orderBy("published_date", "desc").limit(1000);

    res.json(articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while scraping." });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});