const Parser = require("rss-parser");
const db = require("./config/db");

let parser = new Parser();

const storeArticles = async (articles) => {
  for (let article of articles) {
    // Check if article already exists in the database
    const exists = await db("articles").where("link", article.link).first();

    // If it does not exist, insert it
    // parse the date
    let publishedDate = new Date(article.pubDate);

    if (!exists) {
      await db("articles").insert({
        title: article.title,
        link: article.link,
        rss_feed_id: article.rss_feed_id,
        published_date: publishedDate,
      });
    }
  }
};

(async () => {
  const websites = await db.select(["id", "rss_feed_url"]).from("rss_feeds");

  for (let website of websites) {
    let feedURL = website.rss_feed_url;
    let feed = await parser.parseURL(feedURL);
    let items = feed.items.map((item) => {
      return {
        ...item,
        rss_feed_id: website.id,
      };
    });

    await storeArticles(items);
  }

  await db.destroy();
})();