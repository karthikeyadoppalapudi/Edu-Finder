exports.up = function (knex) {
  return knex.schema.createTable("courses", function (table) {
    table.increments("courseid").primary();

    table.string("name", 50).notNullable();
    table.string("abbreviation", 20);
    table.string("duration", 20);
    table.string("level", 50);

    table.decimal("min_percentage", 5, 2);
    table.decimal("fees", 10, 2);

    table.text("eligibility_criteria");
    table.text("key_subjects");
    table.text("description");

    table
      .integer("collegeid")
      .unsigned()
      .notNullable()
      .references("collegeid")
      .inTable("colleges")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("courses");
};
