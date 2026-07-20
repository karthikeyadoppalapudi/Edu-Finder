exports.up = function (knex) {
  return knex.schema.createTable("feedback", function (table) {
    table.increments("feedbackid").primary();

    table.string("name", 100).notNullable();
    table.string("email", 100).notNullable();
    table.string("phone", 15).notNullable();
    table.string("type", 50).notNullable();
    table.string("subject", 150).notNullable();
    table.text("message");

    table.enu("status", ["Pending", "Resolved", "Closed"]).defaultTo("Pending");

    table.text("admin_reply");
    table.boolean("reply_sent").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("feedback");
};
