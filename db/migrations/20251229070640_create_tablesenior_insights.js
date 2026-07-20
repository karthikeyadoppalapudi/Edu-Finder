exports.up = function (knex) {
  return knex.schema.createTable("seniors", function (table) {
    table.increments("seniorid").primary();

    table.string("name", 100).notNullable();
    table.string("photo_url", 255);
    table.string("college", 150);
    table.string("course", 100);
    table.string("year");

    table.text("experience");
    table.text("course_tips");
    table.text("college_life");
    table.text("achievements");

    table.string("contact_email", 100);
    table.string("linkedin_url", 255);
    table.string("phone", 15);
    table.string("whatsapp_number", 15);

    table
      .integer("collegeid")
      .unsigned()
      .notNullable()
      .references("collegeid")
      .inTable("colleges")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("seniors");
};
