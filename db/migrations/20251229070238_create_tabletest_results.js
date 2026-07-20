exports.up = function (knex) {
  return knex.schema.createTable("results", function (table) {
    table.increments("resultid").primary();

    table.string("user_full_name", 100).notNullable();
    table.string("subject", 100);
    table.string("topic", 100);

    table.enu("difficulty", ["Easy", "Medium", "Hard"]);

    table.string("test_set", 50);

    table.integer("score");
    table.integer("total_questions");
    table.decimal("percentage", 5, 2);

    table
      .integer("questionid")
      .unsigned()
      .notNullable()
      .references("questionid")
      .inTable("questions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("results");
};
