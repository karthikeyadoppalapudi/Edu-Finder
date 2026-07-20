exports.up = function (knex) {
  return knex.schema.createTable("colleges", function (table) {
    table.increments("collegeid").primary();
    table.string("name", 50).notNullable();
    table.text("description");
    table.string("logo_url", 255);
    table.string("location", 100);
    table.string("established_year"); // ✅ FIX
    table.float("rating");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("colleges");
};
