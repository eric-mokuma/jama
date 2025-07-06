/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('messages', function (table) {
    table.increments('id').primary()
    table.string('chatId').notNullable()
    table.integer('senderId').references('id').inTable('users')
    table.text('text').notNullable()
    table.timestamp('timestamp').defaultTo(knex.fn.now())
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('messages')
}
