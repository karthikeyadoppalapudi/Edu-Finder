exports.up = function (knex) {
  return knex.schema.createTable("notes", function (table) {
    table.increments("noteid").primary();

    table.string("title", 200).notNullable();
    table.text("content");
    table.string("category", 100);
    table.string("subject", 100);
    table.string("tags", 255);

    table.boolean("is_important").defaultTo(false);
    table.date("note_date");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
