/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("articles", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.string("link").notNullable().unique();
    table.timestamp("published_date").notNullable();
    table.integer("rss_feed_id").unsigned().notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("articles");
};
