exports.up = function (knex) {
  return knex.schema.createTable("questions", function (table) {
    table.increments("questionid").primary();

    table.string("subject", 100).notNullable();
    table.string("topic", 100).notNullable();

    table.enu("difficulty", ["Easy", "Medium", "Hard"]).defaultTo("Easy");

    table.string("test_set", 50);
    table.text("question_text");
    table.json("options");

    table.tinyint("correct_option_index");

    table.text("explanation");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("questions");
};
