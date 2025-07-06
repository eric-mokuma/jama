/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('events', function (table) {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('location').notNullable()
    table.string('date').notNullable()
    table.string('type').notNullable() // social, career, cultural
    table.integer('groupId').references('id').inTable('groups')
    table.text('attendees') // comma-separated user IDs or JSON
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
