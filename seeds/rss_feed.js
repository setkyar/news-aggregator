/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('rss_feeds').del()

  await knex("rss_feeds").insert([
    { rss_feed_url: "https://medium.com/feed/airbnb-engineering" },
    { rss_feed_url: "https://medium.com/feed/@netflixtechblog" },
    { rss_feed_url: "https://engineering.fb.com/feed" },
    { rss_feed_url: "https://engineering.linkedin.com/blog.rss.html" },
    { rss_feed_url: "https://dropbox.tech/feed" },
    { rss_feed_url: "https://engineering.atspotify.com/feed" },
    { rss_feed_url: "https://eng.lyft.com/feed" },
    { rss_feed_url: "https://slack.engineering/feed" },
    { rss_feed_url: "https://github.blog/category/engineering/feed" },
    { rss_feed_url: "https://medium.engineering/feed" },
    { rss_feed_url: "https://blog.developer.atlassian.com/feed" },
    { rss_feed_url: "https://engineering.grab.com/feed" },
    { rss_feed_url: "https://deliveroo.engineering/feed" },
    { rss_feed_url: "https://blog.codinghorror.com/rss" },
    { rss_feed_url: "https://www.joelonsoftware.com/feed" },
    { rss_feed_url: "https://blog.pragmaticengineer.com/rss" },
    { rss_feed_url:"https://blog.janestreet.com/feed.xml",},
  ]);
};