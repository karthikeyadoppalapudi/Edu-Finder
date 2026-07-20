exports.up = function (knex) {
  return knex.schema.createTable("smartlearn", function (table) {
    table.increments("smartlearnid").primary();

    table.string("title", 200).notNullable();
    table.text("description");
    table.string("subject", 100).notNullable();
    table.string("topic", 100);
    table.string("video_url", 255);
    table.string("thumbnail_url", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("smartlearn");
};
