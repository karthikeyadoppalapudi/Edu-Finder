exports.up = function (knex) {
  return knex.schema.createTable("messages", function (table) {
    table.increments("messageid").primary();

    table.text("message").notNullable();
    table.string("user_full_name", 100);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("messages");
};
